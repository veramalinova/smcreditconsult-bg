"use client";

import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

function MortgageIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path
        d="M8 22.5 24 9l16 13.5V39a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M20 41V27h8v14"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function ConsumerIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <rect
        x="7"
        y="14"
        width="34"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M7 21h34" stroke="currentColor" strokeWidth="1.75" />
      <path d="M13 29h8" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function RefinanceIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path
        d="M14 18a12 12 0 0 1 20-2l2-4m0 0v6h-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 30a12 12 0 0 1-20 2l-2 4m0 0v-6h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const serviceIcons = {
  mortgage: MortgageIcon,
  consumer: ConsumerIcon,
  refinance: RefinanceIcon,
} as const;

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
            <a href="#about" className="transition-colors hover:text-white">
              {t.nav.about}
            </a>
            <a href="#useful" className="transition-colors hover:text-white">
              {t.nav.useful}
            </a>
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="md:hidden" />
            <a
              href="tel:+359888014288"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
              aria-label={t.nav.phoneAria}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path
                  d="M7.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 5.5 6.5a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
          <Image
            src="/hero.jpg"
            alt={t.hero.imageAlt}
            fill
            priority
            className="animate-ken-burns object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/65 to-ink/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,122,110,0.22),transparent_60%)]" />

          <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-28 text-center sm:px-8 sm:pb-28">
            <p className="animate-fade-up font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
              {t.hero.brand}
            </p>
            <div className="animate-draw-line mx-auto mt-5 h-px w-20 bg-foam" />
            <h1 className="animate-fade-up-delay-1 mt-6 font-display text-2xl leading-snug text-white sm:text-3xl md:text-4xl">
              {t.hero.headline}
            </h1>
            <p className="animate-fade-up-delay-2 mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.hero.support}
            </p>
            <div className="animate-fade-up-delay-3 mt-8">
              <Button
                nativeButton={false}
                render={<a href="#consult" />}
                className="h-12 bg-jade px-6 text-base text-accent-foreground hover:bg-jade/90"
              >
                {t.hero.cta}
              </Button>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="animate-soft-drift border-b border-border/70 bg-[linear-gradient(180deg,#f3f6f8_0%,#e8f0f2_100%)] py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3 md:gap-0">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[service.id];
              return (
                <article
                  key={service.id}
                  className={`flex flex-col items-center px-6 text-center md:px-10 ${
                    index > 0 ? "md:border-l md:border-border/80" : ""
                  }`}
                >
                  <div className="text-jade">
                    <Icon />
                  </div>
                  <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="process" className="bg-ink py-20 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                {t.process.title}
              </h2>
              <p className="mt-4 text-white/70 sm:text-lg">{t.process.support}</p>
            </div>

            <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {t.process.steps.map((step, index) => (
                <li key={step.number} className="relative text-center lg:px-3">
                  {index < t.process.steps.length - 1 ? (
                    <span
                      className="pointer-events-none absolute top-5 left-[58%] hidden h-px w-[84%] bg-white/20 lg:block"
                      aria-hidden
                    />
                  ) : null}
                  <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-foam/50 font-display text-foam">
                    {step.number}
                  </div>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="about"
          className="bg-[linear-gradient(135deg,#f3f6f8_0%,#e8f0f2_50%,#dce8e6_100%)] py-20 sm:py-24"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/consult.jpg"
                alt={t.about.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.about.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.about.body}
              </p>
            </div>
          </div>
        </section>

        <section id="useful" className="border-y border-border/70 bg-mist py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
                {t.useful.title}
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                {t.useful.support}
              </p>
            </div>
            <div className="mt-12 divide-y divide-border/80 border-y border-border/80">
              {t.useful.items.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-2 py-7 md:grid-cols-[0.35fr_0.65fr] md:gap-10"
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

        <section className="bg-jade py-16 text-center text-accent-foreground sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              {t.ctaBand.title}
            </h2>
            <Button
              nativeButton={false}
              render={<a href="#consult" />}
              className="mt-8 h-12 border border-white/30 bg-white px-6 text-base text-ink hover:bg-white/90"
            >
              {t.ctaBand.button}
            </Button>
          </div>
        </section>

        <section
          id="consult"
          className="bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-20 sm:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
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
                      href="mailto:hello@smconsult.example"
                      className="transition-colors hover:text-jade"
                    >
                      hello@smconsult.example
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

      <footer className="border-t border-border/70 bg-ink text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-base text-white">{t.hero.brand}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="#consult" className="transition-colors hover:text-white">
              {t.footer.contacts}
            </a>
            <span aria-hidden>/</span>
            <a href="#useful" className="transition-colors hover:text-white">
              {t.footer.legal}
            </a>
          </div>
          <p className="max-w-md sm:text-right">{t.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
