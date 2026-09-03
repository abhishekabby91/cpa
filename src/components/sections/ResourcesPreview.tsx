import { sortedPosts } from "@/content/posts";
import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function ResourcesPreview({ limit = 3 }: { limit?: number }) {
  const posts = sortedPosts.slice(0, limit);
  if (posts.length === 0) return null;

  return (
    <Section tone="muted" ariaLabelledBy="resources-heading">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="resources-heading"
          eyebrow="Resources"
          title="Plain explanations of the things clients ask about"
          className="max-w-2xl"
        />
        <Button href="/resources/blog" variant="secondary">
          Visit the resource center
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 80}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
