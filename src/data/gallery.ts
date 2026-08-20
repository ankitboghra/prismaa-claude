/**
 * Centre photography.
 *
 * TODO(prismaa): drop your real photographs into /public/images/gallery/ and
 * set `src` on each item (e.g. src: "/images/gallery/scanner-room.jpg").
 * Items without a `src` render an on-brand placeholder tile, so the layout
 * looks intentional while you gather the shots. See public/images/README.md.
 *
 * Aim for landscape 3:2 photographs, at least 1600px wide. The interiors were
 * designed by Craftspod Design Studio — the architectural photography from
 * that shoot is exactly what belongs here.
 */

export type GalleryCategory =
  | "scanner"
  | "interiors"
  | "patient-areas"
  | "team";

export interface GalleryItem {
  id: string;
  /** Path under /public. Undefined → branded placeholder tile. */
  src?: string;
  /** Written for screen readers and for image SEO — be specific and literal. */
  alt: string;
  /** Shown under the image in the lightbox. */
  caption: string;
  category: GalleryCategory;
  /** Larger tile in the masonry grid. */
  featured?: boolean;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "scanner", label: "The scanner" },
  { id: "interiors", label: "Interiors" },
  { id: "patient-areas", label: "Patient areas" },
  { id: "team", label: "Our team" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "umi-vista-gantry",
    alt: "The United Imaging uMI Vista digital PET/CT scanner in the scan room at Prismaa OncoImaging, Surat",
    caption:
      "The uMI Vista digital PET/CT — the only one of its kind in South Gujarat.",
    category: "scanner",
    featured: true,
  },
  {
    id: "scan-room",
    alt: "Scan room at Prismaa OncoImaging with indirect lighting and a wide-bore PET/CT gantry",
    caption:
      "A wide, short bore and soft indirect lighting. Nothing closes over your face.",
    category: "scanner",
  },
  {
    id: "control-console",
    alt: "PET/CT technologist at the acquisition console at Prismaa OncoImaging, Surat",
    caption:
      "Our technologists stay in contact with you through the whole acquisition.",
    category: "scanner",
  },
  {
    id: "reception",
    alt: "Reception and check-in desk at Prismaa OncoImaging, Surat",
    caption: "Reception — registration, paperwork and insurance help in one place.",
    category: "interiors",
    featured: true,
  },
  {
    id: "waiting-lounge",
    alt: "Daylit patient waiting lounge with timber seating at Prismaa OncoImaging, Surat",
    caption:
      "The waiting lounge, designed to feel like anything other than a hospital corridor.",
    category: "patient-areas",
  },
  {
    id: "uptake-room",
    alt: "Private uptake room where patients rest quietly after the tracer injection",
    caption:
      "Private uptake rooms for the quiet hour between injection and scan.",
    category: "patient-areas",
    featured: true,
  },
  {
    id: "injection-room",
    alt: "Shielded injection room with radiopharmaceutical handling equipment",
    caption: "Shielded hot lab and injection room, built to AERB specification.",
    category: "interiors",
  },
  {
    id: "consultation-room",
    alt: "Consultation room where the radiologist explains scan findings to patients and relatives",
    caption:
      "Where we sit down with you and your family to explain what the scan showed.",
    category: "patient-areas",
  },
  {
    id: "reporting-station",
    alt: "Reporting workstation with diagnostic monitors displaying PET/CT fusion images",
    caption: "Diagnostic-grade reporting stations for PET/CT fusion review.",
    category: "interiors",
  },
  {
    id: "corridor",
    alt: "Corridor at Prismaa OncoImaging with warm material palette and wayfinding",
    caption: "Clear wayfinding, warm materials, and daylight wherever possible.",
    category: "interiors",
  },
  {
    id: "team-group",
    alt: "The clinical and technical team at Prismaa OncoImaging, Surat",
    caption: "The people who will look after you on the day.",
    category: "team",
  },
  {
    id: "entrance",
    alt: "Entrance and signage of Prismaa OncoImaging Centre, Zenon Building, Surat",
    caption: "Ground floor, Zenon Building — step-free access from the street.",
    category: "interiors",
  },
];

export const featuredGalleryItems = galleryItems.filter((item) => item.featured);
