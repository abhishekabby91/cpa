import Link from "next/link";
import { serviceCategories } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

/** Homepage services block, grouped by category with each category's services listed. */
export function ServicesOverview() {
  return (
    <Section id="services" ariaLabelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="What We Do"
        title="Three practices, one team that talks to each other"
        lead="Tax, accounting, and advisory work under one roof — so the return reflects the books, and the plan reflects both."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {serviceCategories.map((category, index) => (
          <Reveal key={category.slug} delay={index * 90}>
            <div
              id={category.slug}
              className="flex h-full flex-col rounded-brand-lg border border-line bg-surface p-7 shadow-card scroll-mt-28"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-brand bg-primary text-primary-fg">
                <Icon name={category.icon} className="h-[1.35rem] w-[1.35rem]" />
              </span>

              <h3 className="mt-5 text-xl">{category.name}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                {category.summary}
              </p>

              <ul className="mt-6 flex-1 space-y-0.5 border-t border-line pt-5">
                {category.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group -mx-2 flex items-center justify-between gap-3 rounded-brand px-2 py-2 text-[0.9375rem] text-ink transition-colors hover:bg-muted hover:text-accent"
                    >
                      <span>{service.name}</span>
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5 shrink-0 text-line transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 3l5 5-5 5" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button href="/services" variant="secondary">
          View all services
        </Button>
        <p className="text-sm text-ink-muted">
          Not sure what you need?{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            Tell us your situation
          </Link>{" "}
          and we&rsquo;ll say so plainly.
        </p>
      </div>
    </Section>
  );
}
