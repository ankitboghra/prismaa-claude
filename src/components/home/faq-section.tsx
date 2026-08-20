import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { homepageFaqs } from "@/data/faqs";
import { petMyths } from "@/data/pet-explainer";
import { primaryPhone, telUrl, whatsappUrl } from "@/data/site";

export function FaqSection() {
  return (
    <Section tone="surface" id="faq">
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Common questions"
              title="The things people are too polite to ask"
              lede="If your question is not here, call us. We would much rather explain it now than have you worry about it until the appointment."
            />

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
              <Button href={telUrl(primaryPhone.e164)} block>
                <PhoneIcon className="h-4 w-4" />
                {primaryPhone.display}
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" block>
                <WhatsAppIcon className="h-4 w-4" />
                Ask on WhatsApp
              </Button>
            </div>

            {/* Myth-busting sits beside the FAQ because the two do the same
                job: removing a reason not to book. */}
            <div className="mt-9 rounded-panel border border-amber-100 bg-amber-50/60 p-5">
              <h3 className="font-display text-base font-bold text-amber-900">
                Worries we hear most often
              </h3>
              <dl className="mt-4 flex flex-col gap-4">
                {petMyths.slice(0, 3).map((item) => (
                  <div key={item.myth}>
                    <dt className="text-[0.875rem] font-semibold text-amber-900">
                      &ldquo;{item.myth}&rdquo;
                    </dt>
                    <dd className="mt-1 text-[0.875rem] leading-relaxed text-amber-900/75">
                      {item.truth}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <Accordion
            items={homepageFaqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            }))}
            defaultOpenIndex={0}
          />
        </div>
      </Container>
    </Section>
  );
}
