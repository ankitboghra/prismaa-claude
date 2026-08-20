import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Button } from "@/components/ui/button";
import {
  ClockIcon,
  ExternalIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { siteConfig, telUrl, whatsappUrl } from "@/data/site";
import { directionsUrl } from "@/lib/jsonld";

/**
 * Four ways to reach us, ranked by how people actually behave: phone first
 * (the majority of enquiries), then WhatsApp, then the map, then email.
 */
export function ContactSection() {
  return (
    <Section tone="canvas" id="contact">
      <Container width="wide">
        <div className="overflow-hidden rounded-panel bg-white shadow-e2 ring-1 ring-ink-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-9 lg:p-11">
              <SectionHeading
                eyebrow="Book a scan"
                title="Call us — we answer the phone"
                lede="Tell us the scan your doctor has asked for and we will confirm a slot, explain the preparation, and give you a clear price before you come in."
              />

              <div className="mt-7 flex flex-col gap-3">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.e164}
                    href={telUrl(phone.e164)}
                    className="group flex items-center gap-4 rounded-card border border-ink-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold tracking-tight text-ink-900">
                        {phone.display}
                      </span>
                      <span className="block text-[0.8125rem] text-ink-500">
                        {phone.label}
                      </span>
                    </span>
                  </a>
                ))}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-card border border-[#25D366]/30 bg-[#25D366]/8 p-4 transition hover:bg-[#25D366]/15"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-[#04301a]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold text-ink-900">
                      Message us on WhatsApp
                    </span>
                    <span className="block text-[0.8125rem] text-ink-500">
                      Send your prescription and we will call you back
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-card border border-ink-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-50 text-ink-700">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold text-ink-900">
                      {siteConfig.email}
                    </span>
                    <span className="block text-[0.8125rem] text-ink-500">
                      For reports, records and referring doctors
                    </span>
                  </span>
                </a>

                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-card border border-ink-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-50 text-ink-700">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold text-ink-900">
                      {siteConfig.socials.instagramHandle}
                    </span>
                    <span className="block text-[0.8125rem] text-ink-500">
                      Updates from the centre
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col border-t border-ink-100 bg-canvas lg:border-t-0 lg:border-l">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                title={`Map to ${siteConfig.legalName}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 lg:h-80"
              />

              <div className="flex flex-1 flex-col gap-6 p-6 sm:p-9">
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <address className="text-[0.9375rem] leading-relaxed text-ink-700 not-italic">
                    <strong className="block font-display font-bold text-ink-900">
                      {siteConfig.legalName}
                    </strong>
                    {siteConfig.address.line1},<br />
                    {siteConfig.address.line2},<br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.postalCode}
                  </address>
                </div>

                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <dl className="text-[0.9375rem] text-ink-700">
                    {siteConfig.hours.map((slot) => (
                      <div key={slot.days} className="flex flex-wrap gap-x-2">
                        <dt className="font-semibold text-ink-900">
                          {slot.days}:
                        </dt>
                        <dd>{slot.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <Button href={directionsUrl} variant="secondary" block>
                  Get directions
                  <ExternalIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
