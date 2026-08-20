import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/layout-primitives";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  Icon,
  PhoneIcon,
  SparkIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import type { Service } from "@/data/services";
import { primaryPhone, telUrl, whatsappUrl } from "@/data/site";

/**
 * The full body of a service, shared by the quick-look modal on the homepage
 * and the dedicated /services/[slug] page. One component means the two can
 * never drift, and the modal is not a lesser summary of the page.
 */
export function ServiceDetail({
  service,
  headingId,
  showCta = true,
}: {
  service: Service;
  headingId: string;
  showCta?: boolean;
}) {
  return (
    <article>
      <header className="relative overflow-hidden bg-ink-950 px-5 pt-8 pb-7 text-ink-300 sm:px-8 sm:pt-10">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-amber-500/16 blur-[90px]"
        />

        <div className="relative">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-teal-300 ring-1 ring-white/15">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>

          <h2
            id={headingId}
            className="mt-4 pr-10 font-display text-2xl leading-tight font-extrabold text-white sm:text-3xl"
          >
            {service.name}
          </h2>

          <div className="mt-3.5 flex flex-wrap gap-2">
            {service.tracer ? (
              <Pill tone="light">
                <SparkIcon className="h-3.5 w-3.5" />
                {service.tracer}
              </Pill>
            ) : null}
            <Pill tone="light">
              <ClockIcon className="h-3.5 w-3.5" />
              {service.duration}
            </Pill>
            {service.isMolecular ? (
              <Pill tone="light">Advanced molecular study</Pill>
            ) : null}
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-8 px-5 py-7 sm:px-8 sm:py-9">
        <section>
          <h3 className="font-display text-[0.75rem] font-bold tracking-[0.14em] text-brand-700 uppercase">
            In simple words
          </h3>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-700">
            {service.explainer}
          </p>
        </section>

        <section>
          <h3 className="font-display text-[0.75rem] font-bold tracking-[0.14em] text-brand-700 uppercase">
            Questions this scan answers
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {service.answers.map((answer) => (
              <li
                key={answer}
                className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-700"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                {answer}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-card bg-teal-50 p-4 ring-1 ring-teal-100 sm:p-5">
          <h3 className="flex items-center gap-2 font-display text-[0.75rem] font-bold tracking-[0.14em] text-teal-800 uppercase">
            <SparkIcon className="h-4 w-4" />
            The Prismaa difference
          </h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-teal-900">
            {service.prismaaEdge}
          </p>
        </section>

        <div className="grid gap-8 sm:grid-cols-2">
          <section>
            <h3 className="font-display text-[0.75rem] font-bold tracking-[0.14em] text-brand-700 uppercase">
              Usually recommended for
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-[0.9375rem] text-ink-700">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex gap-2.5 leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-display text-[0.75rem] font-bold tracking-[0.14em] text-brand-700 uppercase">
              How to prepare
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-[0.9375rem] text-ink-700">
              {service.preparation.map((item) => (
                <li key={item} className="flex gap-2.5 leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {showCta ? (
          <section className="rounded-card border border-ink-100 bg-ink-50/70 p-4 sm:p-5">
            <p className="font-display text-base font-bold text-ink-900">
              Book this scan, or ask us whether it is the right one
            </p>
            <p className="mt-1 text-[0.875rem] text-ink-600">
              We are happy to discuss the request with your treating doctor
              before you commit to an appointment.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <Button href={telUrl(primaryPhone.e164)} block className="sm:w-auto">
                <PhoneIcon className="h-4 w-4" />
                {primaryPhone.display}
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" block className="sm:w-auto">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp us
              </Button>
              <Button
                href={`/services/${service.slug}`}
                variant="secondary"
                block
                className="sm:w-auto"
              >
                Full details
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
