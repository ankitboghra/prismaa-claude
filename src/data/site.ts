/**
 * Single source of truth for everything about the centre as a *business*:
 * name, address, phones, hours, socials.
 *
 * NAP (Name / Address / Phone) consistency is the single biggest lever in
 * local SEO — these exact strings are reused in the footer, the contact page
 * and the LocalBusiness JSON-LD, so Google sees one identity everywhere.
 * Change it here and it changes everywhere.
 */

export const siteConfig = {
  name: "Prismaa Oncoimaging",
  legalName: "Prismaa Oncoimaging Surat",
  /** Used in <title> templates and the JSON-LD `alternateName`. */
  shortName: "Prismaa",
  city: "Surat",
  region: "South Gujarat",
  /** The brand line from the logo lockup. */
  motto: "Precision With Compassion",
  /** Prismaa operates as a unit of this group — a real credibility signal. */
  parentOrganisation: "Gujarat Imaging Centre",
  tagline: "Surat's first high-resolution digital PET/CT",
  description:
    "Prismaa Oncoimaging Surat is South Gujarat's first digital PET/CT centre — a unit of Gujarat Imaging Centre, running the United Imaging uMI Vista. Increased sensitivity, reduced scan time and ultra-low dose radiation, at conventional PET/CT prices.",

  /** No trailing slash. Override at deploy time with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prismaaoncoimaging.com",

  /** As printed on the centre's own material. */
  address: {
    line1: "3-4-5, Ground Floor, Zenon Building",
    line2: "Opp. Unique Hospital",
    city: "Surat",
    state: "Gujarat",
    postalCode: "395002",
    country: "IN",
    countryName: "India",
  },

  /** Approximate — replace with the exact pin coordinates before launch. */
  geo: { latitude: 21.1789, longitude: 72.8107 },

  mapsUrl: "https://maps.app.goo.gl/Wg3313ZUf6n4uG5U9",
  mapsReviewsUrl: "https://maps.app.goo.gl/Wg3313ZUf6n4uG5U9",
  /** Keyless embed — no API key required, no billing surprises. */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Prismaa+Oncoimaging+Surat&output=embed",

  phones: [
    {
      label: "Appointments & enquiries",
      display: "+91 93169 25516",
      e164: "+919316925516",
      primary: true,
      whatsapp: true,
    },
    {
      label: "Additional line",
      display: "+91 97258 97292",
      e164: "+919725897292",
      primary: false,
      whatsapp: false,
    },
  ],

  email: "prismaasurat@gmail.com",

  /** Pre-filled first message so the enquiry arrives with context. */
  whatsappMessage:
    "Hello Prismaa OncoImaging, I would like to book a PET/CT scan appointment.",

  socials: {
    instagram: "https://www.instagram.com/prismaa_surat",
    instagramHandle: "@prismaa_surat",
  },

  /**
   * Displayed in the footer and emitted as `openingHoursSpecification`.
   * Scan slots are protocol-dependent; the copy says so rather than
   * promising a walk-in.
   */
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 8:00 PM", isOpen: true },
    { days: "Sunday", time: "By prior appointment", isOpen: true },
  ],

  /** Machine-readable equivalent of `hours`, for schema.org. */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
} as const;

export const primaryPhone = siteConfig.phones.find((p) => p.primary)!;

export const whatsappUrl = `https://wa.me/${primaryPhone.e164.replace(
  "+",
  "",
)}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export const telUrl = (e164: string) => `tel:${e164}`;

export const formattedAddress = [
  siteConfig.address.line1,
  siteConfig.address.line2,
  `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postalCode}`,
].join(", ");
