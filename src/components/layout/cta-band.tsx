import { Container, Section } from "@/components/ui/layout-primitives";
import { Button } from "@/components/ui/button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { primaryPhone, siteConfig, telUrl, whatsappUrl } from "@/data/site";

/**
 * The closing call to action for inner pages. Every route ends with a way to
 * reach a human — nobody should read to the bottom of an article about their
 * diagnosis and find nothing to do next.
 */
export function CtaBand({
  title = "Talk to us before you book",
  body = "Tell us what your doctor has asked for and we will confirm the right scan, explain the preparation, and give you a clear price.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section tone="brand" spacing="tight" className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-teal-500/20 blur-[110px]" />
      </div>

      <Container width="wide" className="relative">
        <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-display-sm text-white">{title}</h2>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-brand-100/80">
              {body}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Button href={telUrl(primaryPhone.e164)} size="lg" variant="secondary">
              <PhoneIcon className="h-5 w-5" />
              {primaryPhone.display}
            </Button>
            <Button href={whatsappUrl} size="lg" variant="whatsapp">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>

        <p className="mt-7 border-t border-white/10 pt-5 text-[0.875rem] text-brand-100/60">
          {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
          {siteConfig.address.city} — {siteConfig.hours[0].days},{" "}
          {siteConfig.hours[0].time}
        </p>
      </Container>
    </Section>
  );
}
