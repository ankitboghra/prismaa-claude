import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import { Container, Section } from "@/components/ui/layout-primitives";
import { ServicesExplorer } from "@/components/services/services-explorer";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { serviceCategories, services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "PET/CT Scans & Services",
  description:
    "Every scan offered at Prismaa OncoImaging, Surat — whole-body FDG PET/CT, PSMA, DOTA-TATE and FAPI molecular studies, brain and cardiac PET, 160-slice CT and image-guided biopsy.",
  path: "/services",
  keywords: services.flatMap((service) => service.keywords).slice(0, 20),
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Scans & Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Scans & services"
        title="Every scan we offer, explained in plain language"
        lede="Fifteen studies across cancer, brain, heart and infection imaging — all on a single high-resolution digital PET/CT with a 160-slice diagnostic CT built in."
      />

      <Section tone="canvas">
        <Container width="wide">
          <ServicesExplorer />
        </Container>
      </Section>

      {/* An index of categories, largely for search engines and for anyone
          scanning the page rather than filtering it. */}
      <Section tone="surface" spacing="tight">
        <Container width="wide">
          <h2 className="text-display-sm">Browse by what you need</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                <dt className="font-display text-base font-bold text-ink-900">
                  {category.label}
                </dt>
                <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-600">
                  {category.blurb}
                </dd>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {services
                    .filter((service) => service.category === category.id)
                    .map((service) => (
                      <li key={service.slug}>
                        <a
                          href={`/services/${service.slug}`}
                          className="text-[0.875rem] font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-600"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <CtaBand
        title="Not sure which scan you need?"
        body="Send us your prescription on WhatsApp. We will confirm the right study, the preparation and the price — and speak to your treating doctor if anything is unclear."
      />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Scans and services at Prismaa OncoImaging",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.name,
              url: absoluteUrl(`/services/${service.slug}`),
            })),
          },
        ]}
      />
    </>
  );
}
