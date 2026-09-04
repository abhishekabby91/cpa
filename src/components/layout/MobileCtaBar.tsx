"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { actions } from "@/content/copy";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Sticky mobile action bar: click-to-call plus the consultation CTA.
 *
 * Appears once the user scrolls past the hero so it doesn't compete with the
 * hero's own buttons, and adds bottom padding to the document so it never
 * covers the end of the footer.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "no-print fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
        // The consent banner occupies the same corner and sits above this one.
        // Stand down while it is showing rather than hiding behind it.
        "[html[data-consent-open]_&]:translate-y-full",
      )}
      // Hidden from assistive tech while off-screen; the same actions exist in
      // the header and in-page CTAs.
      aria-hidden={!visible}
    >
      <div
        className="grid grid-cols-2 gap-2 p-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={`tel:${site.phoneHref}`}
          tabIndex={visible ? undefined : -1}
          className="inline-flex items-center justify-center gap-2 rounded-brand border border-line px-4 py-3 text-sm font-semibold text-primary"
        >
          <Icon name="phone" className="h-4 w-4" />
          {actions.call}
        </a>
        <a
          href={site.consultationUrl}
          tabIndex={visible ? undefined : -1}
          className="inline-flex items-center justify-center rounded-brand bg-accent px-4 py-3 text-sm font-semibold text-accent-fg"
        >
          {actions.consultShort}
        </a>
      </div>
    </div>
  );
}
