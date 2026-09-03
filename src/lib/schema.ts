import { site, siteUrl } from "@/content/site";
import { locations, primaryLocation } from "@/content/locations";
import type { FaqItem, Location, Post, Service, TeamMember } from "@/content/types";
import { formatAddress } from "./utils";

/**
 * Structured data builders.
 *
 * Rule for every builder here: emit only what the content actually supports.
 * Inventing aggregate ratings, review counts, price ranges, or geo coordinates
 * is a manual-action risk and misrepresents the firm. Optional fields are
 * omitted rather than filled with placeholders.
 */

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

function postalAddress(address: Location["address"] | typeof site.address) {
  return {
    "@type": "PostalAddress",
    streetAddress: [address.street, address.street2].filter(Boolean).join(", "),
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.zip,
    addressCountry: address.country,
  };
}

function openingHours(hours: { days: string; hours: string }[]) {
  // Only emit structured hours the template can parse confidently. Free-text
  // entries such as "By appointment" are intentionally skipped.
  const dayMap: Record<string, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };
  const timePattern = /^(\d{1,2}:\d{2}\s*[AP]M)\s*[–-]\s*(\d{1,2}:\d{2}\s*[AP]M)$/i;

  const to24 = (value: string) => {
    const match = value.trim().match(/^(\d{1,2}):(\d{2})\s*([AP])M$/i);
    if (!match) return null;
    let hour = Number(match[1]) % 12;
    if (match[3].toUpperCase() === "P") hour += 12;
    return `${String(hour).padStart(2, "0")}:${match[2]}`;
  };

  return hours
    .map((entry) => {
      const times = entry.hours.match(timePattern);
      if (!times) return null;
      const opens = to24(times[1]);
      const closes = to24(times[2]);
      if (!opens || !closes) return null;

      const days = entry.days
        .split(/[–\-,&]/)
        .map((d) => dayMap[d.trim().toLowerCase()])
        .filter(Boolean);
      if (days.length === 0) return null;

      // "Monday – Thursday" expands to the full inclusive range.
      const order = Object.values(dayMap);
      const dayOfWeek =
        days.length === 2 && entry.days.includes("–")
          ? order.slice(order.indexOf(days[0]), order.indexOf(days[1]) + 1)
          : days;

      return { "@type": "OpeningHoursSpecification", dayOfWeek, opens, closes };
    })
    .filter(Boolean);
}

/** Organization + AccountingService, referenced by @id from other nodes. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService"],
    "@id": orgId,
    name: site.firmName,
    description: site.description,
    url: siteUrl,
    telephone: site.phoneHref,
    email: site.email,
    address: postalAddress(site.address),
    foundingDate: String(site.foundedYear),
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, ${l.state}`,
    })),
    knowsAbout: [
      "Tax preparation",
      "Tax planning",
      "Bookkeeping",
      "Payroll",
      "Financial statement preparation",
      "IRS representation",
      "Business advisory",
    ],
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
    ...(primaryLocation?.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: primaryLocation.geo.latitude,
            longitude: primaryLocation.geo.longitude,
          },
        }
      : {}),
    openingHoursSpecification: openingHours(site.hours),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: site.firmName,
    publisher: { "@id": orgId },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
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

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seo.description,
    serviceType: service.name,
    url: `${siteUrl}/services/${service.slug}`,
    provider: { "@id": orgId },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, ${l.state}`,
    })),
  };
}

export function personSchema(member: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    description: member.shortBio,
    url: `${siteUrl}/team/${member.slug}`,
    worksFor: { "@id": orgId },
    ...(member.credentials
      ? { honorificSuffix: member.credentials }
      : {}),
    ...(member.email ? { email: member.email } : {}),
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
    ...(member.expertise.length ? { knowsAbout: member.expertise } : {}),
  };
}

export function articleSchema(post: Post, authorName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: authorName },
    publisher: { "@id": orgId },
    mainEntityOfPage: `${siteUrl}/resources/blog/${post.slug}`,
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export function locationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    "@id": `${siteUrl}/locations/${location.slug}#office`,
    name: `${site.firmName} — ${location.city}, ${location.state}`,
    description: location.seo.description,
    url: `${siteUrl}/locations/${location.slug}`,
    telephone: location.phoneHref,
    email: location.email,
    address: postalAddress(location.address),
    parentOrganization: { "@id": orgId },
    areaServed: location.areasServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      formatAddress(location.address),
    )}`,
    ...(location.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.geo.latitude,
            longitude: location.geo.longitude,
          },
        }
      : {}),
    openingHoursSpecification: openingHours(location.hours),
  };
}
