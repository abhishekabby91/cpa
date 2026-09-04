import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";
import { pages } from "@/content/copy";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.firmName} collects, uses, and protects information submitted through this website and in the course of providing professional services.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title={pages.legal.privacy.title}
      updated={pages.legal.privacy.updated}
      breadcrumb={{ name: pages.legal.privacy.title, href: "/privacy" }}
      intro={pages.legal.privacy.intro(site.firmName)}
    >
      <p className="rounded-brand border-l-4 border-accent bg-muted p-4 text-sm">
        <strong>Template notice —</strong> this policy is a starting point drafted
        for a US CPA firm. Have counsel review and adapt it to your actual data
        practices, the states you operate in, and your obligations under the
        Gramm-Leach-Bliley Act and IRS Publication 4557 before publishing. Counsel
        should also confirm which privacy regimes apply to this firm&rsquo;s
        visitors and whether the consent mode configured in{" "}
        <code>content/privacy.ts</code> matches them &mdash; the site ships with
        opt-in, which is the stricter posture.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly — such as your name, email
        address, phone number, company, and the contents of messages you send
        through our contact and consultation forms.
      </p>
      <p>
        In the course of providing professional services, we also collect the
        financial and tax information necessary to perform the engagement. That
        information is governed by the confidentiality obligations described
        below, not solely by this website policy.
      </p>
      <p>
        Our website may collect limited technical information automatically,
        including IP address, browser type, pages viewed, and referring URL.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to inquiries and schedule consultations</li>
        <li>To provide the professional services you engage us for</li>
        <li>To meet legal, regulatory, and professional standards obligations</li>
        <li>To maintain and improve the security and function of this website</li>
      </ul>

      <h2>Confidentiality of client information</h2>
      <p>
        As a CPA firm, we are bound by professional confidentiality obligations,
        including the AICPA Code of Professional Conduct and applicable state
        board rules. We do not disclose confidential client information without
        your consent except as permitted or required by law, professional
        standards, or a valid legal process.
      </p>
      <p>
        We maintain a written information security program covering the
        safeguarding of taxpayer data, as required of tax return preparers.
      </p>

      <h2>How we share information</h2>
      <p>We do not sell your personal information. We share information only:</p>
      <ul>
        <li>With service providers who support our operations, under contract</li>
        <li>With your authorization, such as to a lender or attorney you direct us to</li>
        <li>Where required by law, subpoena, or professional standards</li>
      </ul>

      <h2>Cookies and analytics</h2>
      <p>
        This website sets strictly necessary cookies to function, including one
        that records your cookie preferences. Nothing optional &mdash; analytics,
        functional or advertising &mdash; is set until you agree to it.
      </p>
      <p>
        You can review the categories, see exactly which cookies each one sets,
        and change your choice at any time from the{" "}
        <strong>Cookie preferences</strong> link in the footer. Withdrawing
        consent is as straightforward as giving it.
      </p>
      <p>
        We honour the Global Privacy Control (GPC) browser signal. If your
        browser sends it, optional cookies stay off and you will not be asked.
      </p>

      <h2>Data security</h2>
      <p>
        We use administrative, technical, and physical safeguards designed to
        protect the information in our care, including encrypted transmission and
        access controls limited to the personnel working on your engagement. No
        method of transmission or storage is completely secure, so please use the
        secure client portal — not email — for sensitive documents.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain client records for the period required by professional
        standards, applicable statutes of limitation, and our records retention
        policy. Website inquiry information is retained only as long as needed to
        respond and to maintain a record of the contact.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request access to, correction of, or deletion of personal
        information we hold about you, subject to our legal and professional
        obligations to retain certain records. Residents of some states have
        additional rights under state privacy law. Contact us using the details
        below to make a request.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        This website is not directed to children under 13, and we do not
        knowingly collect personal information from them through it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last
        updated&rdquo; date above reflects the most recent revision.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be directed to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}, or by
        mail to {site.address.street}
        {site.address.street2 ? `, ${site.address.street2}` : ""},{" "}
        {site.address.city}, {site.address.state} {site.address.zip}.
      </p>
    </LegalPage>
  );
}
