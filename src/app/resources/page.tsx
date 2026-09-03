import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/content/firm";
import { homepageFaqs } from "@/content/faqs";
import { sortedPosts } from "@/content/posts";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "Resource Center",
  description:
    "Articles, checklists, and guides on tax planning, business accounting, IRS notices, and multi-state compliance — written in plain language by our CPAs.",
  path: "/resources",
});

export default function ResourcesPage() {
  const latest = sortedPosts.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Plain explanations of the things clients actually ask about"
        lead="No gated fluff and no recycled tax-season listicles. These are the answers we give on the phone, written down."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/resources/blog" size="lg">
            Browse all articles
          </Button>
          <Button href="/resources/guides" variant="outlineDark" size="lg">
            Guides &amp; checklists
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />

      <Section ariaLabelledBy="latest-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="latest-heading"
            eyebrow="Latest"
            title="Recent articles"
            className="max-w-2xl"
          />
          <Button href="/resources/blog" variant="secondary">
            All articles
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 70}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted" ariaLabelledBy="guides-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="guides-heading"
            eyebrow="Downloads"
            title="Checklists and guides"
            lead="Practical documents you can work through before an appointment."
            className="max-w-2xl"
          />
          <Button href="/resources/guides" variant="secondary">
            All guides
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.slice(0, 6).map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 60}>
              <article className="group relative flex h-full flex-col rounded-brand-lg border border-line bg-surface p-6 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-raised">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-brand bg-accent/8 text-accent">
                  <Icon name={guide.icon} className="h-[1.15rem] w-[1.15rem]" />
                </span>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {guide.format}
                </p>
                <h3 className="mt-1.5 text-base leading-snug">
                  <Link href={guide.href} className="after:absolute after:inset-0">
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {guide.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ariaLabelledBy="resources-faq-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              id="resources-faq-heading"
              eyebrow="FAQs"
              title="Questions we hear most"
            />
            <Button href="/faqs" variant="secondary" className="mt-7">
              All FAQs
            </Button>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={homepageFaqs} />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have a question these don't answer?"
        body={`Call ${site.phone} or send a note. We answer client questions year-round, not just in filing season.`}
      />
    </>
  );
}
