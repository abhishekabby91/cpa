import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/content/types";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-brand-lg border border-line bg-surface p-6 shadow-card",
        "transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-raised",
        className,
      )}
    >
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-brand bg-accent/8 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-fg">
        <Icon name={service.icon} className="h-5 w-5" />
      </span>

      <h3 className="text-lg leading-snug">
        {/* Stretched link keeps the whole card clickable with one accessible name. */}
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
          {service.name}
        </Link>
      </h3>

      <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
        {service.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Learn more
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
  );
}
