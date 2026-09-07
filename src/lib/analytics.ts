export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export const ANALYTICS_ENABLED = Boolean(GA_MEASUREMENT_ID);

export const CONSENT_STORAGE_KEY = "sm-analytics-consent";

export type AnalyticsConsent = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getStoredConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function storeConsent(value: AnalyticsConsent) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (!ANALYTICS_ENABLED) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (getStoredConsent() !== "accepted") return;
  window.gtag("event", eventName, params);
}

/** Primary conversion: successful consultation form submit. */
export function trackConsultLead() {
  trackEvent("generate_lead", {
    event_category: "consultation",
    event_label: "consult_form",
  });
}

/** Secondary: click-to-call on mobile. */
export function trackPhoneClick() {
  trackEvent("click_to_call", {
    event_category: "contact",
    event_label: "phone",
  });
}
