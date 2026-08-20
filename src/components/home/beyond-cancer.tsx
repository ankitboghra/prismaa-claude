import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Icon, type IconName } from "@/components/ui/icons";

/**
 * "PET is only for cancer" is the single most common misconception we meet,
 * and it costs people scans their neurologist or cardiologist has correctly
 * recommended. Hence its own section rather than a line in the services list.
 */
const fields: {
  icon: IconName;
  field: string;
  headline: string;
  body: string;
  href: string;
  accent: "coral" | "brand" | "amber";
}[] = [
  {
    icon: "brain",
    field: "Neurology",
    headline: "Memory loss, dementia and epilepsy",
    body: "MRI shows the brain's shape. PET shows how it is working — which is how Alzheimer's is told apart from frontotemporal or Lewy body dementia, and how the origin of drug-resistant seizures is located before surgery.",
    href: "/services/brain-pet-ct-dementia",
    accent: "coral",
  },
  {
    icon: "heart",
    field: "Cardiology",
    headline: "Is this heart muscle worth operating on?",
    body: "After a heart attack, weakened muscle may be dead scar or alive but starved. On an echo they look identical; they demand opposite decisions. PET tells them apart before bypass surgery is agreed.",
    href: "/services/cardiac-viability-pet-ct",
    accent: "brand",
  },
  {
    icon: "thermometer",
    field: "Infection & inflammation",
    headline: "Weeks of fever and every test normal",
    body: "White cells fighting infection burn sugar just as tumours do. One whole-body scan finds the hidden abscess, the inflamed artery or the occult lymphoma — and shows the physician exactly where to biopsy.",
    href: "/services/puo-infection-pet-ct",
    accent: "amber",
  },
];

const accentClasses = {
  coral: "bg-coral-50 text-coral-700",
  brand: "bg-brand-50 text-brand-700",
  amber: "bg-amber-50 text-amber-700",
} as const;

export function BeyondCancer() {
  return (
    <Section tone="canvas" spacing="tight">
      <Container width="wide">
        <SectionHeading
          eyebrow="Beyond oncology"
          title="A PET/CT is not only for cancer"
          lede="Roughly a fifth of the scans we perform are for something else entirely. If your neurologist, cardiologist or physician has asked for a PET/CT, this is why."
        />

        <ul className="mt-9 grid gap-3.5 lg:grid-cols-3">
          {fields.map((item, index) => (
            <Reveal
              as="li"
              key={item.field}
              delay={index * 70}
              className="group relative flex flex-col rounded-panel bg-white p-6 shadow-e1 ring-1 ring-ink-100/80 transition hover:shadow-e2"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-xl ${accentClasses[item.accent]}`}
              >
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <p className="mt-4 text-[0.6875rem] font-bold tracking-[0.16em] text-ink-400 uppercase">
                {item.field}
              </p>
              <h3 className="mt-1.5 font-display text-lg leading-snug font-bold text-ink-900">
                {item.headline}
              </h3>
              <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-ink-600">
                {item.body}
              </p>
              <Button
                href={item.href}
                variant="ghost"
                size="sm"
                className="mt-4 -ml-3.5 self-start"
              >
                Learn more
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Button>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
