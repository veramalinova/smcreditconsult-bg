"use client";

import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";
import { getLegalPage, type LegalPageId } from "@/lib/legal";

export function LegalPageView({ pageId }: { pageId: LegalPageId }) {
  const { locale } = useLanguage();
  const page = getLegalPage(locale, pageId);
  usePageMeta(page.metaTitle, page.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {page.updatedLabel}: {page.updatedValue}
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
            {page.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
