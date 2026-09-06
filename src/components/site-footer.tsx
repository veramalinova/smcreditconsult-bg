"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { serviceOrder } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
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
              <Link
                href="/konsultaciya"
                className="transition-colors hover:text-white"
              >
                {t.footer.contacts}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
