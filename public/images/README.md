# Images

Drop real photographs in here. Until a file is referenced, the site renders an
on-brand placeholder tile instead of a broken image, so nothing looks unfinished
while you are gathering the shoot.

## Folder structure

```
public/images/
├── gallery/       centre photography — scanner, interiors, waiting areas
├── team/          doctor portraits
├── technology/    the uMI Vista scanner
├── blog/          article header images
└── og/            custom social share images (optional)
```

## How to add a photograph

1. Save the file into the right folder, e.g. `public/images/gallery/scan-room.jpg`
2. Open the matching data file and set the `src`:

| What you are adding | File to edit | Field |
| --- | --- | --- |
| Gallery photo | `src/data/gallery.ts` | `src: "/images/gallery/scan-room.jpg"` |
| Doctor portrait | `src/data/team.ts` | `photo: "/images/team/dr-keyur.jpg"` |
| Article image | `content/blog/*.md` frontmatter | `image: "/images/blog/….jpg"` |

The path always starts with `/images/…` — that is the public URL, not the disk
path.

## Specifications

- **Format**: JPEG for photographs. Next.js converts to WebP/AVIF automatically.
- **Size**: at least 1600px on the long edge. 2400px for the featured gallery
  tiles, which render large on desktop.
- **Aspect**: landscape 3:2 for gallery, portrait 4:5 for doctor portraits.
- **File size**: keep source files under about 1.5 MB before optimisation.
- **Names**: lowercase, hyphenated, descriptive — `uptake-room.jpg`, not
  `IMG_2481.jpg`. The filename is a small but real SEO signal.

## Alt text

Every gallery item has an `alt` field in `src/data/gallery.ts`. Write what is
literally in the picture, specifically — "Scan room with the uMI Vista digital
PET/CT at Prismaa OncoImaging, Surat", not "scanner". Screen reader users depend
on it, and Google Images reads it.

## A note on patient privacy

Do not publish any photograph in which a patient is identifiable without written
consent on file. That includes reflections, name boards, worklists visible on
monitors, and paperwork on a desk. Check reporting-station photographs carefully
before they go up — a legible patient name on a screen in the background is the
most common way this goes wrong.
