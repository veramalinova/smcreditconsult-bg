"use client";

import { CtaBand } from "@/components/cta-band";
import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";

export default function UsefulPage() {
  const { t } = useLanguage();
  usePageMeta(t.usefulPage.metaTitle, t.usefulPage.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {t.usefulPage.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.usefulPage.support}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {t.usefulPage.tipsTitle}
            </h2>
            <div className="mt-10 divide-y divide-border/80 border-y border-border/80">
              {t.usefulPage.tips.map((tip) => (
                <article
                  key={tip.title}
                  className="grid gap-3 py-7 md:grid-cols-[0.35fr_0.65fr] md:gap-10"
                >
                  <h3 className="font-display text-xl text-ink sm:text-2xl">
                    {tip.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {tip.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/70 bg-mist py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {t.usefulPage.faqTitle}
            </h2>
            <div className="mt-10 space-y-6">
              {t.usefulPage.faq.map((item) => (
                <details
                  key={item.q}
                  className="group border-b border-border/80 pb-6"
                >
                  <summary className="cursor-pointer list-none font-display text-xl text-ink marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="text-jade transition-transform group-open:rotate-45">
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
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
