/**
 * The uMI Vista story — the single strongest reason to choose Prismaa.
 *
 * A note on the numbers below: the uMI Vista figures are drawn from the
 * manufacturer's published specification and from the peer-reviewed NEMA
 * NU 2-2018 performance assessment of the system. The "conventional" column
 * is a *typical range* for the PMT-based analogue PET/CT scanners still in
 * routine service, not a measurement of any one competitor's machine. The
 * UI states that caveat on screen — we compare technology generations, we do
 * not run down a named hospital.
 */

export interface SpecComparison {
  /** Patient-facing label. */
  label: string;
  /** What this actually means for the person on the table. */
  meaning: string;
  prismaa: string;
  conventional: string;
  /** The plain-language benefit line under the two values. */
  benefit: string;
}

export interface TechPillar {
  icon: "spark" | "clock" | "shield" | "target" | "layers" | "heart";
  title: string;
  description: string;
  /** Headline figure, e.g. "up to 60% less". */
  stat?: string;
  statLabel?: string;
}

export const scanner = {
  name: "uMI Vista",
  manufacturer: "United Imaging",
  productUrl:
    "https://eu.united-imaging.com/en/product-service/products/mi/umi-vista",
  category: "High-resolution digital PET/CT",
  claim:
    "The first and only digital PET/CT in South Gujarat — at the same price as a conventional scan.",
  /** Short paragraph used in the hero of /technology. */
  intro:
    "Most PET/CT scanners in India still use photomultiplier tubes — 1950s vacuum-tube technology that converts light into an electrical signal, losing a great deal of it along the way. The uMI Vista replaces those tubes with silicon photomultipliers: solid-state digital detectors that count individual light photons. More of the signal your body gives off actually reaches the image.",
} as const;

export const specComparisons: SpecComparison[] = [
  {
    label: "Detector technology",
    meaning: "How the scanner turns your body's signal into a picture",
    prismaa: "Digital SiPM (silicon photomultiplier)",
    conventional: "Analogue PMT (photomultiplier tube)",
    benefit:
      "Digital detectors count light photon by photon instead of averaging them, so far less of the signal is lost before it becomes an image.",
  },
  {
    label: "Spatial resolution",
    meaning: "The smallest lesion the scanner can resolve clearly",
    prismaa: "≈ 2.9 mm",
    conventional: "≈ 4 – 5 mm",
    benefit:
      "Small deposits are found earlier — and in cancer, earlier detection is what changes the treatment plan.",
  },
  {
    label: "Time-of-flight resolution",
    meaning: "How precisely the scanner pinpoints where a signal came from",
    prismaa: "≈ 302 picoseconds",
    conventional: "≈ 500 – 550 picoseconds",
    benefit:
      "Sharper localisation means less blur and better contrast — the difference is most obvious in larger patients, where conventional images go soft.",
  },
  {
    label: "System sensitivity",
    meaning: "How much of the signal the scanner actually catches",
    prismaa: "≈ 12 cps/kBq",
    conventional: "≈ 5 – 9 cps/kBq",
    benefit:
      "Catching more signal is what allows either a shorter scan, a lower injected dose, or a sharper image — usually some of all three.",
  },
  {
    label: "Scan time (whole body)",
    meaning: "How long you lie still on the table",
    prismaa: "≈ 15 minutes",
    conventional: "≈ 25 – 30 minutes",
    benefit:
      "Shorter scans mean less movement blur — and are far kinder to patients in pain, breathless, or unable to lie flat for long.",
  },
  {
    label: "Injected radiation dose",
    meaning: "How much radioactive tracer has to go in",
    prismaa: "Reduced protocols routinely possible",
    conventional: "Standard weight-based dose",
    benefit:
      "A more sensitive detector needs less tracer for the same image quality — which matters most for young patients and anyone facing repeated follow-up scans.",
  },
  {
    label: "CT component",
    meaning: "The anatomical map PET is laid on top of",
    prismaa: "160-slice, 0.3 s rotation",
    conventional: "16 – 64 slice, 0.5 – 0.8 s rotation",
    benefit:
      "A faster, finer CT means crisper anatomy, fewer breathing artefacts, and a diagnostic-quality CT in the same sitting.",
  },
  {
    label: "Bore & comfort",
    meaning: "What it feels like to be scanned",
    prismaa: "Wide bore, short ring, ambient lighting",
    conventional: "Narrower bore, longer acquisition",
    benefit:
      "Nothing closes over your face. Claustrophobic and elderly patients get through the study far more comfortably.",
  },
];

export const techPillars: TechPillar[] = [
  {
    icon: "target",
    title: "See smaller lesions",
    stat: "2.9 mm",
    statLabel: "spatial resolution",
    description:
      "Roughly a third finer than a typical analogue scanner. Small nodes and early metastases that would otherwise blur into the background are resolved and reported.",
  },
  {
    icon: "clock",
    title: "Spend less time on the table",
    stat: "~15 min",
    statLabel: "whole-body acquisition",
    description:
      "About half the usual scan time. Less movement blur, and a study that patients in pain or short of breath can actually complete.",
  },
  {
    icon: "shield",
    title: "Take in less radiation",
    stat: "Lower dose",
    statLabel: "protocols available",
    description:
      "Higher sensitivity means we can achieve diagnostic images with a reduced injected dose — which compounds over a course of follow-up scans.",
  },
  {
    icon: "layers",
    title: "Get a diagnostic CT too",
    stat: "160",
    statLabel: "slice CT, 0.3 s rotation",
    description:
      "The CT half is a full diagnostic scanner, not a low-dose localiser. One appointment, two complete studies.",
  },
  {
    icon: "spark",
    title: "AI-assisted reconstruction",
    statLabel: "cleaner images, faster",
    stat: "Built in",
    description:
      "Deep-learning reconstruction suppresses noise without smoothing away the small lesions that matter, so lower-dose and shorter scans still read cleanly.",
  },
  {
    icon: "heart",
    title: "Pay no more for it",
    stat: "Same price",
    statLabel: "as a conventional PET/CT",
    description:
      "We priced the advantage in, not on top. There is no reason to accept an older-generation scan to save money — because you would not be saving any.",
  },
];

/**
 * Used in the "why it matters" strip. Deliberately framed as patient
 * outcomes rather than physics.
 */
export const patientBenefits = [
  {
    title: "A clearer answer, the first time",
    body: "Fewer equivocal reports means fewer repeat scans, fewer anxious weeks of waiting, and fewer unnecessary biopsies.",
  },
  {
    title: "Kinder on the body",
    body: "A shorter scan and a lower tracer dose matter enormously when you are already exhausted by treatment.",
  },
  {
    title: "Treatment planned on better information",
    body: "Correct staging is what decides between surgery, radiation and chemotherapy. A sharper scan makes that decision on firmer ground.",
  },
];
