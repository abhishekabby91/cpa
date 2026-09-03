import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";
import { pages } from "@/content/copy";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: `Terms governing use of the ${site.firmName} website, including the scope of information provided and the limits of the client relationship.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title={pages.legal.terms.title}
      updated={pages.legal.terms.updated}
      breadcrumb={{ name: pages.legal.terms.title, href: "/terms" }}
      intro={pages.legal.terms.intro}
    >
      <p className="rounded-brand border-l-4 border-accent bg-muted p-4 text-sm">
        <strong>Template notice —</strong> these terms are a starting point for a
        US CPA firm. Have counsel review and adapt them before publishing.
      </p>

      <h2>Acceptance of terms</h2>
      <p>
        By accessing this website you agree to these terms. If you do not agree,
        please do not use the site.
      </p>

      <h2>Informational purposes only</h2>
      <p>
        Content on this website is general information about {site.firmName} and
        about accounting and tax topics. It is not accounting, tax, legal, or
        investment advice, and it does not account for your specific
        circumstances. Tax law changes frequently, and information here may not
        reflect the most current developments.
      </p>
      <p>
        Do not act or refrain from acting on the basis of anything on this site
        without seeking advice from a qualified professional about your situation.
      </p>

      <h2>No client relationship</h2>
      <p>
        Viewing this website, submitting a form, or contacting us does not create
        a CPA-client relationship. That relationship begins only when we and you
        execute a written engagement letter describing the scope of services.
      </p>

      <h2>Confidential information</h2>
      <p>
        Please do not send sensitive or confidential information — Social Security
        numbers, account numbers, or tax documents — through this website or by
        email. Information transmitted before an engagement letter is in place is
        not treated as confidential client information. We will provide a secure
        portal for document exchange once an engagement begins.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Content on this site, including text, graphics, and layout, is owned by{" "}
        {site.firmName} or its licensors and is protected by copyright and other
        laws. You may view and print pages for personal, non-commercial use.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site may link to third-party websites. We do not control and are not
        responsible for their content, accuracy, or privacy practices.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; without warranties of any
        kind, express or implied, including warranties of accuracy,
        merchantability, or fitness for a particular purpose.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.firmName} is not liable for
        any damages arising out of your access to, use of, or inability to use
        this website.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of{" "}
        {site.address.state === "TX" ? "Texas" : site.address.state}, without
        regard to its conflict of law provisions.
      </p>

      <h2>Changes</h2>
      <p>
        We may revise these terms at any time. Continued use of the site after a
        revision constitutes acceptance of the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
