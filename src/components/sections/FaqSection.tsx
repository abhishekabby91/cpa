import Link from "next/link";
import { homepageFaqs } from "@/content/faqs";
import { FaqAccordion } from "./FaqAccordion";
import { Section, SectionHeading } from "@/components/ui/Section";

export function FaqSection() {
  return (
    <Section ariaLabelledBy="faq-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionHeading
            id="faq-heading"
            eyebrow="Common Questions"
            title="Questions we're asked before the first meeting"
          />
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-muted">
            Don&rsquo;t see yours?{" "}
            <Link href="/faqs" className="font-medium text-accent hover:underline">
              Read all FAQs
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              ask us directly
            </Link>
            .
          </p>
        </div>

        <div className="lg:col-span-8">
          <FaqAccordion faqs={homepageFaqs} />
        </div>
      </div>
    </Section>
  );
}
