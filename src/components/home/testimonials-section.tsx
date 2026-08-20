import {
  Container,
  Pill,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { YouTubeLite } from "@/components/media/youtube-lite";
import { Button } from "@/components/ui/button";
import { ExternalIcon, QuoteIcon, StarIcon } from "@/components/ui/icons";
import { googleReviews, videoTestimonials } from "@/data/testimonials";

/**
 * Patient voices.
 *
 * The video grid renders only when real testimonials exist; until then the
 * Google reviews panel carries the section on its own. Inventing quotes to
 * fill a layout is not an option on a medical site, and an empty state that
 * looks deliberate is better than one that looks apologetic.
 */
export function TestimonialsSection() {
  const hasVideos = videoTestimonials.length > 0;

  return (
    <Section tone="surface" id="testimonials">
      <Container width="wide">
        <SectionHeading
          eyebrow="In their words"
          title="What patients and families say"
          lede="The people who have been through it explain the experience better than we can."
        />

        <div className="mt-9 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
          {hasVideos ? (
            <ul className="grid gap-5 sm:grid-cols-2">
              {videoTestimonials.map((testimonial) => (
                <li key={testimonial.youtubeId}>
                  <YouTubeLite
                    id={testimonial.youtubeId}
                    title={`${testimonial.title} — ${testimonial.attribution}`}
                  />
                  <div className="mt-3">
                    <p className="font-display text-[0.9375rem] leading-snug font-semibold text-ink-900">
                      {testimonial.title}
                    </p>
                    <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink-500">
                      <span className="font-medium text-ink-700">
                        {testimonial.attribution}
                      </span>
                      {testimonial.context ? (
                        <>
                          <span aria-hidden>·</span>
                          <span>{testimonial.context}</span>
                        </>
                      ) : null}
                      {testimonial.language ? (
                        <Pill>{testimonial.language}</Pill>
                      ) : null}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="relative overflow-hidden rounded-panel bg-ink-950 p-7 text-ink-300 sm:p-10">
              <span aria-hidden className="bg-grid absolute inset-0 opacity-50" />
              <span
                aria-hidden
                className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-amber-500/14 blur-[90px]"
              />
              <div className="relative">
                <QuoteIcon className="h-8 w-8 text-teal-400/70" />
                <p className="mt-5 max-w-xl font-display text-xl leading-snug font-bold text-white sm:text-2xl">
                  We are filming patient stories now — in Gujarati, Hindi and
                  English.
                </p>
                <p className="mt-3.5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-300">
                  Until they are published here, the most honest picture of what
                  it is like to be scanned at Prismaa is the unfiltered one:
                  hundreds of reviews left by patients and their families on
                  Google, which we do not curate or edit.
                </p>
                <div className="mt-6">
                  <Button href={googleReviews.url} variant="onDark">
                    Read every Google review
                    <ExternalIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Google rating panel */}
          <aside className="flex flex-col justify-between rounded-panel border border-ink-100 bg-canvas p-6 sm:p-7">
            <div>
              <p className="text-[0.6875rem] font-bold tracking-[0.18em] text-ink-500 uppercase">
                Google Business Profile
              </p>
              <div className="mt-4 flex items-baseline gap-2.5">
                <span className="font-display text-5xl font-extrabold tracking-tight text-ink-900">
                  {googleReviews.rating.toFixed(1)}
                </span>
                <span className="text-sm text-ink-500">out of 5</span>
              </div>
              <div className="mt-2 flex" aria-hidden>
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} className="h-5 w-5 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">
                Based on {googleReviews.count}+ verified reviews from patients
                and their families across Surat and South Gujarat.
              </p>
            </div>

            <Button
              href={googleReviews.url}
              variant="secondary"
              block
              className="mt-6"
            >
              Read reviews on Google
              <ExternalIcon className="h-4 w-4" />
            </Button>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
