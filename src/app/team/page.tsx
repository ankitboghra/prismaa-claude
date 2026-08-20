import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import {
  Container,
  Eyebrow,
  Pill,
  Section,
} from "@/components/ui/layout-primitives";
import { Figure } from "@/components/media/figure";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, physicianSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import {
  clinicalTeam,
  leadDoctor,
  managementTeam,
  teamSize,
  type TeamMember,
} from "@/data/team";
import { initials } from "@/lib/utils";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col rounded-card bg-canvas p-5 ring-1 ring-ink-100">
      <div className="flex items-start gap-3.5">
        {member.photo ? (
          <Figure
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            ratio="1/1"
            sizes="48px"
            className="h-12 w-12 shrink-0 rounded-full"
          />
        ) : (
          <span
            aria-hidden
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-sm font-semibold text-brand-700 ring-1 ring-brand-100"
          >
            {initials(member.name)}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="font-display text-[0.9375rem] leading-snug font-semibold text-ink-900">
            {member.name}
          </h3>
          <p className="mt-0.5 text-[0.8125rem] leading-snug text-brand-700">
            {member.role}
          </p>
        </div>
      </div>

      <p className="mt-3 text-[0.8125rem] text-ink-600">
        {member.qualifications}
        {member.note ? (
          <span className="block text-ink-500">{member.note}</span>
        ) : null}
      </p>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {member.focusAreas.map((area) => (
          <Pill key={area}>{area}</Pill>
        ))}
      </div>
    </article>
  );
}

export const metadata = pageMetadata({
  title: "Our Doctors & Clinical Team",
  description: `Meet the ${teamSize} specialists at Prismaa OncoImaging, Surat — led by Dr. Keyur Mandaliya, onco-radiologist and molecular imaging specialist, with radiologists, physicists and technologists.`,
  path: "/team",
  keywords: [
    "onco radiologist Surat",
    "Dr Keyur Mandaliya",
    "PET CT doctors Surat",
    "nuclear medicine Surat",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our Doctors", path: "/team" },
];

export default function TeamPage() {

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="The people behind the report"
        title={`${teamSize} specialists, one reporting standard`}
        lede="A scan is only as good as the person reading it. Every study at Prismaa is reported against structured templates and standardised response criteria, so your oncologist gets the same quality of answer every time."
      />

      {/* Lead doctor — full profile */}
      <Section tone="canvas">
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              {leadDoctor.photo ? (
                <Figure
                  src={leadDoctor.photo}
                  alt={`${leadDoctor.name}, ${leadDoctor.role}`}
                  ratio="4/5"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="rounded-panel shadow-e2"
                />
              ) : (
                <div className="relative grid aspect-4/5 place-items-center overflow-hidden rounded-panel bg-ink-950 shadow-e2">
                  <span aria-hidden className="bg-grid absolute inset-0 opacity-60" />
                  <span
                    aria-hidden
                    className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-amber-500/16 blur-[90px]"
                  />
                  <span className="relative grid h-32 w-32 place-items-center rounded-full bg-white/10 font-display text-4xl font-extrabold text-white ring-1 ring-white/20 backdrop-blur">
                    {initials(leadDoctor.name)}
                  </span>
                </div>
              )}

              <div className="mt-6 rounded-card border border-ink-100 bg-white p-5">
                <h2 className="font-display text-[0.75rem] font-bold tracking-[0.14em] text-brand-700 uppercase">
                  Memberships
                </h2>
                <ul className="mt-3 flex flex-col gap-2 text-[0.875rem] text-ink-600">
                  {leadDoctor.affiliations?.map((affiliation) => (
                    <li key={affiliation}>{affiliation}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Eyebrow>Founder & lead consultant</Eyebrow>
              <h2 className="mt-4 text-display-sm">{leadDoctor.name}</h2>
              <p className="mt-2 font-display text-base font-semibold text-brand-700">
                {leadDoctor.role}
              </p>
              <p className="mt-1 text-[0.9375rem] text-ink-500">
                {leadDoctor.qualifications}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {leadDoctor.focusAreas.map((area) => (
                  <Pill key={area} tone="brand">
                    {area}
                  </Pill>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-ink-700">
                {leadDoctor.bio?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The rest of the team */}
      <Section tone="surface">
        <Container width="wide">
          <h2 className="text-display-sm">Radiology & nuclear medicine</h2>
          <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-600">
            Consultant radiologists and nuclear medicine physicians, several of
            them trained at Gujarat Imaging Centre and AIIMS. Every CT and PET/CT
            study is reported against the same structured templates and response
            criteria, whichever of them reads it.
          </p>

          <ul className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalTeam.map((member) => (
              <li key={member.slug} className="contents">
                <TeamCard member={member} />
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-display-sm">Management & operations</h2>
          <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-600">
            The people who run the appointment book, the insurance paperwork and
            the day you actually spend here.
          </p>

          <ul className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {managementTeam.map((member) => (
              <li key={member.slug} className="contents">
                <TeamCard member={member} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Want a second opinion on a scan done elsewhere?"
        body="Bring the images on a CD or send us a link. We will re-read them from scratch against your previous studies and issue a structured report."
      />

      <JsonLd data={[breadcrumbSchema(crumbs), physicianSchema()]} />
    </>
  );
}
