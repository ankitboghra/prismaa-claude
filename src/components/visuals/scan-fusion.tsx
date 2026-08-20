import { cn } from "@/lib/utils";

/**
 * "CT + PET = the answer", drawn rather than described.
 *
 * A sentence explaining that PET shows metabolism and CT shows anatomy takes
 * most patients two readings. Three panels showing an outline, a set of hot
 * spots, and the two overlaid takes about two seconds. Inline SVG rather than
 * an image so it stays crisp, weighs nothing, and inherits the theme.
 */

const TORSO_PATH =
  "M60 14c-9 0-15 5-15 11 0 4 1 6 1 8-6 2-24 7-27 11-3 5-4 24-4 33 0 4 1 6 4 6h6c1 22 3 44 5 58 1 5 3 7 8 7h9c4 0 6-2 6-6l3-38h6l3 38c0 4 2 6 6 6h9c5 0 7-2 8-7 2-14 4-36 5-58h6c3 0 4-2 4-6 0-9-1-28-4-33-3-4-21-9-27-11 0-2 1-4 1-8 0-6-6-11-15-11Z";

/** Lesion positions, in the torso's own 120×150 coordinate space. */
const LESIONS = [
  { cx: 45, cy: 58, r: 7.5, intensity: 1 },
  { cx: 72, cy: 74, r: 5, intensity: 0.8 },
  { cx: 52, cy: 96, r: 3.6, intensity: 0.62 },
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
        <svg viewBox="0 0 120 150" className="block w-full" aria-hidden>
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
        <path
          d={TORSO_PATH}
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.1"
        />
        <path
          d="M38 62h44M38 78h44M38 94h44"
          stroke="rgba(255,255,255,0.12)"
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
        <path
          d={TORSO_PATH}
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.1"
        />
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
