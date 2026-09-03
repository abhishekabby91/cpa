import { testimonials } from "@/content/testimonials";
import { home } from "@/content/copy";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Hides itself entirely when `testimonials` is empty — a firm without approved
 * client quotes shows no section rather than placeholder praise.
 */
export function Testimonials({ limit = 3 }: { limit?: number }) {
  const items = testimonials.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <Section tone="muted" ariaLabelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow={home.testimonials.eyebrow}
        title={home.testimonials.title}
        align="center"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((testimonial, index) => (
          <Reveal key={testimonial.quote} delay={index * 80}>
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
