import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import { Container, Section } from "@/components/ui/layout-primitives";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, imageGallerySchema } from "@/lib/jsonld";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { galleryItems } from "@/data/gallery";

export const metadata = pageMetadata({
  title: "Gallery — Inside Our Centre",
  description:
    "Photographs of Prismaa OncoImaging, Surat — the uMI Vista digital PET/CT, the scan room, private uptake rooms, waiting lounge and reception.",
  path: "/gallery",
  keywords: [
    "Prismaa OncoImaging photos",
    "PET CT centre Surat inside",
    "uMI Vista scanner Surat",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Inside Prismaa"
        title="See where you will be scanned"
        lede="Cancer imaging is stressful enough without a building that adds to it. The centre was designed around daylight, quiet and clear wayfinding — and around a scanner that is open at both ends."
      />

      <Section tone="canvas">
        <Container width="wide">
          <GalleryGrid />
        </Container>
      </Section>

      <CtaBand
        title="Come and see it for yourself"
        body="If you or a family member is anxious about the scan, call us and visit beforehand. We will show you the room and walk you through what will happen."
      />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          imageGallerySchema(
            galleryItems
              .filter((item) => Boolean(item.src))
              .map((item) => ({
                url: absoluteUrl(item.src!),
                caption: item.caption,
              })),
          ),
        ]}
      />
    </>
  );
}
