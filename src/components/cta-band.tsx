"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { PhoneLink } from "@/components/phone-link";
import { getPrimaryContactPhone } from "@/lib/contact";

export function CtaBand() {
  const { locale, t } = useLanguage();
  const phone = getPrimaryContactPhone(locale);

  return (
    <section className="bg-jade py-14 text-center text-accent-foreground sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          {t.ctaBand.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-base leading-relaxed text-white/80 sm:text-lg">
          {t.ctaBand.support}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/konsultaciya"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white px-6 text-base font-medium text-ink transition-colors hover:bg-white/90"
          >
            {t.ctaBand.button}
          </Link>
          {/* Phones: tap to call. Desktop: PhoneLink does not dial, so it reads as plain info. */}
          <PhoneLink
            phone={phone}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-6 text-base font-medium text-white transition-colors hover:bg-white/10 md:cursor-default md:hover:bg-transparent"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {t.ctaBand.call}: {phone.display}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
