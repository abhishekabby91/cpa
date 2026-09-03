import type { Metadata } from "next";
import { site } from "@/content/site";
import { homepageFaqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesOverview } from "@/components/sections/IndustriesOverview";
import { Process } from "@/components/sections/Process";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";

export const metadata: Metadata = pageMetadata({
  title: `${site.firmName} | ${site.tagline} in ${site.address.city}, ${site.address.state}`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesOverview />
      <Process />
      <AboutPreview />
      <Testimonials />
      <CtaBand />
      <FaqSection />
      <ResourcesPreview />
      <JsonLd data={faqSchema(homepageFaqs)} />
    </>
  );
}
