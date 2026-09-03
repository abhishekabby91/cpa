import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "outlineDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-brand font-semibold " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-60 active:translate-y-px";

const variants: Record<Variant, string> = {
  // Highest-contrast conversion action. Reserved for the primary CTA on a view.
  primary:
    "bg-accent text-accent-fg shadow-card hover:bg-accent-hover hover:shadow-raised",
  // Neutral action that still reads as a button.
  secondary:
    "border border-line bg-surface text-primary hover:border-primary hover:bg-muted",
  ghost: "text-primary hover:bg-muted",
  // For use on the navy sections.
  onDark: "bg-primary-fg text-primary hover:bg-white",
  outlineDark:
    "border border-white/30 text-primary-fg hover:border-white/70 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-6 py-3.5 text-base",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Set when the destination is off-site (e.g. an external scheduling tool). */
  external?: boolean;
  "aria-label"?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  external,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    // Absolute URLs bypass the client router and get the safe rel attributes.
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
