import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocation, locations } from "@/content/locations";
import { getServices } from "@/content/services";
import { team } from "@/content/team";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, locationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TeamCard } from "@/components/cards/TeamCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { directionsUrl, formatAddress } from "@/lib/utils";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  return pageMetadata({
    title: location.seo.title,
    description: location.seo.description,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const officeServices = getServices(location.services);
  const officeTeam = team.filter((member) => location.team.includes(member.slug));

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        title={location.headline}
        lead={location.intro}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.consultationUrl} size="lg">
            Schedule a Consultation
          </Button>
          <Button href={`tel:${location.phoneHref}`} variant="outlineDark" size="lg" external>
            <Icon name="phone" className="h-4 w-4" />
            {location.phone}
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Locations", href: "/locations" },
          { name: `${location.city}, ${location.state}`, href: `/locations/${location.slug}` },
        ]}
      />

      {/* Office details */}
      <Section ariaLabelledBy="office-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              id="office-heading"
              eyebrow="Office"
              title={`Visiting our ${location.city} office`}
            />

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <dt className="sr-only">Address</dt>
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <dd>
                  <address className="not-italic leading-relaxed text-ink">
                    {location.address.street}
                    {location.address.street2 ? (
                      <>
                        <br />
                        {location.address.street2}
                      </>
                    ) : null}
                    <br />
                    {location.address.city}, {location.address.state} {location.address.zip}
                  </address>
                  <a
                    href={directionsUrl(location.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Get directions →
                  </a>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">Phone</dt>
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <dd>
                  <a
                    href={`tel:${location.phoneHref}`}
                    className="font-medium text-primary hover:text-accent"
                  >
                    {location.phone}
                  </a>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">Email</dt>
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <dd>
                  <a
                    href={`mailto:${location.email}`}
                    className="text-ink hover:text-accent hover:underline"
                  >
                    {location.email}
                  </a>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">Hours</dt>
                <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <dd className="space-y-1">
                  {location.hours.map((entry) => (
                    <p key={entry.days} className="text-[0.9375rem]">
                      <span className="text-ink-muted">{entry.days}:</span>{" "}
                      <span className="text-ink">{entry.hours}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            {location.mapEmbedUrl ? (
              <div className="overflow-hidden rounded-brand-lg border border-line">
                <iframe
                  src={location.mapEmbedUrl}
                  title={`Map showing ${site.firmName} in ${location.city}, ${location.state}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full border-0"
                />
              </div>
            ) : (
              /* No map configured — a directions card rather than an empty frame. */
              <div className="flex h-full min-h-[320px] flex-col justify-center rounded-brand-lg border border-line bg-muted p-8 text-center">
                <Icon name="pin" className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-4 font-serif text-lg font-semibold text-primary">
                  {formatAddress(location.address)}
                </p>
                <p className="mx-auto mt-2 max-w-sm text-sm text-ink-muted">
                  Add a Google Maps embed URL to this location in{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 text-xs">
                    content/locations.ts
                  </code>{" "}
                  to show an interactive map here.
                </p>
                <a
                  href={directionsUrl(location.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-5 inline-flex items-center gap-2 rounded-brand bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg"
                >
                  Get directions
                </a>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Areas served */}
      {location.areasServed.length ? (
        <Section tone="muted" ariaLabelledBy="areas-heading">
          <SectionHeading
            id="areas-heading"
            eyebrow="Areas served"
            title={`Where our ${location.city} clients are`}
            lead="These are the communities this office actually works with — not a radius drawn on a map."
          />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {location.areasServed.map((area) => (
              <li
                key={area}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink"
              >
                {area}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* Services at this office */}
      {officeServices.length ? (
        <Section ariaLabelledBy="location-services-heading">
          <SectionHeading
            id="location-services-heading"
            eyebrow="Services"
            title={`Available from our ${location.city} office`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officeServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Looking for something else?{" "}
            <Link href="/services" className="font-medium text-accent hover:underline">
              See all services
            </Link>
            .
          </p>
        </Section>
      ) : null}

      {/* Team at this office */}
      {officeTeam.length ? (
        <Section tone="muted" ariaLabelledBy="location-team-heading">
          <SectionHeading
            id="location-team-heading"
            eyebrow="Your team"
            title={`Working from ${location.city}`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {officeTeam.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </Section>
      ) : null}

      <Testimonials limit={3} />

      {location.faqs.length ? (
        <Section ariaLabelledBy="location-faq-heading">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <SectionHeading
                id="location-faq-heading"
                eyebrow="Questions"
                title={`${location.city} office FAQs`}
              />
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion faqs={location.faqs} />
            </div>
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={`Talk to our ${location.city} team`}
        body="Book a consultation, or call the office directly and we'll find a time that works."
        secondaryLabel={`Call ${location.phone}`}
        secondaryHref={`tel:${location.phoneHref}`}
      />

      <JsonLd data={locationSchema(location)} />
      {location.faqs.length ? <JsonLd data={faqSchema(location.faqs)} /> : null}
    </>
  );
}
