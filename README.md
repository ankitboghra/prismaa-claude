# Prismaa OncoImaging — website

Marketing and patient-education site for Prismaa OncoImaging, Surat: South
Gujarat's first high-resolution digital PET/CT centre.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.
Every route is statically generated — there is no server to run, no database,
and no CMS.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm run lint         # eslint
npx tsc --noEmit     # typecheck
```

### Environment

One optional variable. Set it in production so canonical URLs, the sitemap and
Open Graph tags point at the real domain:

```
NEXT_PUBLIC_SITE_URL=https://prismaaoncoimaging.com
```

It falls back to that value if unset — see `src/data/site.ts`.

---

## Where to change things

Almost nothing on this site is hard-coded into a component. Content lives in two
places: typed data files for structured content, and Markdown for articles.

### Structured content — `src/data/`

| File | What it controls |
| --- | --- |
| `site.ts` | **Start here.** Name, address, phone numbers, email, hours, socials, WhatsApp message. Used by the header, footer, contact page *and* the local-SEO structured data, so changing it here changes it everywhere. |
| `services.ts` | Every scan offered. One record drives the homepage card, the modal, and the `/services/[slug]` page. Adding a service to this array creates its page automatically. |
| `team.ts` | The 13-person team — clinical and management. |
| `technology.ts` | uMI Vista specifications and the digital-vs-conventional comparison. |
| `stats.ts` | The headline numbers (scans reported, team size, turnaround). |
| `testimonials.ts` | YouTube patient testimonials and the Google rating. |
| `gallery.ts` | Centre photography and captions. |
| `faqs.ts` | Homepage FAQs — these are also emitted as FAQ structured data. |
| `pet-explainer.ts` | The hero explainer, the six-step patient journey, myth-busting. |
| `coming-soon.ts` | The gamma camera and radionuclide therapy teaser. |
| `navigation.ts` | Header and footer menus. |

### Articles — `content/`

```
content/
├── learn/    patient education  → /learn/<filename>
└── blog/     posts and clinical notes → /blog/<filename>
```

To publish an article, add a Markdown file. The filename becomes the URL.

```markdown
---
title: "What is a PET/CT scan?"
description: "One or two sentences. This is what Google shows in results."
publishedAt: "2026-01-12"
updatedAt: "2026-07-28"          # optional
author: "Dr. Keyur Mandaliya"
category: "Patient basics"        # groups articles on the index page
audience: "patients"              # patients | doctors | researchers
featured: true                    # optional — pins it to "Start here"
tags: ["pet-ct", "basics"]        # drives "Read next"
---

Write normally in Markdown. `##` headings become the table of contents.
```

Reading time, the table of contents, related articles, the sitemap entry and the
article structured data are all generated. Nothing else needs updating.

### Images

See [`public/images/README.md`](public/images/README.md). Image slots without a
file render an on-brand placeholder, so the layout is never broken while you
gather photography.

---

## Before launch — outstanding items

These are marked `TODO(prismaa)` in the code:

1. **Doctor portraits.** All 13 team members (names, roles and qualifications
   confirmed from the centre's own material) render a brand-monogram avatar
   until a photo is added. Drop a photo in `public/images/team/<slug>.jpg` and
   set `photo` on the matching record in `src/data/team.ts` — see
   `public/images/README.md`.
2. **Confirm role titles for the wider team.** Only Dr. Keyur Mandaliya's title
   was supplied in full; the other 12 records' `role` fields are a reasonable
   inference from each person's printed qualifications (e.g. "MD, DNB" →
   Consultant Radiologist). Confirm each one's exact designation.
3. **Verify the map coordinates** in `src/data/site.ts` — the address and PIN
   are as printed on the centre's own material, but the lat/long is
   approximate.
4. **Verify the statistics** in `src/data/stats.ts` and the Google rating and
   review count in `src/data/testimonials.ts` against your own records.
   Under-claim rather than over-claim.
5. **Add patient video testimonials** to `src/data/testimonials.ts`. The section
   is written to look complete with an empty list, falling back to the Google
   reviews panel — do not pad it with invented quotes.
6. **Replace placeholder images** with the architectural photography.
7. **Set `NEXT_PUBLIC_SITE_URL`** and submit `/sitemap.xml` in Google Search
   Console. Claim and complete the Google Business Profile — for a diagnostic
   centre the local pack matters more than anything else on this list.

The logo is traced from the supplied artwork
(`src/components/ui/logo.tsx`, `src/app/icon.svg`) — the colour system in
`src/app/globals.css` (`brand` brown, `teal`/`amber`/`coral` facets) is
derived directly from it.

---

## Architecture notes

### Design system

Tokens live in `src/app/globals.css` under `@theme` — the full colour scale,
type scale, radii, elevation and motion. Components consume tokens, never raw
hex values. The brand idea is a prism: an ink beam entering, a spectrum leaving,
which is why the accent gradient appears only as hairlines, the logo and
occasional gradient text, and never as a background wash.

Mobile-first throughout. Spacing, type sizes and layouts are written for a
390px phone and scale up.

### Components

```
src/components/
├── ui/         primitives — button, modal, accordion, icons, logo, layout
├── layout/     header, footer, floating contact actions, page hero, CTA band
├── home/       homepage sections (one file per section)
├── services/   the services grid, modal and shared detail body
├── content/    article index and article reading layout
├── gallery/    gallery grid with lightbox
├── media/      figure with placeholder fallback, YouTube facade
├── visuals/    inline SVG explainers (CT/PET fusion, resolution comparison)
└── seo/        JSON-LD renderer
```

A few decisions worth knowing:

- **The service modal and the service page share one component**
  (`services/service-detail.tsx`), so the quick look can never drift from the
  full page.
- **The modal is a native `<dialog>`**, which gives focus trapping,
  Escape-to-close and correct ARIA semantics from the platform.
- **The FAQ accordion is `<details>`/`<summary>`** — keyboard accessible and
  in-page searchable with no JavaScript.
- **YouTube videos load on click**, not on page load. Embedding the real iframe
  up front costs roughly half a megabyte per video.
- **The icon set is hand-drawn** rather than a dependency: about thirty glyphs,
  several of them domain-specific (gamma camera, body scan, tracer).

### SEO

- Metadata for every page goes through `pageMetadata()` in `src/lib/seo.ts`, so
  canonical URLs, Open Graph and Twitter cards cannot drift apart.
- Structured data is generated in `src/lib/jsonld.ts` **from the same data files
  the UI renders** — `MedicalBusiness`/`DiagnosticLab` with full NAP and opening
  hours, `Physician`, `MedicalTest` per service, `FAQPage`, `BreadcrumbList`,
  `MedicalWebPage` per article, and `ImageGallery`.
- `sitemap.ts` and `robots.ts` are generated from the content, so a new article
  or service is indexed without anyone remembering to add it.
- The social share card is generated at `/opengraph-image` from brand tokens.

### Content pipeline

Markdown is parsed at build time with `unified` (remark → rehype), with GFM
tables and `rehype-slug` for heading anchors. All of it lives behind four
functions in `src/lib/content.ts`; when a real authoring system replaces the
filesystem, only those four change.
