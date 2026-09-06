"use client";

import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { useLanguage } from "@/components/language-provider";
import { serviceIcons } from "@/components/service-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";
import { serviceOrder } from "@/lib/i18n";

export default function ServicesPage() {
  const { t } = useLanguage();
  usePageMeta(t.servicesOverview.metaTitle, t.servicesOverview.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {t.servicesOverview.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.servicesOverview.support}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-3">
            {serviceOrder.map((id) => {
              const service = t.services[id];
              const Icon = serviceIcons[id];
              return (
                <article
                  key={id}
                  className="border border-border/80 bg-white/70 p-7"
                >
                  <div className="text-jade">
                    <Icon />
                  </div>
                  <h2 className="mt-5 font-display text-2xl text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex text-sm font-medium text-jade transition-colors hover:text-ink"
                  >
                    {service.title} →
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
