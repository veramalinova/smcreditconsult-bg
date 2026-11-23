"use client";

import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";

export default function ProcessPage() {
  const { t } = useLanguage();
  usePageMeta(t.processPage.metaTitle, t.processPage.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {t.processPage.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.processPage.support}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <ol className="mx-auto max-w-6xl space-y-0 px-5 sm:px-8">
            {t.processPage.steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-4 border-t border-border/80 py-8 md:grid-cols-[7rem_1fr] md:gap-10"
              >
                <span className="font-display text-sm tracking-[0.2em] text-jade">
                  {step.number}
                </span>
                <div>
                  <h2 className="font-display text-2xl text-ink sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
            <Link
              href="/konsultaciya"
              className="inline-flex h-12 items-center justify-center rounded-md bg-jade px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-jade/90"
            >
              {t.nav.consult}
            </Link>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
