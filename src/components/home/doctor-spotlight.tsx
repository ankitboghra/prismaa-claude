import {
  Container,
  Eyebrow,
  Pill,
  Section,
} from "@/components/ui/layout-primitives";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Figure } from "@/components/media/figure";
import { leadDoctor, teamSize } from "@/data/team";
import { initials } from "@/lib/utils";

/**
 * One doctor on the homepage, the rest behind a link.
 *
 * Patients choose a centre partly on who will read their scan, so the lead
 * radiologist's credentials belong above the fold of this section — but twelve
 * profiles would bury everything around them.
 */
export function DoctorSpotlight() {
  return (
    <Section tone="canvas" id="doctors">
      <Container width="wide">
        <div className="overflow-hidden rounded-panel bg-white shadow-e2 ring-1 ring-ink-100">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative bg-ink-950">
              {leadDoctor.photo ? (
                <Figure
                  src={leadDoctor.photo}
                  alt={`${leadDoctor.name}, ${leadDoctor.role} at Prismaa OncoImaging, Surat`}
                  ratio="4/5"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full"
                />
              ) : (
                <div className="relative flex aspect-4/5 items-center justify-center lg:aspect-auto lg:h-full">
                  <span aria-hidden className="bg-grid absolute inset-0 opacity-60" />
                  <span
                    aria-hidden
                    className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-amber-500/16 blur-[90px]"
                  />
                  <span className="relative grid h-32 w-32 place-items-center rounded-full bg-white/10 font-display text-4xl font-extrabold text-white ring-1 ring-white/20 backdrop-blur">
                    {initials(leadDoctor.name)}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-9 lg:p-11">
              <Eyebrow>Who reads your scan</Eyebrow>

              <h2 className="mt-4 text-display-sm">{leadDoctor.name}</h2>
              <p className="mt-2 font-display text-[0.9375rem] font-semibold text-brand-700">
                {leadDoctor.role}
              </p>
              <p className="mt-1 text-[0.875rem] text-ink-500">
                {leadDoctor.qualifications}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {leadDoctor.focusAreas.map((area) => (
                  <Pill key={area} tone="brand">
                    {area}
                  </Pill>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3.5 text-[0.9375rem] leading-relaxed text-ink-600">
                {leadDoctor.bio?.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-ink-100 pt-6 sm:grid-cols-3">
                <div>
                  <dt className="text-[0.75rem] font-semibold tracking-wide text-ink-500 uppercase">
                    Reported daily
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold text-ink-900">
                    20–25 PET/CT
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] font-semibold tracking-wide text-ink-500 uppercase">
                    Sub-specialty
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold text-ink-900">
                    Onco-radiology
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] font-semibold tracking-wide text-ink-500 uppercase">
                    Full team
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold text-ink-900">
                    {teamSize} specialists
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/team">
                  Meet all {teamSize} doctors
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Button href="/about" variant="ghost">
                  About the centre
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
