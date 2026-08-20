import {
  Container,
  Eyebrow,
  Section,
} from "@/components/ui/layout-primitives";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Icon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { comingSoon } from "@/data/coming-soon";
import { primaryPhone, telUrl, whatsappUrl } from "@/data/site";

/**
 * The teaser for the nuclear medicine wing.
 *
 * No launch date is given, deliberately: commissioning a therapy suite depends
 * on regulatory approval, and a missed date on a cancer centre's website costs
 * more trust than the teaser gains.
 */
export function ComingSoonSection() {
  return (
    <Section tone="ink" spacing="loose" className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute top-1/4 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-coral-600/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-500/15 blur-[110px]" />
      </div>

      <Container width="wide" className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light" className="justify-center">
            {comingSoon.eyebrow}
          </Eyebrow>
          <h2 className="mt-5 text-display-md text-white">
            {comingSoon.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-300 sm:text-xl">
            {comingSoon.lede}
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-400">
            {comingSoon.body}
          </p>
        </div>

        <div className="mt-12 grid gap-3.5 sm:grid-cols-3">
          {comingSoon.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="rounded-panel border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-coral-500/25 to-amber-400/20 text-white ring-1 ring-white/15">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg leading-snug font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-300">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-[0.9375rem] text-ink-400">{comingSoon.cta.note}</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={whatsappUrl} variant="whatsapp" size="lg">
              <WhatsAppIcon className="h-5 w-5" />
              {comingSoon.cta.label}
            </Button>
            <Button href={telUrl(primaryPhone.e164)} variant="onDark" size="lg">
              <PhoneIcon className="h-5 w-5" />
              {primaryPhone.display}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
