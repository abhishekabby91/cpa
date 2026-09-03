import type { Metadata } from "next";
import { locations } from "@/content/locations";
import { actions, pages } from "@/content/copy";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { LocationCard } from "@/components/cards/LocationCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "Our Offices",
  description: `Visit ${site.firmName} in person or work with us remotely. Office addresses, hours, and the areas each location serves.`,
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow={pages.locations.eyebrow}
        title={pages.locations.title}
        lead={pages.locations.lead}
      >
        <Button href={site.consultationUrl} size="lg">
          {actions.consult}
        </Button>
      </PageHero>

      <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <Reveal key={location.slug} delay={index * 70}>
              <LocationCard location={location} headingLevel={2} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={pages.locations.ctaTitle}
        body={pages.locations.ctaBody}
      />
    </>
  );
}
