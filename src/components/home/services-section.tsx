import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { ServicesExplorer } from "@/components/services/services-explorer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function ServicesSection() {
  return (
    <Section id="services" tone="canvas">
      <Container width="wide">
        <SectionHeading
          eyebrow="Scans & services"
          title="Everything we scan for, explained plainly"
          lede="Tap any scan to see what it is for, what it will tell your doctor, and how to prepare. PET/CT is not only for cancer — we also image the brain, the heart, and hidden infection."
        />
        <div className="mt-8">
          <ServicesExplorer />
        </div>
        <div className="mt-9">
          <Button href="/services" variant="secondary" size="lg">
            Browse all services in detail
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
