"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { PhoneLink } from "@/components/phone-link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/contact";
import { serviceOrder } from "@/lib/i18n";
import { getLegalNav } from "@/lib/legal";

export function SiteFooter() {
  const { locale, t } = useLanguage();
  const legalLinks = getLegalNav(locale);

  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.9fr_0.9fr_1.15fr]">
        <div>
          <p className="font-display text-xl text-white">{t.brand}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium tracking-[0.14em] text-foam uppercase">
            {t.footer.services}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceOrder.map((id) => (
              <li key={id}>
                <Link
                  href={t.services[id].href}
                  className="transition-colors hover:text-white"
                >
                  {t.services[id].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium tracking-[0.14em] text-foam uppercase">
            {t.footer.company}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/kak-rabotim" className="transition-colors hover:text-white">
                {t.nav.process}
              </Link>
            </li>
            <li>
              <Link href="/za-nas" className="transition-colors hover:text-white">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/polezno" className="transition-colors hover:text-white">
                {t.nav.useful}
              </Link>
            </li>
            <li>
              <Link href="/vaprosi" className="transition-colors hover:text-white">
                {t.nav.faq}
              </Link>
            </li>
            <li>
              <Link
                href="/konsultaciya"
                className="transition-colors hover:text-white"
              >
                {t.footer.contacts}
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-jade px-5 py-6 text-white sm:px-6">
          <p className="text-sm font-medium tracking-[0.14em] text-foam/90 uppercase">
            {t.footer.contacts}
          </p>

          <div className="mt-5 space-y-4 text-sm">
            <div>
              <p className="text-white/75">{t.footer.phoneLabel}</p>
              <PhoneLink className="mt-1 block font-display text-xl text-white sm:text-2xl">
                {CONTACT_PHONE_DISPLAY}
              </PhoneLink>
            </div>

            <div>
              <p className="text-white/75">{t.footer.emailLabel}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 block break-all text-white transition-opacity hover:opacity-90"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="border-t border-white/20 pt-4">
              <p className="text-white/75">{t.footer.hoursLabel}</p>
              <p className="mt-1 text-white">{t.footer.hoursValue}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <p className="text-sm font-medium tracking-[0.14em] text-foam uppercase">
            {t.footer.legal}
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
