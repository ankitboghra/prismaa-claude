import { Container } from "@/components/ui/layout-primitives";
import { CountUp } from "@/components/ui/count-up";
import { StarIcon } from "@/components/ui/icons";
import { headlineStats } from "@/data/stats";
import { googleReviews } from "@/data/testimonials";

export function StatsBand() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <Container width="wide">
        <div className="grid grid-cols-2 divide-ink-100 sm:divide-x lg:grid-cols-4">
          {headlineStats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-ink-100 px-1 py-7 sm:px-6 sm:py-9 [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1200 + index * 120}
                />
              </p>
              <p className="mt-1.5 text-[0.9375rem] font-semibold text-ink-800">
                {stat.label}
              </p>
              <p className="mt-1 text-[0.8125rem] leading-snug text-ink-500">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-ink-100 py-4 text-center">
          <span className="flex" aria-hidden>
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon key={index} className="h-4 w-4 text-amber-400" />
            ))}
          </span>
          <p className="text-[0.875rem] text-ink-600">
            <strong className="font-semibold text-ink-900">
              {googleReviews.rating.toFixed(1)}
            </strong>{" "}
            from {googleReviews.count}+ Google reviews —{" "}
            <a
              href={googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-600"
            >
              read what patients say
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
