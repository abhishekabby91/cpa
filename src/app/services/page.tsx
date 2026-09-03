import type { Metadata } from "next";
import { serviceCategories } from "@/content/services";
import { actions, pages } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Process } from "@/components/sections/Process";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Tax, Accounting & Advisory Services",
  description:
    "Tax preparation and planning, bookkeeping and monthly accounting, payroll, IRS representation, and fractional CFO advisory for individuals and businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={pages.services.eyebrow}
        title={pages.services.title}
        lead={pages.services.lead}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.consultationUrl} size="lg">
            {actions.consult}
          </Button>
          <Button href="/contact" variant="outlineDark" size="lg">
            {pages.services.secondaryCta}
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

      {serviceCategories.map((category, index) => (
        <Section
          key={category.slug}
          id={category.slug}
          tone={index % 2 === 1 ? "muted" : "default"}
          ariaLabelledBy={`${category.slug}-heading`}
          className="scroll-mt-24"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-brand bg-primary text-primary-fg">
              <Icon name={category.icon} className="h-[1.35rem] w-[1.35rem]" />
            </span>
            <div className="max-w-2xl">
              <h2 id={`${category.slug}-heading`} className="text-[1.75rem] sm:text-3xl">
                {category.name}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                {category.summary}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.services.map((service, serviceIndex) => (
              <Reveal key={service.slug} delay={serviceIndex * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Process />
      <CtaBand
        title={pages.services.ctaTitle}
        body={pages.services.ctaBody}
      />
    </>
  );
}
