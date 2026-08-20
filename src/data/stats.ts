import { teamSize } from "./team";

/**
 * Trust numbers.
 *
 * TODO(prismaa): every figure here must be verified against your own records
 * before launch. Under-claim rather than over-claim — a number a patient can
 * check and find true is worth more than a big one they doubt.
 */

export interface Stat {
  /** Numeric part, animated on scroll. */
  value: number;
  /** Rendered after the number, e.g. "+" or "%". */
  suffix?: string;
  prefix?: string;
  label: string;
  /** One line of context under the number. */
  detail: string;
}

export const headlineStats: Stat[] = [
  {
    value: 5000,
    suffix: "+",
    label: "Scans reported",
    detail: "Across PET/CT, CT and image-guided procedures",
  },
  {
    value: 1,
    label: "In South Gujarat",
    prefix: "#",
    detail: "The region's first and only digital PET/CT scanner",
  },
  {
    value: teamSize,
    label: "Specialists on the team",
    detail: "Radiologists, nuclear medicine physicians and operations",
  },
  {
    value: 24,
    suffix: " hrs",
    label: "Typical report turnaround",
    detail: "Structured reports, most released within a day",
  },
];

/** Smaller strip used under the hero — quick reassurance, no ceremony. */
export const trustPoints: string[] = [
  "Digital PET/CT — same price as conventional",
  "A unit of Gujarat Imaging Centre",
  "Gallium-68 molecular studies available in-house",
  "AI-assisted reporting by onco-radiologists",
];
