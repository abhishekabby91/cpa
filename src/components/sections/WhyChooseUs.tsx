import { differentiators } from "@/content/firm";
import { home } from "@/content/copy";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function WhyChooseUs() {
  return (
    <Section tone="muted" ariaLabelledBy="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow={home.whyChooseUs.eyebrow}
        title={home.whyChooseUs.title}
        lead={home.whyChooseUs.lead}
      />

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <div className="flex gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-brand border border-line bg-surface text-accent shadow-card">
                <Icon name={item.icon} className="h-[1.15rem] w-[1.15rem]" />
              </span>
              <div>
                <h3 className="text-base leading-snug">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
