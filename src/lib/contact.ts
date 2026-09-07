import type { Locale } from "@/lib/i18n";

export const CONTACT_EMAIL = "smcreditconsult@gmail.com";

export type ContactPhone = {
  tel: string;
  display: string;
};

/** Bulgarian contact numbers. */
export const CONTACT_PHONES_BG: readonly ContactPhone[] = [
  { tel: "+359889501062", display: "+359 889 501 062" },
  { tel: "+359899924208", display: "+359 899 924 208" },
] as const;

/** English / international contact number. */
export const CONTACT_PHONES_EN: readonly ContactPhone[] = [
  { tel: "+359897059038", display: "+359 897 059 038" },
] as const;

export function getContactPhones(locale: Locale = "bg"): readonly ContactPhone[] {
  return locale === "en" ? CONTACT_PHONES_EN : CONTACT_PHONES_BG;
}

/** Primary number for click-to-call (header icon, sticky bar). */
export function getPrimaryContactPhone(locale: Locale = "bg"): ContactPhone {
  return getContactPhones(locale)[0];
}

export const CONTACT_PHONE_BG = CONTACT_PHONES_BG[0];
export const CONTACT_PHONE_EN = CONTACT_PHONES_EN[0];
export const CONTACT_PHONE_TEL = CONTACT_PHONE_BG.tel;
export const CONTACT_PHONE_DISPLAY = CONTACT_PHONE_BG.display;
