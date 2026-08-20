import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/layout/cta-band";
import { Container, Section } from "@/components/ui/layout-primitives";
import { ServiceDetail } from "@/components/services/service-detail";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowRightIcon } from "@/components/ui/icons";
import { breadcrumbSchema, faqSchema, medicalTestSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { getServiceBySlug, services } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return pageMetadata({
      title: "Service not found",
      description: "This scan could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return pageMetadata({
    title: `${service.name} in Surat`,
    description: `${service.summary} ${service.explainer.slice(0, 110)}…`,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((item) => item.slug !== service.slug)
    .filter(
      (item) =>
        item.category === service.category ||
        (service.isMolecular && item.isMolecular),
    )
    .slice(0, 3);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Scans & Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={service.tracer ?? "PET/CT study"}
        title={service.name}
        lede={service.summary}
      />

      <Section tone="canvas" spacing="tight">
        <Container width="default">
          <div className="overflow-hidden rounded-panel bg-white shadow-e2 ring-1 ring-ink-100">
            {/* The header inside ServiceDetail repeats the title as an h2,
                which is correct: the page h1 lives in PageHero above. */}
            <ServiceDetail
              service={service}
              headingId={`service-${service.slug}`}
            />
          </div>

          {service.body?.length ? (
            <div className="prose-prismaa mt-12">
              <h2>More about this scan</h2>
              {service.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {service.faqs?.length ? (
            <div className="mt-12">
              <h2 className="text-display-sm">Common questions</h2>
              <Accordion className="mt-5" items={service.faqs} />
            </div>
          ) : null}

          {related.length > 0 ? (
            <div className="mt-14 border-t border-ink-100 pt-10">
              <h2 className="font-display text-xl font-bold text-ink-900">
                Related scans
              </h2>
              <ul className="mt-5 grid gap-3.5 sm:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex h-full flex-col rounded-card bg-white p-4 shadow-e1 ring-1 ring-ink-100/80 transition hover:shadow-e2 hover:ring-brand-200"
                    >
                      <span className="font-display text-[0.9375rem] leading-snug font-bold text-ink-900">
                        {item.name}
                      </span>
                      <span className="mt-1.5 flex-1 text-[0.8125rem] leading-relaxed text-ink-600">
                        {item.summary}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-brand-700 transition group-hover:gap-1.5">
                        Read more
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          medicalTestSchema({
            name: service.name,
            slug: service.slug,
            description: service.summary,
            preparation: service.preparation,
            usedFor: service.whoItsFor,
          }),
          ...(service.faqs?.length ? [faqSchema(service.faqs)] : []),
        ]}
      />
    </>
  );
}
