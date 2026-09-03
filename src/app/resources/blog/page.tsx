import type { Metadata } from "next";
import { postCategories, sortedPosts } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { BlogIndex } from "@/components/sections/BlogIndex";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "Blog & Insights",
  description:
    "Articles on tax planning, S corporation compensation, monthly close, IRS notices, multi-state compliance, and cash flow forecasting.",
  path: "/resources/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Articles worth the ten minutes"
        lead="Written by the people who do the work, and reviewed before publication. Search by keyword or filter by topic."
      />

      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: "Blog", href: "/resources/blog" },
        ]}
      />

      <Section>
        <BlogIndex posts={sortedPosts} categories={postCategories} />
      </Section>

      <CtaBand
        title="Want this applied to your situation?"
        body="General guidance only goes so far. Book a consultation and we'll tell you what actually applies to your facts."
      />
    </>
  );
}
