import type { Testimonial } from "@/content/types";

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div className="mb-4 flex gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={index < rounded ? "h-4 w-4 text-highlight" : "h-4 w-4 text-line"}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const attribution = [testimonial.company, testimonial.industry, testimonial.location]
    .filter(Boolean)
    .join(" · ");

  return (
    <figure className="flex h-full flex-col rounded-brand-lg border border-line bg-surface p-6 shadow-card sm:p-7">
      {testimonial.rating ? <Stars rating={testimonial.rating} /> : null}
      <svg
        viewBox="0 0 32 24"
        aria-hidden="true"
        className="mb-4 h-5 w-6 text-accent/25"
        fill="currentColor"
      >
        <path d="M13 24V12.6C13 5.9 17.2 1.2 24 0l1.6 3.4c-3.9 1.2-6 3.6-6.3 7h5.3V24H13zm-13 0V12.6C0 5.9 4.2 1.2 11 0l1.6 3.4c-3.9 1.2-6 3.6-6.3 7h5.3V24H0z" />
      </svg>

      <blockquote className="flex-1 text-[1.0625rem] leading-relaxed text-ink">
        {testimonial.quote}
      </blockquote>

      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="text-sm font-semibold text-primary">{testimonial.author}</p>
        {attribution ? (
          <p className="mt-0.5 text-xs text-ink-muted">{attribution}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
