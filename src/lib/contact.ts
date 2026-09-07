import type { Locale } from "@/lib/i18n";

export const CONTACT_EMAIL = "smcreditconsult@gmail.com";

/** Bulgarian default contact number. */
export const CONTACT_PHONE_BG = {
  tel: "+359889501062",
  display: "+359 889 501 062",
} as const;

/** English / international contact number. */
export const CONTACT_PHONE_EN = {
  tel: "+359877059038",
  display: "+359 877 059 038",
} as const;

export function getContactPhone(locale: Locale = "bg") {
  return locale === "en" ? CONTACT_PHONE_EN : CONTACT_PHONE_BG;
}

/** @deprecated Prefer getContactPhone(locale) — kept for legal BG default. */
export const CONTACT_PHONE_TEL = CONTACT_PHONE_BG.tel;
export const CONTACT_PHONE_DISPLAY = CONTACT_PHONE_BG.display;
