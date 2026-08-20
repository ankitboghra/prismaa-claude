import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon, Icon } from "@/components/ui/icons";
import { ResolutionCompare } from "@/components/visuals/resolution-compare";
import { scanner, specComparisons, techPillars } from "@/data/technology";

/**
 * The commercial heart of the site: why this centre rather than the one down
 * the road.
 *
 * The comparison names a technology generation, never a competing hospital,
 * and the "typical conventional" column is labelled as a range on screen. An
 * unfalsifiable claim would be worth less than an honest one anyway — the
 * numbers are strong enough without stretching them.
 */
export function TechAdvantage() {
  return (
    <Section tone="ink" id="technology" className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />
        <div className="absolute bottom-0 -left-20 h-96 w-96 rounded-full bg-amber-500/12 blur-[120px]" />
      </div>

      <Container width="wide" className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="The technology difference"
              title={
                <>
                  The same price.{" "}
                  <span className="text-spectrum">A generation ahead.</span>
                </>
              }
              lede={scanner.intro}
            />

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
                {scanner.manufacturer} {scanner.name}
              </span>
              <span className="rounded-full bg-teal-400/15 px-3.5 py-1.5 text-sm font-semibold text-teal-300 ring-1 ring-teal-400/30">
                {scanner.category}
              </span>
            </div>
          </div>

          <Reveal>
            <ResolutionCompare />
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-14 grid gap-3.5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
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

        {/* Spec-by-spec comparison */}
        <div className="mt-14 lg:mt-20">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            Point by point, against a conventional scanner
          </h3>
          <p className="mt-2 max-w-2xl text-[0.9375rem] text-ink-400">
            The right-hand column is the typical range for the analogue,
            photomultiplier-based PET/CT scanners still in routine service — a
            comparison of technology generations, not of any particular centre.
          </p>

          <div className="mt-7 overflow-hidden rounded-panel border border-white/10">
            {/* Header row is desktop-only; on mobile each row carries its own
                labels, which reads far better than a scrolling table. */}
            <div className="hidden bg-white/[0.06] px-6 py-3.5 text-[0.6875rem] font-bold tracking-widest text-ink-400 uppercase lg:grid lg:grid-cols-[1.4fr_1fr_1fr_1.7fr] lg:gap-6">
              <span>Specification</span>
              <span className="text-teal-300">Prismaa · uMI Vista</span>
              <span>Typical conventional</span>
              <span>What it means for you</span>
            </div>

            <div className="divide-y divide-white/10">
              {specComparisons.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-3 px-5 py-5 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.7fr] lg:items-start lg:gap-6"
                >
                  <div>
                    <p className="font-semibold text-white">{spec.label}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-ink-500">
                      {spec.meaning}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 rounded-lg bg-teal-400/10 px-3 py-2 lg:bg-transparent lg:px-0 lg:py-0">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-400 lg:hidden" />
                    <p>
                      <span className="text-[0.6875rem] font-bold tracking-wider text-teal-300 uppercase lg:hidden">
                        Prismaa ·{" "}
                      </span>
                      <span className="font-semibold text-teal-200">
                        {spec.prismaa}
                      </span>
                    </p>
                  </div>

                  <p className="px-3 lg:px-0">
                    <span className="text-[0.6875rem] font-bold tracking-wider text-ink-500 uppercase lg:hidden">
                      Conventional ·{" "}
                    </span>
                    <span className="text-ink-400">{spec.conventional}</span>
                  </p>

                  <p className="text-[0.875rem] leading-relaxed text-ink-300">
                    {spec.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/technology" variant="onDark" size="lg">
              How the scanner works
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button
              href="/learn/digital-vs-conventional-pet-ct"
              variant="ghost"
              size="lg"
              className="text-teal-300 hover:bg-white/5 hover:text-teal-200"
            >
              Read the patient explainer
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
