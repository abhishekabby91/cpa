import type { Metadata } from "next";
import { industries } from "@/content/industries";
import { actions, pages } from "@/content/copy";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "CPA services with real depth in construction, real estate, healthcare, professional services, startups, and owner-operated small business.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={pages.industries.eyebrow}
        title={pages.industries.title}
        lead={pages.industries.lead}
      >
        <Button href={site.consultationUrl} size="lg">
          {actions.consult}
        </Button>
      </PageHero>

      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 60}>
              <article className="group relative flex h-full flex-col rounded-brand-lg border border-line bg-surface p-7 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-raised">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-brand bg-primary text-primary-fg">
                  <Icon name={industry.icon} className="h-[1.2rem] w-[1.2rem]" />
                </span>

                <h2 className="text-xl">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="after:absolute after:inset-0"
                  >
                    {industry.name}
                  </Link>
                </h2>

                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {industry.summary}
                </p>

                <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-5">
                  {industry.challenges.slice(0, 3).map((challenge) => (
                    <li
                      key={challenge.title}
                      className="flex gap-2.5 text-sm text-ink-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                      />
                      {challenge.title}
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {pages.industries.cardCta(industry.name.toLowerCase())}
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={pages.industries.ctaTitle}
        body={pages.industries.ctaBody}
      />
    </>
  );
}
