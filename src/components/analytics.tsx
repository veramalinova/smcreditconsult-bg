"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  ANALYTICS_ENABLED,
  GA_MEASUREMENT_ID,
  getStoredConsent,
  storeConsent,
  type AnalyticsConsent,
} from "@/lib/analytics";
import { useLanguage } from "@/components/language-provider";

export function Analytics() {
  const { t } = useLanguage();
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());
    setReady(true);
  }, []);

  if (!ANALYTICS_ENABLED || !ready) return null;

  function accept() {
    storeConsent("accepted");
    setConsent("accepted");
  }

  function decline() {
    storeConsent("declined");
    setConsent("declined");
  }

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <div className="fixed inset-x-0 bottom-20 z-50 border-t border-border/80 bg-[#f3f6f8]/95 p-4 backdrop-blur md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-md md:border">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.analytics.banner}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={accept}
              className="inline-flex h-10 items-center justify-center rounded-md bg-jade px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-jade/90"
            >
              {t.analytics.accept}
            </button>
            <button
              type="button"
              onClick={decline}
              className="inline-flex h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              {t.analytics.decline}
            </button>
            <a
              href="/politika-za-biskvitki"
              className="inline-flex h-10 items-center px-2 text-sm text-muted-foreground underline-offset-2 hover:text-ink hover:underline"
            >
              {t.analytics.more}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
