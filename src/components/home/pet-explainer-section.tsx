import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { journeySteps, whyPetIsNeeded } from "@/data/pet-explainer";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * "Why do I need one?" and "What will actually happen to me?" — the two
 * questions every patient has, answered before they are asked. The journey is
 * a numbered vertical timeline because that is how anxiety about an unfamiliar
 * procedure is best defused: by making it predictable.
 */
export function PetExplainerSection() {
  return (
    <Section id="what-is-a-pet-scan" tone="canvas">
      <Container width="wide">
        <SectionHeading
          eyebrow="Understanding your scan"
          title="Why your doctor asked for a PET/CT"
          lede="There are usually one of four reasons. Knowing which one applies to you makes the report much easier to understand when it arrives."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyPetIsNeeded.map((reason, index) => (
            <Reveal
              key={reason.title}
              delay={index * 70}
              className="rounded-card bg-white p-5 shadow-e1 ring-1 ring-ink-100/80"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={reason.icon} className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 font-display text-base leading-snug font-bold text-ink-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-600">
                {reason.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* The day itself */}
        <div className="mt-16 lg:mt-24">
          <SectionHeading
            eyebrow="What happens on the day"
            title="Your scan, from arrival to report"
            lede="Around two and a half hours in the centre in total — most of it spent resting. The scan itself is the shortest part."
          />

          <ol className="relative mt-10 grid gap-0 lg:grid-cols-2 lg:gap-x-12">
            {journeySteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.step}
                delay={index * 60}
                className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5"
              >
                {/* Connector rail */}
                <div className="flex flex-col items-center">
                  <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-e1 ring-1 ring-ink-100">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  {index < journeySteps.length - 1 ? (
                    <span
                      aria-hidden
                      className="mt-1 w-px flex-1 bg-gradient-to-b from-ink-200 to-transparent"
                    />
                  ) : null}
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="text-[0.6875rem] font-bold tracking-widest text-brand-600 uppercase">
                      Step {step.step}
                    </span>
                    <span className="rounded-full bg-ink-50 px-2 py-0.5 text-[0.6875rem] font-semibold text-ink-500">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-600">
                    {step.body}
                  </p>
                  {step.reassurance ? (
                    <p className="mt-2.5 border-l-2 border-teal-300 pl-3 text-[0.875rem] leading-relaxed font-medium text-teal-800">
                      {step.reassurance}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/learn/how-to-prepare-for-a-pet-ct-scan" variant="secondary">
              Read the full preparation checklist
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href="/learn" variant="ghost">
              Browse the patient guide
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
