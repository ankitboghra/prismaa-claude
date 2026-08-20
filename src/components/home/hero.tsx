import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/ui/layout-primitives";
import { ArrowRightIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ScanFusion } from "@/components/visuals/scan-fusion";
import { petAnalogy, petInOneLine } from "@/data/pet-explainer";
import { primaryPhone, telUrl, whatsappUrl } from "@/data/site";
import { trustPoints } from "@/data/stats";

/**
 * The hero does two jobs at once, deliberately.
 *
 * A patient arriving here has usually just been handed a prescription and is
 * frightened; the first thing they need is to understand what a PET/CT *is*.
 * At the same time this is the highest-converting real estate on the site. So
 * the explanation and the phone number share the fold rather than competing
 * for it, and the H1 carries the search term people actually type.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-28 pb-16 text-ink-200 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Ambient prism light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-amber-500/14 blur-[120px]" />
        <div className="absolute -right-24 top-24 h-[26rem] w-[26rem] rounded-full bg-teal-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-coral-600/15 blur-[100px]" />
      </div>

      <Container width="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="animate-rise">
            <Eyebrow tone="light">
              South Gujarat&apos;s first digital PET/CT
            </Eyebrow>

            <h1 className="mt-5 text-display-lg text-white">
              See it sooner.{" "}
              <span className="text-spectrum">See it clearly.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300 sm:text-xl">
              {petInOneLine} Prismaa runs Surat&apos;s only high-resolution{" "}
              <strong className="font-semibold text-white">
                digital PET/CT
              </strong>{" "}
              — sharper images, half the scan time, and a lower radiation dose.
              At the same price as a conventional scan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={telUrl(primaryPhone.e164)}
                variant="accent"
                size="lg"
                className="sm:w-auto"
              >
                <PhoneIcon className="h-5 w-5" />
                {primaryPhone.display}
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" size="lg">
                <WhatsAppIcon className="h-5 w-5" />
                Book on WhatsApp
              </Button>
            </div>

            <ul className="mt-9 grid gap-2.5 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[0.9375rem] text-ink-300"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* The explainer panel — "what am I actually being sent for?" */}
          <div className="animate-rise rounded-panel border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7 [animation-delay:120ms]">
            <h2 className="font-display text-lg font-bold text-white sm:text-xl">
              So what is a PET/CT scan?
            </h2>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-300">
              {petAnalogy.body}
            </p>

            <ScanFusion className="mt-6 [&_figcaption]:text-ink-400" />

            <a
              href="#what-is-a-pet-scan"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition hover:text-teal-200"
            >
              Understand the full scan, step by step
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
