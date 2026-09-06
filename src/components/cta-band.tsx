"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="bg-jade py-14 text-center text-accent-foreground sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          {t.ctaBand.title}
        </h2>
        <Link
          href="/konsultaciya"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white px-6 text-base font-medium text-ink transition-colors hover:bg-white/90"
        >
          {t.ctaBand.button}
        </Link>
      </div>
    </section>
  );
}
