import Link from "next/link";
import { PrismaaLogo } from "@/components/ui/logo";
import {
  ExternalIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/icons";
import { SpectrumRule } from "@/components/ui/layout-primitives";
import { footerNav } from "@/data/navigation";
import { formattedAddress, siteConfig, telUrl } from "@/data/site";
import { directionsUrl } from "@/lib/jsonld";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <SpectrumRule />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          {/* Identity + NAP. Kept as real text, not an image, because this is
              the block Google reads for the local pack. */}
          <div>
            <PrismaaLogo tone="light" showTagline />

            <p className="mt-4 text-[0.75rem] font-semibold tracking-[0.14em] text-amber-400 uppercase">
              {siteConfig.motto}
            </p>

            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-ink-400">
              A unit of {siteConfig.parentOrganisation}, and{" "}
              {siteConfig.region}&apos;s first high-resolution digital PET/CT
              centre. Advanced molecular imaging, read by fellowship-trained
              onco-radiologists — at conventional PET/CT prices.
            </p>

            <address className="mt-7 flex flex-col gap-4 text-[0.9375rem] not-italic">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 text-ink-300 transition hover:text-white"
              >
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                <span>
                  <span className="block leading-relaxed">
                    {siteConfig.address.line1},<br />
                    {siteConfig.address.line2},<br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.postalCode}
                  </span>
                  <span className="mt-1.5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-teal-400 group-hover:text-teal-300">
                    Open in Google Maps
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              </a>

              <div className="flex flex-col gap-1.5">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.e164}
                    href={telUrl(phone.e164)}
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <PhoneIcon className="h-5 w-5 shrink-0 text-teal-400" />
                    <span className="font-semibold tracking-wide text-white">
                      {phone.display}
                    </span>
                    <span className="text-[0.75rem] text-ink-500">
                      {phone.primary ? "Appointments" : "Additional"}
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <MailIcon className="h-5 w-5 shrink-0 text-teal-400" />
                {siteConfig.email}
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <InstagramIcon className="h-5 w-5 shrink-0 text-teal-400" />
                {siteConfig.socials.instagramHandle}
              </a>
            </address>

            <dl className="mt-7 border-t border-white/10 pt-6 text-[0.875rem]">
              {siteConfig.hours.map((slot) => (
                <div
                  key={slot.days}
                  className="flex justify-between gap-4 py-1.5"
                >
                  <dt className="text-ink-400">{slot.days}</dt>
                  <dd className="font-medium text-ink-200">{slot.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <nav
              aria-label="Footer"
              className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3"
            >
              {footerNav.map((group) => (
                <div key={group.title}>
                  <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-ink-500 uppercase">
                    {group.title}
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[0.9375rem] text-ink-300 transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="mt-10 overflow-hidden rounded-panel border border-white/10 bg-white/[0.03]">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                title={`Map showing ${siteConfig.legalName}, ${formattedAddress}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 grayscale-[0.35] contrast-[1.05]"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <p className="text-[0.8125rem] text-ink-400">
                  Ground floor · step-free access · parking available
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-teal-400 hover:text-teal-300"
                >
                  Get directions
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[0.8125rem] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="max-w-xl leading-relaxed">
            Information on this site is for general education and does not
            replace advice from your own doctor. Always discuss your scan and
            treatment with your treating physician.
          </p>
        </div>
      </div>
    </footer>
  );
}
