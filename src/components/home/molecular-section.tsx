import Link from "next/link";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Icon } from "@/components/ui/icons";
import { molecularServices } from "@/data/services";

/**
 * Gallium-68 and the targeted tracer family.
 *
 * This is the second big differentiator after the scanner, and it needs its
 * own section because "advanced molecular imaging" means nothing to a patient
 * until it is expressed as "the scan that finds prostate cancer other scans
 * miss".
 */
export function MolecularSection() {
  return (
    <Section tone="surface" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-coral-50/70 to-transparent"
      />

      <Container width="wide" className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Advanced molecular imaging"
              title={
                <>
                  Tracers that lock on to{" "}
                  <span className="text-spectrum">one specific target</span>
                </>
              }
              lede="Standard PET follows sugar, which every busy cell consumes. Gallium-68 tracers are built differently: each is designed to fit one protein found on one kind of tumour cell — so the cancer lights up and almost nothing else does."
            />

            <div className="mt-7 rounded-card border border-coral-100 bg-coral-50/60 p-5">
              <h3 className="font-display text-base font-bold text-coral-900">
                Why this matters to you
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-coral-900/80">
                Several cancers are poorly seen on a standard sugar-based scan —
                prostate cancer, neuroendocrine tumours, and pancreatic and
                peritoneal disease among them. A targeted tracer is often the
                difference between a scan that finds the disease and one that
                reports nothing abnormal.
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-coral-900/80">
                These studies are produced to order, so please give us a few
                days&apos; notice when booking.
              </p>
            </div>

            <div className="mt-6">
              <Button href="/services" variant="secondary">
                See all molecular studies
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ul className="flex flex-col gap-3.5">
            {molecularServices.map((service, index) => (
              <Reveal
                as="li"
                key={service.slug}
                delay={index * 60}
                className="group relative rounded-card bg-white p-5 shadow-e1 ring-1 ring-ink-100/80 transition hover:shadow-e2 hover:ring-coral-200"
              >
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-coral-50 text-coral-700">
                    <Icon name={service.icon} className="h-5.5 w-5.5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-900">
                      <Link
                        href={`/services/${service.slug}`}
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {service.name}
                      </Link>
                    </h3>
                    {service.tracer ? (
                      <p className="mt-0.5 text-[0.75rem] font-semibold tracking-wide text-coral-600">
                        {service.tracer}
                      </p>
                    ) : null}
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-600">
                      {service.summary}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-coral-700 transition group-hover:gap-1.5">
                      Read more
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
