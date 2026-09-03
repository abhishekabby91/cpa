import type { Metadata } from "next";
import { faqCategories, faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "What a CPA does, how fees work, what to bring to tax preparation, handling IRS notices, switching accountants, and how we keep your information secure.",
  path: "/faqs",
});

export default function FaqsPage() {
  const grouped = faqCategories
    .map((category) => ({
      category,
      items: faqs.filter((faq) => faq.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Straight answers to the questions we're asked most"
        lead="If yours isn't here, ask — we'd rather answer it directly than have you guess."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.consultationUrl} size="lg">
            Schedule a Consultation
          </Button>
          <Button href="/contact" variant="outlineDark" size="lg">
            Ask a question
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "FAQs", href: "/faqs" }]} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* In-page navigation for a long list. */}
          <nav aria-label="FAQ categories" className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Jump to
            </p>
            <ul className="mt-4 space-y-1 lg:sticky lg:top-28">
              {grouped.map((group) => (
                <li key={group.category}>
                  <a
                    href={`#${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="block rounded-brand px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-muted hover:text-accent"
                  >
                    {group.category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-14 lg:col-span-9">
            {grouped.map((group) => {
              const id = group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <div key={group.category} id={id} className="scroll-mt-28">
                  <h2 className="text-2xl">{group.category}</h2>
                  <FaqAccordion faqs={group.items} className="mt-6" />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Still have a question?"
        body={`Call ${site.phone} or send a note — we answer questions year-round, not just during filing season.`}
      />

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
