import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/content/firm";
import { pages } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "Guides & Checklists",
  description:
    "Document checklists, year-end close guides, entity selection comparisons, and worksheets to work through before your next appointment.",
  path: "/resources/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow={pages.guides.eyebrow}
        title={pages.guides.title}
        lead={pages.guides.lead}
      />

      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Guides", href: "/resources/guides" },
        ]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 60}>
              <article className="group relative flex h-full flex-col rounded-brand-lg border border-line bg-surface p-7 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-raised">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-brand bg-accent/8 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-fg">
                  <Icon name={guide.icon} className="h-[1.2rem] w-[1.2rem]" />
                </span>

                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {guide.format}
                </p>
                <h2 className="mt-1.5 text-lg leading-snug">
                  <Link href={guide.href} className="after:absolute after:inset-0">
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {guide.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {pages.guides.cardCta}
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

        <p className="mt-10 rounded-brand-lg border border-line bg-muted p-5 text-sm leading-relaxed text-ink-muted">
          <strong className="font-semibold text-primary">Setup note:</strong> each
          guide currently links to the contact form with a{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 text-xs">?resource=</code>{" "}
          parameter so you can see which document was requested. Point{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 text-xs">href</code> in{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 text-xs">content/firm.ts</code>{" "}
          at a real PDF in <code className="rounded bg-surface px-1.5 py-0.5 text-xs">/public</code>{" "}
          or a gated form when your documents are ready.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
