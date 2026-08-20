import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import { ArticleBody } from "@/components/content/article-body";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import {
  getArticle,
  getArticleSlugs,
  getArticles,
  relatedArticles,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle("blog", slug);

  if (!article) {
    return pageMetadata({
      title: "Post not found",
      description: "This post could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    type: "article",
    keywords: article.tags,
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt ?? article.publishedAt,
    authors: [article.author],
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle("blog", slug);
  if (!article) notFound();

  const pool = await getArticles("blog");
  const related = relatedArticles(article, pool);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/blog" },
    { name: article.title, path: `/blog/${article.slug}` },
  ];

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={article.category}
        title={article.title}
        lede={article.description}
      />

      <ArticleBody article={article} related={related} />

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            title: article.title,
            description: article.description,
            path: `/blog/${article.slug}`,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt,
            authorName: article.author,
            image: article.image,
          }),
        ]}
      />
    </>
  );
}
