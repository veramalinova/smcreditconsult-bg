"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";

export default function NotFound() {
  const { t } = useLanguage();
  usePageMeta(t.notFound.metaTitle, t.notFound.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center pb-24 md:pb-0">
        <section className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
          <p className="text-sm font-medium tracking-[0.16em] text-jade uppercase">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            {t.notFound.title}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground sm:text-lg">
            {t.notFound.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-md bg-jade px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-jade/90"
            >
              {t.notFound.home}
            </Link>
            <Link
              href="/konsultaciya"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-white px-6 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              {t.notFound.consult}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
