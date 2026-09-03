"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/content/types";
import { BlogCard } from "@/components/cards/BlogCard";
import { cn } from "@/lib/utils";

/**
 * Client-side search and category filtering over the full post list.
 *
 * Every post is server-rendered into the page first, so the article titles and
 * excerpts are crawlable and the page is usable with JavaScript disabled — the
 * filtering is progressive enhancement on top.
 */
export function BlogIndex({
  posts,
  categories,
}: {
  posts: Post[];
  categories: readonly string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  // Only offer categories that actually have posts.
  const activeCategories = useMemo(
    () => ["All", ...categories.filter((c) => posts.some((p) => p.category === c))],
    [categories, posts],
  );

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      if (!matchesCategory) return false;
      if (!term) return true;
      return (
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
      );
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="post-search" className="sr-only">
            Search articles
          </label>
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="M13.5 13.5L17 17" />
          </svg>
          <input
            id="post-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="w-full rounded-brand border border-line bg-surface py-2.5 pl-10 pr-3.5 text-[0.9375rem] text-ink placeholder:text-ink-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
          />
        </div>

        <div className="-mx-1 overflow-x-auto">
          <ul className="flex gap-2 px-1 pb-1" role="list">
            {activeCategories.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    category === item
                      ? "border-primary bg-primary text-primary-fg"
                      : "border-line bg-surface text-ink-muted hover:border-accent hover:text-accent",
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="sr-only" role="status">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"} shown
      </p>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-serif text-xl text-primary">No articles match that search</p>
          <p className="mx-auto mt-2 max-w-md text-[0.9375rem] text-ink-muted">
            Try a different term or clear the filters. If you&rsquo;re looking for
            something specific, ask us directly — it&rsquo;s often faster.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-6 rounded-brand border border-line px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} headingLevel={2} />
          ))}
        </div>
      )}
    </div>
  );
}
