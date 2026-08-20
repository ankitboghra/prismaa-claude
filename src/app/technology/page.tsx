import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/media/figure";
import { ResolutionCompare } from "@/components/visuals/resolution-compare";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon, ExternalIcon, Icon } from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import {
  patientBenefits,
  scanner,
  specComparisons,
  techPillars,
} from "@/data/technology";

export const metadata = pageMetadata({
  title: "Our Technology — uMI Vista Digital PET/CT",
  description:
    "South Gujarat's only digital PET/CT. How silicon photomultiplier detectors deliver 2.9 mm resolution, 302 ps time-of-flight and 15-minute whole-body scans — and what that means for your diagnosis.",
  path: "/technology",
  keywords: [
    "uMI Vista Surat",
    "digital PET CT scanner India",
    "SiPM PET CT",
    "best PET CT machine Surat",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our Technology", path: "/technology" },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={`${scanner.manufacturer} ${scanner.name}`}
        title="The only digital PET/CT in South Gujarat"
        lede={scanner.claim}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/services" variant="onDark" size="lg">
            See what we scan for
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button
            href={scanner.productUrl}
            variant="ghost"
            size="lg"
            className="text-teal-300 hover:bg-white/5 hover:text-teal-200"
          >
            Manufacturer specification
            <ExternalIcon className="h-4 w-4" />
          </Button>
        </div>
      </PageHero>

      {/* What "digital" actually means */}
      <Section tone="canvas">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The detector"
                title="Photon counting instead of guesswork"
                lede={scanner.intro}
              />
              <div className="mt-6 flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-ink-600">
                <p>
                  Every PET scanner does the same fundamental job: detect the
                  faint flashes of light produced when the tracer in your body
                  decays, and work out exactly where each flash came from.
                  Resolution, radiation dose and scan time all follow from how
                  well it does that.
                </p>
                <p>
                  With photomultiplier tubes, several crystals share one large
                  detector and the position of each flash has to be estimated by
                  comparing signals between neighbours. A great deal of
                  information is lost in that estimation. With silicon
                  photomultipliers, each crystal has its own detector and each
                  photon is counted individually. Nothing is estimated.
                </p>
              </div>
            </div>

            <Figure
              alt="The United Imaging uMI Vista digital PET/CT scanner installed at Prismaa OncoImaging, Surat"
              label="The uMI Vista scanner in our scan room"
              ratio="4/3"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-panel shadow-e2"
              src={undefined}
            />
          </div>
        </Container>
      </Section>

      {/* Pillars */}
      <Section tone="ink" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0 opacity-50" />
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />
        </div>

        <Container width="wide" className="relative">
          <SectionHeading
            tone="light"
            eyebrow="What it delivers"
            title="Six things a digital detector changes"
          />

          <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {techPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 60}
                className="rounded-card border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-400/15 text-teal-300">
                  <Icon name={pillar.icon} className="h-5.5 w-5.5" />
                </span>
                <p className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white">
                  {pillar.stat}
                </p>
                <p className="text-[0.75rem] font-semibold tracking-wide text-teal-300/90 uppercase">
                  {pillar.statLabel}
                </p>
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-300">
                  {pillar.description}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            <ResolutionCompare />
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Why 2.9 mm rather than 4–5 mm matters
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-300">
                Cancer staging is a set of thresholds, and thresholds are where
                resolution counts. Whether a single 6 mm lymph node is reported
                as involved can be the difference between a curative operation
                and starting with chemotherapy. Whether a solitary bone lesion
                is seen at all can decide between radical and palliative intent.
              </p>
              <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-400">
                The scan is not just a picture. It is the evidence on which the
                treatment plan is built.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Full comparison table */}
      <Section tone="surface">
        <Container width="wide">
          <SectionHeading
            eyebrow="Side by side"
            title="Digital versus conventional PET/CT"
            lede="The right-hand column is the typical range for the analogue, photomultiplier-based scanners still in routine service — a comparison of technology generations, not of any particular centre."
          />

          <div className="mt-9 overflow-hidden rounded-panel ring-1 ring-ink-100">
            <div className="hidden bg-ink-50 px-6 py-3.5 text-[0.6875rem] font-bold tracking-widest text-ink-500 uppercase lg:grid lg:grid-cols-[1.3fr_1fr_1fr_1.8fr] lg:gap-6">
              <span>Specification</span>
              <span className="text-teal-700">Prismaa · uMI Vista</span>
              <span>Typical conventional</span>
              <span>What it means for you</span>
            </div>

            <div className="divide-y divide-ink-100 bg-white">
              {specComparisons.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-3 px-5 py-5 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1.8fr] lg:items-start lg:gap-6"
                >
                  <div>
                    <p className="font-semibold text-ink-900">{spec.label}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-ink-500">
                      {spec.meaning}
                    </p>
                  </div>
                  <p className="flex items-start gap-2 rounded-lg bg-teal-50 px-3 py-2 font-semibold text-teal-800 lg:bg-transparent lg:px-0 lg:py-0">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 lg:hidden" />
                    {spec.prismaa}
                  </p>
                  <p className="px-3 text-ink-500 lg:px-0">
                    {spec.conventional}
                  </p>
                  <p className="text-[0.875rem] leading-relaxed text-ink-600">
                    {spec.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-[0.8125rem] leading-relaxed text-ink-500">
            uMI Vista figures are drawn from the manufacturer&apos;s published
            specification and from peer-reviewed NEMA NU 2-2018 performance
            assessment of the system. Individual results vary with patient size,
            protocol and clinical indication.
          </p>
        </Container>
      </Section>

      {/* Patient benefit summary */}
      <Section tone="canvas" spacing="tight">
        <Container width="wide">
          <h2 className="text-display-sm">What this means for you</h2>
          <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
            {patientBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-card bg-white p-5 shadow-e1 ring-1 ring-ink-100/80"
              >
                <h3 className="font-display text-base font-bold text-ink-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-600">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/learn/digital-vs-conventional-pet-ct" variant="secondary">
              Read the plain-language explainer
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Same price. A generation ahead."
        body="There is no premium for the digital scan. Call us and we will confirm the price for the study your doctor has requested."
      />

      <JsonLd data={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
