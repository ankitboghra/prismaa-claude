import { formattedAddress, siteConfig } from "@/data/site";
import { leadDoctor } from "@/data/team";
import { services } from "@/data/services";
import { googleReviews } from "@/data/testimonials";
import { absoluteUrl } from "./seo";
import type { Faq } from "@/data/faqs";

/**
 * Structured data.
 *
 * Google's local pack and the "People also ask" panel are both driven by this,
 * and for a diagnostic centre they are the two highest-value surfaces there
 * are. Everything below is derived from the same data files the UI renders, so
 * the markup and the page can never disagree — which is exactly what triggers
 * a manual action.
 */

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "DiagnosticLab", "MedicalClinic"],
    "@id": ORG_ID,
    name: siteConfig.legalName,
    alternateName: [siteConfig.name, `${siteConfig.name} ${siteConfig.city}`],
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    slogan: siteConfig.motto,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentOrganisation,
    },
    email: siteConfig.email,
    telephone: siteConfig.phones.map((phone) => phone.e164),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    sameAs: [siteConfig.socials.instagram, siteConfig.mapsUrl],
    openingHoursSpecification: siteConfig.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    areaServed: [
      { "@type": "City", name: "Surat" },
      { "@type": "AdministrativeArea", name: "South Gujarat" },
      { "@type": "City", name: "Navsari" },
      { "@type": "City", name: "Bharuch" },
      { "@type": "City", name: "Valsad" },
      { "@type": "City", name: "Vapi" },
      { "@type": "City", name: "Bardoli" },
    ],
    medicalSpecialty: ["Radiology", "Oncologic", "DiagnosticImaging"],
    availableService: services.map((service) => ({
      "@type": "MedicalTest",
      name: service.name,
      url: absoluteUrl(`/services/${service.slug}`),
      description: service.summary,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleReviews.rating,
      reviewCount: googleReviews.count,
      bestRating: 5,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.url}/team#${leadDoctor.slug}`,
    name: leadDoctor.name,
    jobTitle: leadDoctor.role,
    medicalSpecialty: ["Radiology", "DiagnosticImaging"],
    worksFor: { "@id": ORG_ID },
    url: absoluteUrl("/team"),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    alumniOf: leadDoctor.education?.map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.institution,
    })),
    memberOf: leadDoctor.affiliations?.map((name) => ({
      "@type": "Organization",
      name,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function medicalTestSchema(input: {
  name: string;
  slug: string;
  description: string;
  preparation: string[];
  usedFor: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name: input.name,
    url: absoluteUrl(`/services/${input.slug}`),
    description: input.description,
    provider: { "@id": ORG_ID },
    preparation: input.preparation.join(" "),
    usedToDiagnose: input.usedFor.map((name) => ({
      "@type": "MedicalCondition",
      name,
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    inLanguage: "en-IN",
    image: input.image ? absoluteUrl(input.image) : absoluteUrl("/opengraph-image"),
    author: { "@type": "Person", name: input.authorName },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    /** Signals to Google that this is reviewed medical content, not blogspam. */
    reviewedBy: { "@type": "Person", name: leadDoctor.name },
  };
}

export function imageGallerySchema(
  items: { url: string; caption: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${siteConfig.name} — centre gallery`,
    url: absoluteUrl("/gallery"),
    associatedMedia: items.map((item) => ({
      "@type": "ImageObject",
      contentUrl: item.url,
      caption: item.caption,
    })),
  };
}

/** Convenience for the map pin / directions block. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${siteConfig.legalName}, ${formattedAddress}`,
)}`;
