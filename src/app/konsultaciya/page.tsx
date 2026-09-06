"use client";

import { ConsultForm } from "@/components/consult-form";
import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";

export default function ConsultPage() {
  const { t } = useLanguage();
  usePageMeta(t.consultPage.metaTitle, t.consultPage.metaDescription);

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_55%,#dce8e6_100%)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
                {t.consultPage.title}
              </h1>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                {t.consultPage.support}
              </p>
              <dl className="mt-10 space-y-4 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-ink">
                    {t.consultPage.emailLabel}
                  </dt>
                  <dd>
                    <a
                      href="mailto:smcreditconsult@gmail.com"
                      className="transition-colors hover:text-jade"
                    >
                      smcreditconsult@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">
                    {t.consultPage.phoneLabel}
                  </dt>
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
                  <dt className="font-medium text-ink">
                    {t.consultPage.hoursLabel}
                  </dt>
                  <dd>{t.consultPage.hoursValue}</dd>
                </div>
              </dl>
            </div>
            <ConsultForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
