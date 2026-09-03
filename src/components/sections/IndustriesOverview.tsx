import { industries } from "@/content/industries";
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
            eyebrow="Industries"
            title="We know how your business actually makes money"
            lead="Job costing and WIP look nothing like matter-level realization, which looks nothing like passive activity grouping. Depth in a handful of industries beats a claim to serve everyone."
          />
          <Button href="/industries" variant="secondary" className="mt-7">
            All industries
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
