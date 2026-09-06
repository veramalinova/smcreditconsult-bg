"use client";

import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { locale, setLocale, t } = useLanguage();

  const inactive =
    tone === "light"
      ? "text-white/55 hover:text-white"
      : "text-muted-foreground hover:text-ink";
  const active = tone === "light" ? "text-white" : "text-ink";
  const divider = tone === "light" ? "bg-white/35" : "bg-border";

  function select(next: Locale) {
    setLocale(next);
  }

  return (
    <div
      className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide ${className}`}
      role="group"
      aria-label={t.lang.label}
    >
      <button
        type="button"
        onClick={() => select("bg")}
        className={`rounded px-1.5 py-1 transition-colors ${
          locale === "bg" ? active : inactive
        }`}
        aria-pressed={locale === "bg"}
      >
        {t.lang.bg}
      </button>
      <span className={`h-3 w-px ${divider}`} aria-hidden />
      <button
        type="button"
        onClick={() => select("en")}
        className={`rounded px-1.5 py-1 transition-colors ${
          locale === "en" ? active : inactive
        }`}
        aria-pressed={locale === "en"}
      >
        {t.lang.en}
      </button>
    </div>
  );
}
