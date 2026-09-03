import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getRelatedPosts, posts } from "@/content/posts";
import { getTeamMember } from "@/content/team";
import { site } from "@/content/site";
import { pages } from "@/content/copy";
import type { PostBlock } from "@/content/types";
import { pageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { formatDate, initials } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const author = getTeamMember(post.author);
  return pageMetadata({
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    path: `/resources/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [author?.name ?? post.author],
    ...(post.image ? { image: post.image } : {}),
  });
}

/** Renders one structured content block. */
function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "subheading":
      return <h3>{block.text}</h3>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="not-prose my-8 rounded-brand-lg border-l-4 border-accent bg-muted p-6">
          <p className="flex items-center gap-2 font-serif text-base font-semibold text-primary">
            <Icon name="sparkle" className="h-4 w-4 text-accent" />
            {block.title}
          </p>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
            {block.text}
          </p>
        </aside>
      );
    case "quote":
      return (
        <blockquote className="not-prose my-8 border-l-2 border-highlight pl-6 font-serif text-xl italic leading-relaxed text-primary">
          {block.text}
        </blockquote>
      );
    case "paragraph":
    default:
      return <p>{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getTeamMember(post.author);
  const authorName = author?.name ?? post.author;
  const related = getRelatedPosts(post.slug);

  return (
    <>
      <article>
        <header className="border-b border-line bg-muted">
          <Container size="narrow">
            <div className="py-12 sm:py-16">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                <Link
                  href="/resources/blog"
                  className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent ring-1 ring-accent/25 transition-colors hover:bg-accent hover:text-accent-fg hover:ring-accent"
                >
                  {post.category}
                </Link>
                <time dateTime={post.date} className="text-ink-muted">
                  {formatDate(post.date)}
                </time>
                <span aria-hidden="true" className="text-line">
                  ·
                </span>
                <span className="text-ink-muted">{post.readingTime}</span>
              </p>

              <h1 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
                {post.title}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                {post.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-primary-fg"
                >
                  {initials(authorName)}
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-primary">
                    {author ? (
                      <Link href={`/team/${author.slug}`} className="hover:text-accent hover:underline">
                        {authorName}
                        {author.credentials ? `, ${author.credentials}` : ""}
                      </Link>
                    ) : (
                      authorName
                    )}
                  </p>
                  {author ? <p className="text-ink-muted">{author.title}</p> : null}
                </div>
              </div>
            </div>
          </Container>
        </header>

        <Breadcrumbs
          items={[
            { name: "Resources", href: "/resources" },
            { name: "Blog", href: "/resources/blog" },
            { name: post.title, href: `/resources/blog/${post.slug}` },
          ]}
        />

        {post.image ? (
          <Container size="narrow">
            <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-brand-lg">
              <Image
                src={post.image}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </Container>
        ) : null}

        <Container size="narrow">
          <div className="prose-brand py-12 sm:py-16">
            {post.body.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>

          {/* Standing disclaimer — general guidance is not client-specific advice. */}
          <aside className="mb-14 rounded-brand-lg border border-line bg-muted p-6">
            <p className="text-sm leading-relaxed text-ink-muted">
              <strong className="font-semibold text-primary">
                {pages.blogPost.disclaimerLabel}
              </strong>{" "}
              {pages.blogPost.disclaimerBody}{" "}
              <Link href="/contact" className="font-medium text-accent hover:underline">
                {pages.blogPost.disclaimerLink}
              </Link>
              .
            </p>
          </aside>

          <div className="mb-16 flex flex-col gap-4 rounded-brand-lg border border-line p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-lg font-semibold text-primary">
                {pages.blogPost.inlineCtaTitle}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                {pages.blogPost.inlineCtaBody}
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button href={site.consultationUrl}>{pages.blogPost.inlineCtaLabel}</Button>
            </div>
          </div>
        </Container>
      </article>

      {related.length ? (
        <Section tone="muted" ariaLabelledBy="related-posts-heading">
          <SectionHeading
            id="related-posts-heading"
            eyebrow={pages.blogPost.relatedEyebrow}
            title={pages.blogPost.relatedTitle}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand />
      <JsonLd data={articleSchema(post, authorName)} />
    </>
  );
}
