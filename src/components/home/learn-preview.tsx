import Link from "next/link";
import {
  Container,
  Pill,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { ArticleMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";

const audienceLabels: Record<ArticleMeta["audience"], string> = {
  patients: "For patients",
  doctors: "For clinicians",
  researchers: "Practice note",
};

export function ArticleCard({
  article,
  showDate = true,
}: {
  article: ArticleMeta;
  showDate?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-card bg-white p-5 shadow-e1 ring-1 ring-ink-100/80 transition duration-300 hover:-translate-y-0.5 hover:shadow-e2 hover:ring-brand-200">
      <div className="flex flex-wrap items-center gap-2">
        <Pill tone={article.audience === "patients" ? "teal" : "brand"}>
          {audienceLabels[article.audience]}
        </Pill>
        <span className="text-[0.75rem] font-medium text-ink-400">
          {article.category}
        </span>
      </div>

      <h3 className="mt-3.5 font-display text-[1.0625rem] leading-snug font-bold text-ink-900">
        <Link
          href={`/${article.collection}/${article.slug}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {article.title}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-ink-600">
        {article.description}
      </p>

      <p className="mt-4 flex items-center gap-2 border-t border-ink-100 pt-3.5 text-[0.75rem] text-ink-500">
        <span>{article.readingMinutes} min read</span>
        {showDate ? (
          <>
            <span aria-hidden>·</span>
            <span>{formatDate(article.publishedAt)}</span>
          </>
        ) : null}
        <ArrowRightIcon className="ml-auto h-4 w-4 text-brand-600 transition group-hover:translate-x-0.5" />
      </p>
    </article>
  );
}

/**
 * The education hub, previewed. This is the site's main organic-search entry
 * point: patients search their question long before they search for a centre,
 * and the answer is how they find us.
 */
export function LearnPreview({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null;

  return (
    <Section tone="surface" id="learn">
      <Container width="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Patient guide"
            title="Understand what is happening to you"
            lede="Plain-language explanations of PET scans, cancer, staging and treatment — written by our radiologists for patients and their families, not for other doctors."
            className="sm:max-w-2xl"
          />
          <Button href="/learn" variant="secondary" className="shrink-0">
            All guides
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <ul className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug} className="contents">
              <ArticleCard article={article} showDate={false} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function BlogPreview({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null;

  return (
    <Section tone="canvas" id="insights" spacing="tight">
      <Container width="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Notes from our radiologists"
            lede="Clinical notes, case observations and practice writing — some for patients, some for colleagues and researchers."
            className="sm:max-w-2xl"
          />
          <Button href="/blog" variant="secondary" className="shrink-0">
            All posts
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <ul className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug} className="contents">
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
