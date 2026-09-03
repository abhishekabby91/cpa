import type { FaqItem } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Accordion built on native <details>/<summary>.
 *
 * Keyboard support, screen reader semantics, and open/close state come from the
 * browser, and every answer is in the DOM for crawlers even while collapsed.
 */
export function FaqAccordion({
  faqs,
  className,
  tone = "default",
}: {
  faqs: FaqItem[];
  className?: string;
  tone?: "default" | "muted";
}) {
  if (faqs.length === 0) return null;

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className={cn("group", tone === "muted" && "bg-surface")}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
            <span className="font-serif text-[1.0625rem] font-semibold leading-snug text-primary">
              {faq.question}
            </span>
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-colors group-open:border-accent group-open:bg-accent group-open:text-accent-fg"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3 w-3 transition-transform duration-200 group-open:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M8 3.5v9M3.5 8h9" />
              </svg>
            </span>
          </summary>
          <div className="pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-muted">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
