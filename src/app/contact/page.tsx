import { PageHero } from "@/components/layout/page-hero";
import { ContactSection } from "@/components/home/contact-section";
import { Container, Section } from "@/components/ui/layout-primitives";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { primaryPhone, siteConfig } from "@/data/site";

export const metadata = pageMetadata({
  title: "Contact & Directions",
  description: `Book a PET/CT scan at Prismaa OncoImaging, Surat. Call ${primaryPhone.display}, message us on WhatsApp, or find us at Zenon Building, opposite Unique Hospital, Surat-395002.`,
  path: "/contact",
  keywords: [
    "PET CT centre near me Surat",
    "Prismaa OncoImaging contact",
    "book PET scan Surat",
    "PET CT Zenon Building Surat",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

/** Practical, appointment-related questions — distinct from the clinical FAQ. */
const visitFaqs = [
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Please call ahead. PET tracers are produced to order and decay within hours, so each scan slot is booked against a specific tracer batch. Walk-ins usually cannot be accommodated the same day, though we will always try in urgent cases.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For a standard FDG PET/CT, a day or two is normally enough. Gallium-68 studies — PSMA, DOTA-TATE and FAPI — need a few days' notice, and rare tracers such as Exendin-4 need longer. Call us and we will tell you the earliest realistic slot.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. We are on the ground floor of the Zenon Building with step-free access from the street, and parking is available. If you are driving and cannot find us, call and we will guide you in.",
  },
  {
    question: "Can a relative stay with me?",
    answer:
      "Yes, and we encourage it. Your relative can stay with you through registration and until the injection. During the uptake hour you rest alone in a quiet room — that is a radiation-safety measure, not a rule about visitors — and they can rejoin you immediately after the scan.",
  },
  {
    question: "Do you accept insurance and TPA claims?",
    answer:
      "We assist with insurance and TPA paperwork. Bring your policy details and any pre-authorisation documents. Tell us when you book so the paperwork can be started before you arrive rather than on the day.",
  },
  {
    question: "How do I get my report and images?",
    answer:
      "Most structured reports are released within 24 hours. You can collect them, have them emailed, or have them sent directly to your treating doctor. Images are provided on a CD in DICOM format — keep it, because it is what makes your next scan comparable.",
  },
  {
    question: "Can you send the report directly to my oncologist?",
    answer:
      "Yes. Give us your doctor's name and contact details at registration and we will send the report to them as soon as it is finalised.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Get in touch"
        title="Book a scan, or just ask us a question"
        lede={`We answer the phone. Call ${primaryPhone.display}, message us on WhatsApp, or email ${siteConfig.email} — whichever is easiest for you.`}
      />

      <ContactSection />

      <Section tone="surface" spacing="tight">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <h2 className="text-display-sm">Planning your visit</h2>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-600">
                Practical questions about appointments, paperwork and reports.
                For questions about the scan itself, see the patient guide.
              </p>
              <Button href="/learn" variant="secondary" className="mt-5">
                Read the patient guide
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>

            <Accordion items={visitFaqs} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(visitFaqs)]} />
    </>
  );
}
