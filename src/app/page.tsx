import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { PetExplainerSection } from "@/components/home/pet-explainer-section";
import { TechAdvantage } from "@/components/home/tech-advantage";
import { ServicesSection } from "@/components/home/services-section";
import { MolecularSection } from "@/components/home/molecular-section";
import { BeyondCancer } from "@/components/home/beyond-cancer";
import { DoctorSpotlight } from "@/components/home/doctor-spotlight";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BlogPreview, LearnPreview } from "@/components/home/learn-preview";
import { FaqSection } from "@/components/home/faq-section";
import { ComingSoonSection } from "@/components/home/coming-soon-section";
import { ContactSection } from "@/components/home/contact-section";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, physicianSchema } from "@/lib/jsonld";
import { homepageFaqs } from "@/data/faqs";
import { getArticles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = pageMetadata({
  title: `Digital PET/CT Scan Centre in Surat | ${siteConfig.name}`,
  description:
    "Surat's first high-resolution digital PET/CT — 2.9 mm resolution, 15-minute scans and lower radiation, at conventional PET/CT prices. PSMA, DOTA and FAPI molecular studies. Call +91 93169 25516.",
  path: "/",
  keywords: [
    "PET CT scan Surat",
    "digital PET CT Surat",
    "PET scan centre Surat",
    "PET CT cost in Surat",
    "PSMA PET CT Surat",
    "cancer scan centre South Gujarat",
  ],
});

/**
 * The homepage carries most of the site's substance by design: patients and
 * their relatives read one page, on a phone, once. Depth lives on the inner
 * routes for the people who want it, and for search.
 */
export default async function HomePage() {
  const [learnArticles, blogArticles] = await Promise.all([
    getArticles("learn"),
    getArticles("blog"),
  ]);

  return (
    <>
      <Hero />
      <StatsBand />
      <PetExplainerSection />
      <TechAdvantage />
      <ServicesSection />
      <MolecularSection />
      <BeyondCancer />
      <DoctorSpotlight />
      <GalleryPreview />
      <TestimonialsSection />
      <LearnPreview articles={learnArticles.slice(0, 6)} />
      <BlogPreview articles={blogArticles.slice(0, 3)} />
      <FaqSection />
      <ComingSoonSection />
      <ContactSection />

      <JsonLd data={[faqSchema(homepageFaqs), physicianSchema()]} />
    </>
  );
}
