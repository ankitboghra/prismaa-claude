import { cn } from "@/lib/utils";

/**
 * "CT + PET = the answer", drawn rather than described.
 *
 * A sentence explaining that PET shows metabolism and CT shows anatomy takes
 * most patients two readings. Three panels showing an outline, a set of hot
 * spots, and the two overlaid takes about two seconds. Inline SVG rather than
 * a stock photo: it stays crisp, weighs nothing, inherits the theme, and
 * — unlike a found photograph — never risks looking like an actual patient
 * scan or misrepresenting a real anatomical finding.
 *
 * The silhouette is a proportioned front-facing figure (head, neck, sloped
 * shoulders, tapered torso, arms held slightly away from the body, legs to
 * the ankle) rather than a single abstract blob, so it reads as an
 * anatomical diagram rather than a placeholder icon.
 */

/** Shared body outline, built from a few smooth primitives rather than one
 *  hand-drawn path — easier to keep proportioned and to reuse identically
 *  across the CT and fused panels. */
function BodySilhouette() {
  return (
    <g fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" strokeLinejoin="round">
      <circle cx="60" cy="23" r="13.5" />
      <path d="M52 33 h16 v9 h-16 Z" strokeWidth="0" />
      <path d="M32 50c0-6.5 8-11 28-11s28 4.5 28 11l2 42c1 8-2.5 16-9 20l2 12H37l2-12c-6.5-4-10-12-9-20Z" />
      <path d="M32 50c-9 4-16 12-18 28l-2 52c-.5 6 3.5 10 8.5 10s9-4 8.5-10l-2-50c1.5-14 4-24 9-30Z" />
      <path d="M88 50c9 4 16 12 18 28l2 52c.5 6-3.5 10-8.5 10s-9-4-8.5-10l2-50c-1.5-14-4-24-9-30Z" />
      <path d="M39 124h16l-3 25c-1 16-2 32-2 48 0 6-3.5 9-8 9s-8-3-8-9c0-1.5.2-3 .5-4.5L39 149Z" />
      <path d="M81 124H65l3 25c1 16 2 32 2 48 0 6 3.5 9 8 9s8-3 8-9c0-1.5-.2-3-.5-4.5L81 149Z" />
    </g>
  );
}

/** Positions for the "hot spot" glow, in the silhouette's own 120×210 space. */
const LESIONS = [
  { cx: 60, cy: 62, r: 8.2, intensity: 1 },
  { cx: 80, cy: 102, r: 5.4, intensity: 0.82 },
  { cx: 46, cy: 146, r: 3.8, intensity: 0.62 },
];

function Panel({
  label,
  caption,
  children,
  tone,
}: {
  label: string;
  caption: string;
  children: React.ReactNode;
  tone: "ct" | "pet" | "fused";
}) {
  return (
    <figure className="flex flex-1 flex-col gap-2.5">
      <div
        className={cn(
          "relative overflow-hidden rounded-card ring-1",
          tone === "ct" && "bg-ink-900 ring-white/10",
          tone === "pet" && "bg-ink-950 ring-white/10",
          tone === "fused" && "bg-ink-900 ring-teal-400/40",
        )}
      >
        <svg viewBox="0 0 120 210" className="block w-full" aria-hidden>
          {children}
        </svg>
        <span
          className={cn(
            "absolute top-2 left-2 rounded-full px-2 py-0.5 text-[0.5625rem] font-bold tracking-widest uppercase",
            tone === "fused"
              ? "bg-teal-400 text-ink-950"
              : "bg-white/10 text-white/70",
          )}
        >
          {label}
        </span>
      </div>
      <figcaption className="text-[0.8125rem] leading-snug text-ink-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export function ScanFusion({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col gap-4 sm:flex-row sm:items-start", className)}
      role="img"
      aria-label="Diagram: a CT scan shows anatomy, a PET scan shows metabolic hot spots, and the two overlaid show exactly where the active disease sits."
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          {LESIONS.map((lesion, index) => (
            <radialGradient key={index} id={`prismaa-hot-${index}`}>
              <stop offset="0%" stopColor="#fff6d6" stopOpacity={lesion.intensity} />
              <stop offset="35%" stopColor="#f9b315" stopOpacity={lesion.intensity * 0.95} />
              <stop offset="70%" stopColor="#e9950b" stopOpacity={lesion.intensity * 0.55} />
              <stop offset="100%" stopColor="#dc2a21" stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>
      </svg>

      <Panel
        tone="ct"
        label="CT"
        caption="The CT scan maps your anatomy — every organ, in fine detail. But a lump and a scar can look identical."
      >
        <BodySilhouette />
        <path
          d="M22 68h76M22 100h76M22 132h76"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="0.8"
        />
      </Panel>

      <Panel
        tone="pet"
        label="PET"
        caption="The PET scan shows which cells are burning the most energy. Bright means active — but there are no landmarks."
      >
        {LESIONS.map((lesion, index) => (
          <circle
            key={index}
            cx={lesion.cx}
            cy={lesion.cy}
            r={lesion.r * 2.6}
            fill={`url(#prismaa-hot-${index})`}
          />
        ))}
      </Panel>

      <Panel
        tone="fused"
        label="PET / CT"
        caption="Overlaid, your doctor sees exactly which structure is active — and that is what decides the treatment."
      >
        <BodySilhouette />
        {LESIONS.map((lesion, index) => (
          <g key={index}>
            <circle
              cx={lesion.cx}
              cy={lesion.cy}
              r={lesion.r * 2.4}
              fill={`url(#prismaa-hot-${index})`}
            />
            <circle
              cx={lesion.cx}
              cy={lesion.cy}
              r={lesion.r + 4}
              fill="none"
              stroke="#a6e5f3"
              strokeWidth="0.9"
              strokeDasharray="2.5 2.5"
            />
          </g>
        ))}
      </Panel>
    </div>
  );
}
