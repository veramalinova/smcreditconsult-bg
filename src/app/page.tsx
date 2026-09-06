"use client";

import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-full flex-col">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-white transition-opacity hover:opacity-90"
          >
            {t.hero.brand}
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/85 md:flex">
            <a href="#services" className="transition-colors hover:text-white">
              {t.nav.services}
            </a>
            <a href="#process" className="transition-colors hover:text-white">
              {t.nav.process}
            </a>
            <a href="#consult" className="transition-colors hover:text-white">
              {t.nav.consult}
            </a>
            <LanguageSwitcher />
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher className="md:hidden" />
            <Button
              render={<a href="#consult" />}
              className="h-10 bg-white/95 px-4 text-ink hover:bg-white"
            >
              {t.nav.bookCall}
            </Button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
          <Image
            src="/hero.jpg"
            alt={t.hero.imageAlt}
            fill
            priority
            className="animate-ken-burns object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,122,110,0.28),transparent_55%)]" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
            <p className="animate-fade-up font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {t.hero.brand}
            </p>
            <div className="animate-draw-line mt-5 h-px w-24 bg-foam" />
            <h1 className="animate-fade-up-delay-1 mt-6 max-w-2xl font-display text-2xl leading-snug text-white/95 sm:text-3xl md:text-4xl">
              {t.hero.headline}
            </h1>
            <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.hero.support}
            </p>
            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
              <Button
                render={<a href="#consult" />}
                className="h-11 bg-jade px-5 text-accent-foreground hover:bg-jade/90"
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                render={<a href="#services" />}
                variant="outline"
                className="h-11 border-white/35 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="animate-soft-drift relative overflow-hidden bg-[linear-gradient(135deg,#f3f6f8_0%,#e8f0f2_45%,#dce8e6_100%)] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-medium tracking-[0.18em] text-jade uppercase">
              {t.services.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              {t.services.title}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
              {t.services.support}
            </p>

            <div className="mt-14 divide-y divide-border/80 border-y border-border/80">
              {t.services.items.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] md:gap-10"
                >
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-ink py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-foam uppercase">
                {t.process.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                {t.process.title}
              </h2>
              <p className="mt-4 max-w-md text-white/70 sm:text-lg">
                {t.process.support}
              </p>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/consult.jpg"
                  alt={t.process.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <ol className="space-y-8">
              {t.process.steps.map((step) => (
                <li key={step.number} className="border-t border-white/15 pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm tracking-[0.2em] text-foam">
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl">{step.title}</h3>
                  </div>
                  <p className="mt-3 max-w-xl pl-12 text-white/70">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="consult"
          className="relative overflow-hidden bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_50%,#dce8e6_100%)] py-20 sm:py-28"
        >
          <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-jade/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-jade uppercase">
                {t.consult.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.consult.title}
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground sm:text-lg">
                {t.consult.support}
              </p>
              <dl className="mt-10 space-y-4 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-ink">{t.consult.emailLabel}</dt>
                  <dd>
                    <a
                      href="mailto:hello@meridiancredit.example"
                      className="transition-colors hover:text-jade"
                    >
                      hello@meridiancredit.example
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">{t.consult.phoneLabel}</dt>
                  <dd>
                    <a
                      href="tel:+359888014288"
                      className="transition-colors hover:text-jade"
                    >
                      0888 014 288
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">{t.consult.hoursLabel}</dt>
                  <dd>{t.consult.hoursValue}</dd>
                </div>
              </dl>
            </div>

            <ConsultForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-base text-ink">{t.hero.brand}</p>
          <p>{t.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
