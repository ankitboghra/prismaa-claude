import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import { ArticleIndex } from "@/components/content/article-index";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getArticles } from "@/lib/content";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Patient Guide — PET Scans, Cancer & Treatment Explained",
  description:
    "Plain-language guides to PET/CT scans, cancer staging, radiation safety, scan preparation and reading your report — written by onco-radiologists for patients and families.",
  path: "/learn",
  keywords: [
    "what is a PET scan",
    "PET CT preparation",
    "cancer staging explained",
    "is a PET scan safe",
    "PET scan report meaning",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Patient Guide", path: "/learn" },
];

export default async function LearnPage() {
  const articles = await getArticles("learn");

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Patient guide"
        title="Understand what is happening to you"
        lede="Being handed a prescription you cannot read is frightening. These guides explain PET scans, cancer, staging and treatment in ordinary language — no medical background needed."
      />

      <ArticleIndex
        articles={articles}
        emptyMessage="Guides are being written and will appear here shortly."
      />

      <CtaBand
        title="Still have a question?"
        body="Call us. We would much rather explain something now than have you worry about it until your appointment."
      />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Prismaa patient guide",
            url: absoluteUrl("/learn"),
            hasPart: articles.map((article) => ({
              "@type": "MedicalWebPage",
              headline: article.title,
              url: absoluteUrl(`/learn/${article.slug}`),
              datePublished: article.publishedAt,
            })),
          },
        ]}
      />
    </>
  );
}
