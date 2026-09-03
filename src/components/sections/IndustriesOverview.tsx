import { industries } from "@/content/industries";
import { actions, home } from "@/content/copy";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function IndustriesOverview() {
  return (
    <Section ariaLabelledBy="industries-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            id="industries-heading"
            eyebrow={home.industries.eyebrow}
            title={home.industries.title}
            lead={home.industries.lead}
          />
          <Button href="/industries" variant="secondary" className="mt-7">
            {actions.allIndustries}
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 60}>
              <IndustryCard industry={industry} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
