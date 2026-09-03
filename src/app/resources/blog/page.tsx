import type { Metadata } from "next";
import { postCategories, sortedPosts } from "@/content/posts";
import { pages } from "@/content/copy";
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
        eyebrow={pages.blog.eyebrow}
        title={pages.blog.title}
        lead={pages.blog.lead}
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
        title={pages.blog.ctaTitle}
        body={pages.blog.ctaBody}
      />
    </>
  );
}
