"use client";

import { ConsultForm } from "@/components/consult-form";
import { useLanguage } from "@/components/language-provider";
import { PhoneList } from "@/components/phone-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { usePageMeta } from "@/components/use-page-meta";
import { CONTACT_EMAIL } from "@/lib/contact";

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
              <div className="mt-6 max-w-md border-l-2 border-jade/50 pl-4">
                <p className="font-display text-lg text-ink">
                  {t.freeWhy.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.freeWhy.body}
                </p>
              </div>
              <dl className="mt-10 space-y-4 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-ink">
                    {t.consultPage.emailLabel}
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="transition-colors hover:text-jade"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">
                    {t.consultPage.phoneLabel}
                  </dt>
                  <dd>
                    <PhoneList
                      className="mt-1"
                      itemClassName="block transition-colors hover:text-jade"
                    />
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
