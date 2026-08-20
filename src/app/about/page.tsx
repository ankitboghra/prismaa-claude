import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Figure } from "@/components/media/figure";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Icon, type IconName } from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { headlineStats } from "@/data/stats";
import { teamSize } from "@/data/team";
import { scanner } from "@/data/technology";

export const metadata = pageMetadata({
  title: "About Prismaa OncoImaging",
  description:
    "Why Prismaa was built: a digital PET/CT for South Gujarat, priced like a conventional one, with sub-specialty onco-radiology reporting and gallium-68 molecular studies in-house.",
  path: "/about",
  keywords: [
    "Prismaa OncoImaging Surat",
    "best PET CT centre Surat",
    "cancer diagnostic centre South Gujarat",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const principles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "target",
    title: "The best available technology, not the cheapest",
    body: `We bought the ${scanner.name} because a digital detector finds smaller lesions, needs less tracer and halves the time a patient spends on the table. Those are not marketing points; they are the three things that decide whether a scan changes a treatment plan.`,
  },
  {
    icon: "heart",
    title: "Priced so the advantage actually reaches people",
    body: "A digital PET/CT here costs the same as a conventional one elsewhere in Surat. A better scan that only reaches patients who can pay a premium is not an advance in cancer care — it is a luxury product.",
  },
  {
    icon: "document",
    title: "Reports your oncologist can act on",
    body: "Structured templates and standardised response criteria — RECIST 1.1, PERCIST, Deauville, mRECIST, Choi, RANO — used consistently, so a scan here can be compared against a scan done anywhere else.",
  },
  {
    icon: "chat",
    title: "Nobody leaves holding a report they cannot read",
    body: "If you want your scan explained, we will sit down with you and your family with the images on screen, in Gujarati if that is easier. It is not a service line and we do not charge for it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="About the centre"
        title="Built so nobody in South Gujarat has to travel for a better scan"
        lede="Prismaa OncoImaging opened in Surat with one deliberate idea: put a current-generation PET/CT in front of the patients who need it, at the price they were already paying."
      />

      <Section tone="canvas">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-ink-700">
              <p>
                Before Prismaa, a patient in Surat who wanted a digital PET/CT
                travelled to Ahmedabad or Mumbai for it. A day of travel, a night
                in an unfamiliar city, a relative taking leave from work, and a
                second trip to collect the films.
              </p>
              <p>
                For a well person that is an inconvenience. For someone three
                cycles into chemotherapy it is a genuine barrier — and barriers
                to imaging become delayed staging, which becomes delayed
                treatment.
              </p>
              <p>
                South Gujarat did not need another PET/CT. It needed one that
                was not a generation behind. So that is what we built, and we
                priced it so that choosing it would not be a financial decision.
              </p>
              <p>
                Alongside the scanner we brought the two things that decide
                whether it is worth having: gallium-68 molecular studies in
                house — PSMA, DOTA-TATE, FAPI and F-DOPA — and sub-specialty
                onco-radiology reporting rather than general radiology.
              </p>
              <p>
                Prismaa operates as a unit of{" "}
                <strong className="font-semibold text-ink-900">
                  Gujarat Imaging Centre
                </strong>
                , which means our reporting standards, protocols and access to
                sub-specialty opinion come from one of western India&apos;s
                highest-volume imaging groups rather than being built from
                scratch.
              </p>
            </div>

            <Figure
              alt="The waiting lounge at Prismaa OncoImaging, Surat"
              label="The centre interiors, designed by Craftspod Design Studio"
              ratio="4/3"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-panel shadow-e2"
            />
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container width="wide">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four things we decided at the start"
          />

          <ul className="mt-10 grid gap-3.5 sm:grid-cols-2">
            {principles.map((principle) => (
              <li
                key={principle.title}
                className="rounded-panel border border-ink-100 bg-canvas p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={principle.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug font-bold text-ink-900">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ink" spacing="tight" className="overflow-hidden">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
        <Container width="wide" className="relative">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {headlineStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {stat.prefix}
                  {stat.value.toLocaleString("en-IN")}
                  {stat.suffix}
                </dt>
                <dd className="mt-1.5 text-[0.9375rem] font-semibold text-ink-200">
                  {stat.label}
                </dd>
                <dd className="mt-1 text-[0.8125rem] text-ink-400">
                  {stat.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="canvas" spacing="tight">
        <Container width="wide">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-display-sm">
                {teamSize} specialists, one reporting standard
              </h2>
              <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-600">
                Radiologists, a nuclear medicine physician, a medical physicist
                and radiation safety officer, a radiopharmacist and our
                technologists.
              </p>
            </div>
            <Button href="/team" className="shrink-0">
              Meet the team
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand />

      <JsonLd data={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
