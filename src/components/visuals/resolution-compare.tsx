import { cn } from "@/lib/utils";

/**
 * The technology argument, made visually.
 *
 * "2.9 mm versus 4–5 mm resolution" means nothing to a patient. Two panels
 * showing the same three lesions — one where the smallest smears into the
 * background, one where all three are distinct — makes the stake obvious in a
 * glance: this is whether the lesion gets reported at all.
 *
 * The blur is a Gaussian filter, not an artistic impression, and the panels
 * are labelled as an illustration rather than as real patient images.
 */

const LESIONS = [
  { cx: 40, cy: 42, r: 9 },
  { cx: 74, cy: 62, r: 5.5 },
  { cx: 48, cy: 82, r: 3 },
];

function Field({
  blur,
  noise,
  id,
}: {
  blur: number;
  noise: number;
  id: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className="block w-full" aria-hidden>
      <defs>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation={blur} />
        </filter>
        <radialGradient id={`${id}-hot`}>
          <stop offset="0%" stopColor="#fff6d6" />
          <stop offset="30%" stopColor="#f9b315" />
          <stop offset="65%" stopColor="#e9950b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#dc2a21" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-noise`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            result="n"
          />
          <feColorMatrix
            in="n"
            type="matrix"
            values={`0 0 0 0 0.48 0 0 0 0 0.40 0 0 0 0 0.30 0 0 0 ${noise} 0`}
          />
        </filter>
      </defs>

      <rect width="120" height="120" fill="#17100a" />
      <rect width="120" height="120" filter={`url(#${id}-noise)`} />

      <g filter={`url(#${id}-blur)`}>
        {LESIONS.map((lesion, index) => (
          <circle
            key={index}
            cx={lesion.cx}
            cy={lesion.cy}
            r={lesion.r * 2.2}
            fill={`url(#${id}-hot)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function ResolutionCompare({ className }: { className?: string }) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative overflow-hidden rounded-card ring-1 ring-white/10">
          <Field id="conventional" blur={3.4} noise={0.5} />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent px-3 pt-6 pb-2.5">
            <span className="block text-[0.6875rem] font-bold tracking-wider text-white/60 uppercase">
              Conventional
            </span>
            <span className="block text-[0.8125rem] font-semibold text-white/85">
              4 – 5 mm · the smallest lesion is lost
            </span>
          </span>
        </div>

        <div className="relative overflow-hidden rounded-card ring-1 ring-teal-400/40">
          <Field id="digital" blur={0.7} noise={0.22} />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent px-3 pt-6 pb-2.5">
            <span className="block text-[0.6875rem] font-bold tracking-wider text-teal-300 uppercase">
              Digital · uMI Vista
            </span>
            <span className="block text-[0.8125rem] font-semibold text-white">
              2.9 mm · all three are resolved
            </span>
          </span>
        </div>
      </div>
      <figcaption className="text-[0.75rem] leading-relaxed text-ink-400">
        Illustration of the effect of detector resolution on lesion
        conspicuity — not a patient image. The third, smallest lesion is the one
        that changes a treatment plan.
      </figcaption>
    </figure>
  );
}
