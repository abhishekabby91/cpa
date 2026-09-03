import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, getServices, services } from "@/content/services";
import { industries } from "@/content/industries";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

/* Every service page is generated at build time — no per-request rendering. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getServices(service.related);
  // Industries that list this service — a genuine internal link, not a keyword dump.
  const relevantIndustries = industries.filter((industry) =>
    industry.relevantServices.includes(service.slug),
  );

  return (
    <>
      <PageHero eyebrow={service.name} title={service.headline} lead={service.intro}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.consultationUrl} size="lg">
            Schedule a Consultation
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="outlineDark" size="lg" external>
            <Icon name="phone" className="h-4 w-4" />
            {site.phone}
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      {/* Pain points — meet the reader where they are before describing the service. */}
      <Section ariaLabelledBy="challenges-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              id="challenges-heading"
              eyebrow="Sound familiar?"
              title="The situations that bring people to us"
            />
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {service.painPoints.map((point, index) => (
              <Reveal key={point} delay={index * 50} as="li">
                <div className="flex gap-3.5 rounded-brand-lg border border-line bg-surface p-4 shadow-card">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true">
                      <path d="M8 4.5v4.5M8 11.5h.01" />
                    </svg>
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-ink">{point}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* What's included */}
      <Section tone="muted" ariaLabelledBy="includes-heading">
        <SectionHeading
          id="includes-heading"
          eyebrow="What's included"
          title={`What ${service.name.toLowerCase()} covers`}
          lead="Concrete deliverables, not a list of adjectives."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.includes.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="flex h-full flex-col rounded-brand-lg border border-line bg-surface p-6 shadow-card">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-brand bg-accent/8 text-accent">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <h3 className="text-base leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits + who it's for */}
      <Section ariaLabelledBy="benefits-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="benefits-heading"
              eyebrow="What changes"
              title="What you get out of it"
            />
            <ul className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-[0.9375rem] leading-relaxed text-ink">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-brand-lg border border-line bg-muted p-7">
            <h2 className="text-xl">Who this is for</h2>
            <ul className="mt-6 space-y-3">
              {service.idealFor.map((audience) => (
                <li key={audience} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {audience}
                </li>
              ))}
            </ul>

            {relevantIndustries.length ? (
              <div className="mt-7 border-t border-line pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  Industry-specific guidance
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {relevantIndustries.map((industry) => (
                    <li key={industry.slug}>
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="inline-flex rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-primary transition-colors hover:border-accent hover:text-accent"
                      >
                        {industry.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Section>

      <Testimonials limit={3} />

      {/* Service-specific FAQs */}
      {service.faqs.length ? (
        <Section ariaLabelledBy="service-faq-heading">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <SectionHeading
                id="service-faq-heading"
                eyebrow="Questions"
                title={`${service.name} FAQs`}
              />
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-muted">
                More questions?{" "}
                <Link href="/faqs" className="font-medium text-accent hover:underline">
                  Read all FAQs
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </Section>
      ) : null}

      {/* Related services */}
      {related.length ? (
        <Section tone="muted" ariaLabelledBy="related-heading">
          <SectionHeading
            id="related-heading"
            eyebrow="Related"
            title="Services that often go with this"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={`Let's talk about ${service.name.toLowerCase()}`}
        body="Thirty minutes, no charge. We'll tell you what we'd do and what it would cost before you commit to anything."
      />

      <JsonLd data={serviceSchema(service)} />
      {service.faqs.length ? <JsonLd data={faqSchema(service.faqs)} /> : null}
    </>
  );
}
