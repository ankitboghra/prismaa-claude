import { teamSize } from "./team";

export interface NavLink {
  href: string;
  label: string;
  /** Shown in the mobile drawer only — keeps the desktop bar terse. */
  description?: string;
}

/** Primary navigation. Kept to six items; more than that and nothing gets clicked. */
export const primaryNav: NavLink[] = [
  {
    href: "/services",
    label: "Scans & Services",
    description: "Every study we offer, explained in plain language",
  },
  {
    href: "/technology",
    label: "Our Technology",
    description: "Why a digital PET/CT finds what conventional scanners miss",
  },
  {
    href: "/learn",
    label: "Patient Guide",
    description: "PET scans, cancer and treatment — explained simply",
  },
  {
    href: "/team",
    label: "Our Doctors",
    description: `The ${teamSize} specialists behind every report`,
  },
  {
    href: "/blog",
    label: "Insights",
    description: "Notes and case reports from our radiologists",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Location, timings and appointments",
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Scans",
    links: [
      { href: "/services/whole-body-fdg-pet-ct", label: "Whole-Body PET/CT" },
      { href: "/services/psma-pet-ct", label: "PSMA PET/CT" },
      { href: "/services/dotanoc-pet-ct", label: "DOTA-TATE PET/CT" },
      { href: "/services/fapi-pet-ct", label: "FAPI PET/CT" },
      { href: "/services/brain-pet-ct-dementia", label: "Brain PET/CT" },
      { href: "/services/cardiac-viability-pet-ct", label: "Cardiac PET/CT" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    title: "Understand",
    links: [
      { href: "/learn/what-is-a-pet-ct-scan", label: "What is a PET/CT scan?" },
      { href: "/learn/how-to-prepare-for-a-pet-ct-scan", label: "How to prepare" },
      { href: "/learn/is-a-pet-scan-safe", label: "Is a PET scan safe?" },
      { href: "/learn/understanding-cancer-staging", label: "Cancer staging explained" },
      { href: "/learn", label: "Full patient guide" },
    ],
  },
  {
    title: "Centre",
    links: [
      { href: "/about", label: "About Prismaa" },
      { href: "/technology", label: "The uMI Vista" },
      { href: "/team", label: "Our doctors" },
      { href: "/gallery", label: "Gallery" },
      { href: "/blog", label: "Insights" },
      { href: "/contact", label: "Contact & directions" },
    ],
  },
];
