"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function FreeWhy({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <section className={`py-16 sm:py-20 ${className}`.trim()}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
          {t.freeWhy.title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.freeWhy.body}
        </p>
        <Link
          href={t.freeWhy.href}
          className="mt-6 inline-flex text-base font-medium text-jade transition-colors hover:text-ink"
        >
          {t.freeWhy.moreLabel}
        </Link>
      </div>
    </section>
  );
}
