import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import { ArticleIndex } from "@/components/content/article-index";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getArticles } from "@/lib/content";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = pageMetadata({
  title: "Insights — Notes from Our Radiologists",
  description:
    "Clinical notes, case observations and practice writing from the radiologists at Prismaa OncoImaging, Surat — on digital PET/CT, FAPI, theranostics and structured reporting.",
  path: "/blog",
  keywords: [
    "onco radiology blog India",
    "FAPI PET CT clinical",
    "theranostics India",
    "PET CT case reports",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Insights", path: "/blog" },
];

export default async function BlogPage() {
  const articles = await getArticles("blog");

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Insights"
        title="Notes from our radiologists"
        lede="Some of this is written for patients, some for referring clinicians and researchers. Each post is labelled so you know which is which before you start reading."
      />

      <ArticleIndex
        articles={articles}
        emptyMessage="Posts are on the way — check back shortly."
      />

      <CtaBand
        title="Referring a patient, or want to discuss a case?"
        body="Call the centre or bring the case to our weekly tumour board. We are happy to review prior imaging before committing a patient to a study."
      />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${siteConfig.name} Insights`,
            url: absoluteUrl("/blog"),
            blogPost: articles.map((article) => ({
              "@type": "BlogPosting",
              headline: article.title,
              url: absoluteUrl(`/blog/${article.slug}`),
              datePublished: article.publishedAt,
              author: { "@type": "Person", name: article.author },
            })),
          },
        ]}
      />
    </>
  );
}
