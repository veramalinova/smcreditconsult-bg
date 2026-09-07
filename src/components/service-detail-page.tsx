"use client";

import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { serviceIcons } from "@/components/service-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useLanguage } from "@/components/language-provider";
import { usePageMeta } from "@/components/use-page-meta";
import type { ServiceId } from "@/lib/i18n";

export function ServiceDetailPage({ serviceId }: { serviceId: ServiceId }) {
  const { t } = useLanguage();
  const service = t.services[serviceId];
  const Icon = serviceIcons[serviceId];
  usePageMeta(service.metaTitle, service.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-medium tracking-[0.18em] text-jade uppercase">
              {service.eyebrow}
            </p>
            <div className="mt-5 text-jade">
              <Icon />
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {service.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
            <Link
              href="/konsultaciya"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-jade px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-jade/90"
            >
              {service.cta}
            </Link>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-ink">{service.title}</h2>
              <ul className="mt-8 space-y-4">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="border-t border-border/80 pt-4 text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">
                {service.forWhomTitle}
              </h2>
              <ul className="mt-8 space-y-4">
                {service.forWhom.map((item) => (
                  <li
                    key={item}
                    className="border-t border-border/80 pt-4 text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
