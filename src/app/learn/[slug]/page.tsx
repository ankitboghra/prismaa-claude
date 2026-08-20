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
  const slugs = await getArticleSlugs("learn");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle("learn", slug);

  if (!article) {
    return pageMetadata({
      title: "Guide not found",
      description: "This guide could not be found.",
      path: `/learn/${slug}`,
      noIndex: true,
    });
  }

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/learn/${article.slug}`,
    type: "article",
    keywords: article.tags,
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt ?? article.publishedAt,
    authors: [article.author],
  });
}

export default async function LearnArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle("learn", slug);
  if (!article) notFound();

  const pool = await getArticles("learn");
  const related = relatedArticles(article, pool);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Patient Guide", path: "/learn" },
    { name: article.title, path: `/learn/${article.slug}` },
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
            path: `/learn/${article.slug}`,
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
