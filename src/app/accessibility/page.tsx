import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: `${site.firmName}'s commitment to making this website usable by everyone, the standard we build to, and how to report a barrier.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      updated="January 1, 2026"
      breadcrumb={{ name: "Accessibility", href: "/accessibility" }}
      intro="We want this site to be usable by everyone, including people using assistive technology."
    >
      <h2>Our commitment</h2>
      <p>
        {site.firmName} is committed to making this website accessible to as many
        people as possible, regardless of ability or the technology they use to
        browse.
      </p>

      <h2>Standard we build to</h2>
      <p>
        This site is designed and developed to meet the Web Content Accessibility
        Guidelines (WCAG) 2.2 at Level AA. That work includes:
      </p>
      <ul>
        <li>Semantic HTML with a logical heading structure on every page</li>
        <li>Full keyboard operability, with a visible focus indicator throughout</li>
        <li>A skip link to bypass repeated navigation</li>
        <li>Text and interface colors that meet AA contrast ratios</li>
        <li>Descriptive alternative text for meaningful images</li>
        <li>Form fields with associated labels and clearly announced error messages</li>
        <li>Respect for the operating system&rsquo;s reduced-motion preference</li>
        <li>Layouts that reflow to 320px and support 200% text zoom</li>
      </ul>

      <h2>Ongoing work</h2>
      <p>
        Accessibility is not a one-time project. We test with keyboard navigation
        and automated tooling as part of our development process and address
        issues as they are identified. Some third-party embeds — such as mapping
        or scheduling tools — may not fully meet the same standard, and we
        provide an alternative route to the same information wherever that is the
        case.
      </p>

      <h2>Alternative ways to reach us</h2>
      <p>
        If any part of this site presents a barrier, you can always reach us
        directly by phone at {site.phone} or by email at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>, and we will provide the
        information or complete the request another way.
      </p>

      <h2>Reporting a problem</h2>
      <p>
        We welcome reports of accessibility barriers. Please tell us the page
        address, what you were trying to do, and the browser or assistive
        technology you were using. We aim to respond within two business days.
      </p>
    </LegalPage>
  );
}
