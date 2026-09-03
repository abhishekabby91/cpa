import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/content/types";
import { formatDate } from "@/lib/utils";

export function BlogCard({
  post,
  featured = false,
  /** Set to 2 when the grid sits directly under the page h1. */
  headingLevel = 3,
}: {
  post: Post;
  featured?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-brand-lg border border-line bg-surface shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-raised">
      <div
        className={
          featured
            ? "relative aspect-[16/8] w-full overflow-hidden"
            : "relative aspect-[16/9] w-full overflow-hidden"
        }
      >
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          /* Generated cover: keeps the grid consistent before real artwork exists. */
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-primary-hover)_55%,var(--color-accent)_140%)]"
          >
            <svg
              viewBox="0 0 120 60"
              className="h-full w-full text-white/12"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            >
              <path d="M0 45 L20 38 L40 42 L60 26 L80 30 L100 14 L120 18" />
              <path d="M0 54 L20 50 L40 52 L60 44 L80 46 L100 36 L120 39" />
              <path d="M0 20h120M0 35h120" strokeDasharray="2 4" />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
          <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold uppercase tracking-wide text-accent">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-ink-muted">
            {formatDate(post.date)}
          </time>
          <span aria-hidden="true" className="text-line">
            ·
          </span>
          <span className="text-ink-muted">{post.readingTime}</span>
        </div>

        <Heading className={featured ? "text-xl leading-snug" : "text-lg leading-snug"}>
          <Link
            href={`/resources/blog/${post.slug}`}
            className="after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </Heading>

        <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Read article
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
      </div>
    </article>
  );
}
