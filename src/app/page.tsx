"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FreeWhy } from "@/components/free-why";
import { useLanguage } from "@/components/language-provider";
import { serviceIcons } from "@/components/service-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";
import { serviceOrder } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useLanguage();
  usePageMeta(t.home.metaTitle, t.home.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader variant="transparent" />
      <main className="flex-1">
        <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
          <Image
            src="/hero.jpg"
            alt={t.home.imageAlt}
            fill
            priority
            className="animate-ken-burns object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/65 to-ink/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,122,110,0.22),transparent_60%)]" />

          <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-28 text-center sm:px-8 sm:pb-28">
            <p className="animate-fade-up font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
              {t.brand}
            </p>
            <div className="animate-draw-line mx-auto mt-5 h-px w-20 bg-foam" />
            <h1 className="animate-fade-up-delay-1 mt-6 font-display text-2xl leading-snug text-white sm:text-3xl md:text-4xl">
              {t.home.headline}
            </h1>
            <p className="animate-fade-up-delay-2 mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.home.support}
            </p>
            <ul className="animate-fade-up-delay-2 mx-auto mt-7 flex max-w-2xl list-none flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-0">
              {t.home.highlights.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center text-center"
                >
                  {index > 0 ? (
                    <span
                      className="mx-5 hidden h-4 w-px shrink-0 bg-foam/55 sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="font-display text-[0.95rem] tracking-[0.04em] text-foam sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={t.freeWhy.href}
                className="inline-flex h-12 items-center justify-center rounded-md bg-jade px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-jade/90"
              >
                {t.freeWhy.linkLabel}
              </Link>
              <Link
                href="/uslugi"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {t.home.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-[linear-gradient(180deg,#f3f6f8_0%,#e8f0f2_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
                {t.home.servicesTitle}
              </h2>
              <p className="mt-4 text-muted-foreground sm:text-lg">
                {t.home.servicesSupport}
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
              {serviceOrder.map((id, index) => {
                const service = t.services[id];
                const Icon = serviceIcons[id];
                return (
                  <Link
                    key={id}
                    href={service.href}
                    className={`group flex flex-col items-center px-6 text-center transition-colors md:px-10 ${
                      index > 0 ? "md:border-l md:border-border/80" : ""
                    }`}
                  >
                    <div className="text-jade transition-transform group-hover:-translate-y-0.5">
                      <Icon />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.short}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                {t.home.processTitle}
              </h2>
              <p className="mt-4 text-white/70 sm:text-lg">
                {t.home.processSupport}
              </p>
            </div>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.processPage.steps.map((step) => (
                <li key={step.number} className="text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-foam/50 font-display text-foam">
                    {step.number}
                  </div>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center">
              <Link
                href="/kak-rabotim"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {t.nav.process}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              {t.home.whyTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.home.whySupport}
            </p>
            <div className="mt-10 divide-y divide-border/80 border-y border-border/80">
              {t.home.whyItems.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-3 py-7 md:grid-cols-[0.35fr_0.65fr] md:gap-10"
                >
                  <h3 className="font-display text-xl text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FreeWhy className="border-t border-border/70 bg-mist" />

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
