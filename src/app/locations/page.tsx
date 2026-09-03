import type { Metadata } from "next";
import { locations } from "@/content/locations";
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
        eyebrow="Locations"
        title="Meet in person, or work with us entirely remotely"
        lead="Most of our work happens through a secure portal and video calls. The offices are here when you'd rather sit across a table."
      >
        <Button href={site.consultationUrl} size="lg">
          Schedule a Consultation
        </Button>
      </PageHero>

      <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <Reveal key={location.slug} delay={index * 70}>
              <LocationCard location={location} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Outside our metro?"
        body="We file in multiple states and work with clients across the country. Distance is rarely the constraint — tell us what you need."
      />
    </>
  );
}
