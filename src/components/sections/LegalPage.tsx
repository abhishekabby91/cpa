import { Container } from "@/components/ui/Container";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

/**
 * Shared shell for policy pages.
 *
 * ⚠️  The policy text in these pages is a starting point written for a US CPA
 * firm, not legal advice. Have counsel review and adapt every one of them
 * before launch — privacy obligations in particular vary by state and by what
 * your site actually collects.
 */
export function LegalPage({
  title,
  updated,
  intro,
  breadcrumb,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  breadcrumb: { name: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead={intro} tone="light" />
      <Breadcrumbs items={[breadcrumb]} />

      <Container size="narrow">
        <div className="py-12 sm:py-16">
          <p className="mb-10 border-b border-line pb-6 text-sm text-ink-muted">
            Last updated: {updated}
          </p>
          <div className="prose-brand">{children}</div>
        </div>
      </Container>
    </>
  );
}
