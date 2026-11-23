"use client";

import Image from "next/image";
import Link from "next/link";
import { MessagesSquare, Scale, FileCheck, UserSearch } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { useLanguage } from "@/components/language-provider";
import { serviceIcons } from "@/components/service-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";
import { serviceOrder } from "@/lib/i18n";

// One icon per "why" card, in the same order as home.whyItems in i18n.ts
const whyIcons = [MessagesSquare, Scale, FileCheck, UserSearch];

export default function HomePage() {
  const { t } = useLanguage();
  usePageMeta(t.home.metaTitle, t.home.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader variant="transparent" />
      <main className="flex-1">
        <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
          {/* Slightly larger than the section so the blurred edges stay hidden */}
          <div className="absolute -inset-3">
            <Image
              src="/hero-documents.png"
              alt={t.home.imageAlt}
              fill
              priority
              className="animate-ken-burns object-cover object-center blur-[1.5px]"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/72 to-ink/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,120,87,0.25),transparent_60%)]" />

          <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-28 text-center sm:px-8 sm:pb-28">
            {/* On phones the brand is already in the header, so it is shown only from sm up */}
            <p className="animate-fade-up hidden font-display text-4xl tracking-tight text-white sm:block sm:text-5xl md:text-6xl">
              {t.brand}
            </p>
            <div className="animate-draw-line mx-auto mt-5 hidden h-px w-20 bg-foam sm:block" />
            <h1 className="animate-fade-up-delay-1 font-display text-3xl leading-snug text-white sm:mt-6 sm:text-3xl md:text-4xl">
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
            {/* Phones: two equal-width stacked buttons. Larger screens: side by side. */}
            <div className="animate-fade-up-delay-3 mx-auto mt-8 flex max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/konsultaciya"
                className="inline-flex h-12 items-center justify-center rounded-md bg-jade px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-jade/90"
              >
                {t.home.cta}
              </Link>
              <Link
                href={t.freeWhy.href}
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {t.freeWhy.linkLabel}
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
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {serviceOrder.map((id, index) => {
                const service = t.services[id];
                const Icon = serviceIcons[id];
                return (
                  <Link
                    key={id}
                    href={service.href}
                    className={`group flex flex-col items-center px-6 text-center transition-colors lg:px-7 ${
                      index > 0 ? "lg:border-l lg:border-border/80" : ""
                    }`}
                  >
                    <div className="text-jade transition-transform group-hover:-translate-y-0.5">
                      <Icon />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-ink sm:text-3xl lg:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.short}
                    </p>
                    {/* mt-auto + pt-4: keeps the links on one line even when a title wraps */}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-jade">
                      {t.home.servicesMore}
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
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
              {t.processPage.steps.map((step, index, steps) => (
                <li key={step.number} className="relative text-center">
                  {/* Connector to the next step's circle (only when all four are in one row).
                      Starts just right of this circle (50% + 1.75rem) and ends just left of the
                      next one: next centre = 100% + gap(2rem) + 50%, minus 1.75rem. */}
                  {index < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-5 left-[calc(50%+1.75rem)] right-[calc(-50%-0.25rem)] hidden h-px bg-foam/35 lg:block"
                    />
                  ) : null}
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
              {/* Step 01 is the consultation, so the button starts the process */}
              <Link
                href="/konsultaciya"
                className="inline-flex h-12 items-center justify-center rounded-md bg-jade px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-jade/90"
              >
                {t.home.cta}
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
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {t.home.whyItems.map((item, index) => {
                const Icon = whyIcons[index % whyIcons.length];
                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-border/80 bg-white/70 p-6 sm:p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-jade/10 text-jade">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-xl text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
