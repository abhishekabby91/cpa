import type { Metadata } from "next";
import { site } from "@/content/site";
import { team } from "@/content/team";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamCard } from "@/components/cards/TeamCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description: `Meet the CPAs and accounting professionals at ${site.firmName}. Every client works with a named lead accountant who stays with the relationship.`,
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="You'll know exactly who is doing your work"
        lead="Every client is assigned a lead accountant who stays with the relationship year over year — so you're not re-explaining your business each January."
      >
        <Button href={site.consultationUrl} size="lg">
          Schedule a Consultation
        </Button>
      </PageHero>

      <Breadcrumbs items={[{ name: "Our Team", href: "/team" }]} />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.slug} delay={index * 60}>
              <TeamCard member={member} headingLevel={2} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want to meet the person who'd handle your work?"
        body="Book a consultation and we'll pair you with the lead accountant whose practice fits your situation."
      />
    </>
  );
}
