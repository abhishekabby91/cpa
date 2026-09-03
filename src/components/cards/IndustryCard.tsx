import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Industry } from "@/content/types";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="group relative flex h-full items-start gap-4 rounded-brand-lg border border-line bg-surface p-5 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-raised">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-brand bg-primary/6 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-fg">
        <Icon name={industry.icon} className="h-[1.15rem] w-[1.15rem]" />
      </span>
      <div>
        <h3 className="text-base leading-snug">
          <Link href={`/industries/${industry.slug}`} className="after:absolute after:inset-0">
            {industry.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          {industry.summary}
        </p>
      </div>
    </article>
  );
}
