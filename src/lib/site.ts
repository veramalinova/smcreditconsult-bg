/** Public site origin used for canonical, sitemap, Open Graph. */
export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    "https://smcreditconsult.bg";
  return raw.replace(/\/$/, "");
}

export const SITE_NAME_BG = "СМ Кредит Консулт";
export const SITE_NAME_EN = "SM Credit Consult";
