/**
 * Analytics helpers.
 *
 * Every function here is a no-op when no measurement ID is configured, so the
 * site runs identically with analytics off — which is the default, and the
 * correct state for a staging review.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

/**
 * The conversions worth measuring on a professional services site. Keep this
 * list short: a handful of events that map to revenue beats fifty that map to
 * curiosity.
 */
export type ConversionEvent =
  | "consultation_click"
  | "phone_click"
  | "email_click"
  | "contact_form_submit"
  | "directions_click";

export function trackEvent(
  event: ConversionEvent,
  params: Record<string, string | number | undefined> = {},
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}
