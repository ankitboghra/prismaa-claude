import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { readingTime } from "./utils";

/**
 * File-backed content.
 *
 * Articles are plain Markdown files in /content, so a doctor can write one in
 * any editor, commit it, and have it live — with no CMS to run and no database
 * to back up. Everything is read at build time, so pages stay fully static.
 *
 * When a proper authoring system replaces this, only the four exported
 * functions below need to change; nothing in the app layer touches the
 * filesystem directly.
 */

export type Collection = "blog" | "learn";

export interface ArticleMeta {
  slug: string;
  collection: Collection;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-02-14". */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  /** Section label, e.g. "Patient basics" or "Case report". */
  category: string;
  tags: string[];
  /** Who this is written for — drives the badge on the card. */
  audience: "patients" | "doctors" | "researchers";
  image?: string;
  featured?: boolean;
  readingMinutes: number;
}

export interface Article extends ArticleMeta {
  html: string;
  /** Extracted h2s, used for the in-page table of contents. */
  headings: { id: string; text: string }[];
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function readCollection(collection: Collection) {
  const dir = path.join(CONTENT_ROOT, collection);
  const files = await fs.readdir(dir);
  return files.filter((file) => file.endsWith(".md"));
}

function parseFrontmatter(
  collection: Collection,
  slug: string,
  data: Record<string, unknown>,
  body: string,
): ArticleMeta {
  const required = ["title", "description", "publishedAt", "author", "category"];
  for (const key of required) {
    if (!data[key]) {
      throw new Error(
        `content/${collection}/${slug}.md is missing required frontmatter: ${key}`,
      );
    }
  }

  return {
    slug,
    collection,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    author: String(data.author),
    category: String(data.category),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    audience: (data.audience as ArticleMeta["audience"]) ?? "patients",
    image: data.image ? String(data.image) : undefined,
    featured: Boolean(data.featured),
    readingMinutes: readingTime(body),
  };
}

/** Newest first. */
export async function getArticles(
  collection: Collection,
): Promise<ArticleMeta[]> {
  const files = await readCollection(collection);

  const articles = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = await fs.readFile(
        path.join(CONTENT_ROOT, collection, file),
        "utf8",
      );
      const { data, content } = matter(raw);
      return parseFrontmatter(collection, slug, data, content);
    }),
  );

  return articles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getArticle(
  collection: Collection,
  slug: string,
): Promise<Article | null> {
  const filePath = path.join(CONTENT_ROOT, collection, `${slug}.md`);

  let raw: string;
  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }

  const { data, content } = matter(raw);
  const meta = parseFrontmatter(collection, slug, data, content);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  const html = String(file);

  // rehype-slug has already assigned ids; pull them back out for the TOC
  // rather than running a second AST pass.
  const headings = [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map(
    (match) => ({
      id: match[1],
      text: match[2].replace(/<[^>]+>/g, "").trim(),
    }),
  );

  return { ...meta, html, headings };
}

export async function getArticleSlugs(collection: Collection) {
  const files = await readCollection(collection);
  return files.map((file) => file.replace(/\.md$/, ""));
}

/** Related reading: same collection, most tag overlap, newest as tiebreak. */
export function relatedArticles(
  current: ArticleMeta,
  pool: ArticleMeta[],
  limit = 3,
): ArticleMeta[] {
  return pool
    .filter((article) => article.slug !== current.slug)
    .map((article) => ({
      article,
      score: article.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.article.publishedAt.localeCompare(a.article.publishedAt),
    )
    .slice(0, limit)
    .map((entry) => entry.article);
}
