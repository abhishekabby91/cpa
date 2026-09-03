import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Firm wordmark. Renders `site.logo` when set; otherwise draws a monogram
 * lockup from the config so the template has a credible mark on day one.
 */
export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const onDark = tone === "dark";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${site.firmName} — home`}
    >
      {site.logo ? (
        <Image
          src={site.logo}
          alt={site.firmName}
          width={168}
          height={40}
          priority
          className="h-9 w-auto"
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-brand font-serif text-[0.9375rem] font-semibold tracking-tight transition-colors",
              onDark
                ? "bg-primary-fg text-primary"
                : "bg-primary text-primary-fg group-hover:bg-primary-hover",
            )}
          >
            {site.monogram}
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-serif text-[1.0625rem] font-semibold tracking-tight",
                onDark ? "text-primary-fg" : "text-primary",
              )}
            >
              {site.firmName}
            </span>
            <span
              className={cn(
                "mt-1 text-[0.625rem] font-medium uppercase tracking-[0.16em]",
                onDark ? "text-white/60" : "text-ink-muted",
              )}
            >
              {site.tagline}
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
