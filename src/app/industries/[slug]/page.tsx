import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/content/industries";
import { getServices } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
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

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return pageMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relevantServices = getServices(industry.relevantServices);

  return (
    <>
      <PageHero eyebrow={industry.name} title={industry.headline} lead={industry.intro}>
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
          { name: "Industries", href: "/industries" },
          { name: industry.name, href: `/industries/${industry.slug}` },
        ]}
      />

      {/* Challenges */}
      <Section ariaLabelledBy="challenges-heading">
        <SectionHeading
          id="challenges-heading"
          eyebrow="Common challenges"
          title={`What makes ${industry.name.toLowerCase()} finances different`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {industry.challenges.map((challenge, index) => (
            <Reveal key={challenge.title} delay={index * 70}>
              <div className="flex h-full gap-4 rounded-brand-lg border border-line bg-surface p-6 shadow-card">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true">
                    <path d="M8 4v5M8 11.5h.01" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base leading-snug">{challenge.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section tone="muted" ariaLabelledBy="approach-heading">
        <SectionHeading
          id="approach-heading"
          eyebrow="How we help"
          title="What we do differently for these businesses"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.approach.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="flex h-full flex-col rounded-brand-lg border border-line bg-surface p-6 shadow-card">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-brand bg-primary text-primary-fg">
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

      {/* Relevant services */}
      {relevantServices.length ? (
        <Section ariaLabelledBy="industry-services-heading">
          <SectionHeading
            id="industry-services-heading"
            eyebrow="Services"
            title={`What ${industry.name.toLowerCase()} clients use most`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relevantServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Testimonials limit={3} />

      {industry.faqs.length ? (
        <Section tone="muted" ariaLabelledBy="industry-faq-heading">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <SectionHeading
                id="industry-faq-heading"
                eyebrow="Questions"
                title={`${industry.name} FAQs`}
              />
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion faqs={industry.faqs} tone="muted" />
            </div>
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={`Let's talk about your ${industry.name.toLowerCase()} business`}
        body="Tell us how the business runs and where the numbers stop being useful. Thirty minutes, no charge."
      />

      {industry.faqs.length ? <JsonLd data={faqSchema(industry.faqs)} /> : null}
    </>
  );
}
