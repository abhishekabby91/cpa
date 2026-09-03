import { processSteps } from "@/content/firm";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";

export function Process() {
  return (
    <Section tone="dark" ariaLabelledBy="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="How It Works"
        title="What working together looks like"
        lead="No lengthy onboarding, no surprise invoice. You'll know the scope, the people, and the price before anything starts."
        tone="dark"
      />

      <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 80} as="li">
            <div className="relative h-full">
              {/* Connector rule between steps on wide screens. */}
              {index < processSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-11 top-5 hidden h-px w-[calc(100%-1rem)] bg-white/15 lg:block"
                />
              ) : null}

              <div className="relative flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-brand border border-white/20 bg-primary text-white/80">
                  <Icon name={step.icon} className="h-[1.05rem] w-[1.05rem]" />
                </span>
                <span className="bg-primary pr-1.5 font-serif text-sm font-semibold tracking-widest text-[var(--color-highlight)]">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 text-base leading-snug text-primary-fg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-9 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg text-white/80">
          Let&rsquo;s talk about your financial goals.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.consultationUrl} variant="onDark">
            Schedule a Consultation
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="outlineDark" external>
            <Icon name="phone" className="h-4 w-4" />
            {site.phone}
          </Button>
        </div>
      </div>
    </Section>
  );
}
