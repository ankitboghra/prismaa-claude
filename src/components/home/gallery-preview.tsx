import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { Figure } from "@/components/media/figure";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { galleryItems } from "@/data/gallery";

/**
 * A first look at the centre.
 *
 * Diagnostic centres photograph badly by default — corridors and equipment.
 * These interiors were designed by an architecture studio, so the photography
 * is genuinely worth showing: it does the reassurance work that no amount of
 * copy about "patient comfort" can.
 */
export function GalleryPreview() {
  const preview = galleryItems.slice(0, 5);

  return (
    <Section tone="canvas" id="gallery">
      <Container width="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Inside Prismaa"
            title="A cancer scan is hard enough"
            lede="So we built somewhere that does not feel like a hospital corridor. Daylight, quiet private uptake rooms, and a scanner that is open at both ends."
            className="sm:max-w-2xl"
          />
          <Button href="/gallery" variant="secondary" className="shrink-0">
            View the gallery
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
          {preview.map((item, index) => (
            <figure
              key={item.id}
              className={
                index === 0
                  ? "col-span-2 lg:col-span-2 lg:row-span-2"
                  : undefined
              }
            >
              <Figure
                src={item.src}
                alt={item.alt}
                ratio={index === 0 ? "4/3" : "3/2"}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="rounded-card ring-1 ring-ink-100"
              />
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
