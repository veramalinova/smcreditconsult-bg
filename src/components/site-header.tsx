"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { PhoneLink } from "@/components/phone-link";
import { getPrimaryContactPhone } from "@/lib/contact";

export function SiteHeader({
  variant = "solid",
}: {
  variant?: "solid" | "transparent";
}) {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const light = variant === "transparent";
  const phone = getPrimaryContactPhone(locale);

  const links = [
    { href: "/uslugi", label: t.nav.services },
    { href: "/kak-rabotim", label: t.nav.process },
    { href: "/za-nas", label: t.nav.about },
    { href: t.freeWhy.href, label: t.freeWhy.linkLabel },
    { href: "/polezno", label: t.nav.useful },
    { href: "/vaprosi", label: t.nav.faq },
  ];

  function linkClass(href: string) {
    const active = pathname === href || pathname.startsWith(`${href}/`);
    if (light) {
      return active
        ? "text-white"
        : "text-white/80 transition-colors hover:text-white";
    }
    return active
      ? "text-ink"
      : "text-muted-foreground transition-colors hover:text-ink";
  }

  return (
    <header
      className={
        light
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 border-b border-border/70 bg-[#f3f6f8]/95 backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className={`font-display text-lg tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {t.brand}
        </Link>

        <nav className="hidden items-center gap-5 text-sm lg:gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher tone={light ? "light" : "dark"} />
          <Link
            href="/konsultaciya"
            className={
              light
                ? "rounded-md bg-white/95 px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-white"
                : "rounded-md bg-jade px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-jade/90"
            }
          >
            {t.nav.consult}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher
            className="mr-1"
            tone={light ? "light" : "dark"}
          />
          <PhoneLink
            forceCall
            aria-label={t.nav.phoneAria}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              light
                ? "border-white/30 text-white"
                : "border-border text-ink"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M7.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 5.5 6.5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />
            </svg>
          </PhoneLink>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${
              light
                ? "border-white/30 text-white"
                : "border-border text-ink"
            }`}
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
              ) : (
                <path
                  d="M5 7h14M5 12h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          className={`border-t md:hidden ${
            light
              ? "border-white/15 bg-ink/95 text-white"
              : "border-border bg-[#f3f6f8] text-ink"
          }`}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-sm sm:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PhoneLink
              forceCall
              className="mt-2 rounded-md px-3 py-3 font-medium hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              {`${t.nav.phoneAria}: ${phone.display}`}
            </PhoneLink>
            <Link
              href="/konsultaciya"
              className="mt-1 rounded-md bg-jade px-3 py-3 text-center font-medium text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              {t.nav.consult}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
