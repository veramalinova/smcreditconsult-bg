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

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
