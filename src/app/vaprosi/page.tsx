"use client";

import { CtaBand } from "@/components/cta-band";
import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";

export default function FaqPage() {
  const { t } = useLanguage();
  usePageMeta(t.faqPage.metaTitle, t.faqPage.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {t.faqPage.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.faqPage.support}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl space-y-6 px-5 sm:px-8">
            {t.faqPage.items.map((item) => (
              <details
                key={item.q}
                className="group border-b border-border/80 pb-6"
              >
                <summary className="cursor-pointer list-none marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    <h2 className="font-display text-xl text-ink">{item.q}</h2>
                    <span className="mt-1 text-jade transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
