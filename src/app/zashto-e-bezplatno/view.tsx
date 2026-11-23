"use client";

import { CtaBand } from "@/components/cta-band";
import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";

export default function FreeWhyPage() {
  const { t } = useLanguage();
  usePageMeta(t.freeWhyPage.metaTitle, t.freeWhyPage.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {t.freeWhyPage.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.freeWhyPage.lead}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-5 px-5 text-base leading-relaxed text-muted-foreground sm:px-8 sm:text-lg">
            {t.freeWhyPage.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
