import { cn } from "@/lib/utils";

/**
 * The Prismaa mark, traced from the supplied artwork.
 *
 * A left-pointing prism arrowhead split into three facets — cyan above, coral
 * below, amber on the trailing edge. Each facet is scaled very slightly toward
 * its own centroid, which is what produces the thin ground-coloured seams
 * between them in the original.
 *
 * Geometry (viewBox 0 0 100 121):
 *   L = leading point, T = top, B = bottom, C = the interior meeting point.
 *
 * If a vector file of the official logo becomes available, replace the three
 * paths below and `public/../icon.svg`; nothing else needs to change, because
 * the whole colour system is derived from these three facet colours plus the
 * wordmark brown.
 */

const FACETS = [
  // Cyan — L, T, C
  { d: "M0 57.7 L100 0 L65.9 58.5 Z", cx: 55.3, cy: 38.7, fill: "#159fc0" },
  // Coral — L, C, B
  { d: "M0 57.7 L65.9 58.5 L100 121 Z", cx: 55.3, cy: 79.1, fill: "#ee3b33" },
  // Amber — T, C, B
  { d: "M100 0 L65.9 58.5 L100 121 Z", cx: 88.6, cy: 59.8, fill: "#f9b315" },
] as const;

/** Facet inset, as a scale factor about each facet's centroid. */
const SEAM = 0.965;

export function PrismaaMark({
  className,
  title,
  /** Renders the mark in a single colour instead of the three facets. */
  monochrome,
}: {
  className?: string;
  title?: string;
  monochrome?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 121"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {FACETS.map((facet) => (
        <path
          key={facet.d}
          d={facet.d}
          fill={monochrome ? "currentColor" : facet.fill}
          transform={`translate(${facet.cx} ${facet.cy}) scale(${SEAM}) translate(${-facet.cx} ${-facet.cy})`}
        />
      ))}
    </svg>
  );
}

/**
 * Mark plus wordmark.
 *
 * The wordmark is set in Poppins rather than traced: it is a very close match
 * for the original's geometric, single-storey letterforms, and live text stays
 * crisp at every size, scales with the user's font settings and is selectable.
 */
export function PrismaaLogo({
  className,
  tone = "dark",
  showTagline = true,
}: {
  className?: string;
  /** `dark` = brand brown for light backgrounds; `light` = white on ink. */
  tone?: "dark" | "light";
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <PrismaaMark className="h-8 w-auto sm:h-9" />
      <span className="flex flex-col items-end leading-none">
        <span
          className={cn(
            "font-display text-[1.375rem] leading-none font-semibold tracking-[-0.01em]",
            tone === "light" ? "text-white" : "text-brand-600",
          )}
        >
          Prismaa
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-[0.2rem] text-[0.5rem] leading-none font-medium tracking-[0.01em]",
              tone === "light" ? "text-white/70" : "text-brand-600/80",
            )}
          >
            oncoimaging surat
          </span>
        ) : null}
      </span>
    </span>
  );
}
