/**
 * Shared rules for the consultation form, used by both the form (browser)
 * and /api/consult (server). The server check is the one that matters;
 * the browser check only gives faster feedback.
 */

export const CONSULT_LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  goal: 2000,
} as const;

/** Name of the hidden "honeypot" field. Real visitors never see or fill it. */
export const HONEYPOT_FIELD = "company_website";

/** Submissions faster than this after the form appeared are treated as bots. */
export const MIN_FILL_TIME_MS = 3000;

// Simple, permissive check: something@something.tld, no spaces.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(email: string) {
  return email.length <= CONSULT_LIMITS.email && EMAIL_RE.test(email);
}

/** Digits, spaces and + ( ) - / . only. Empty is allowed (phone is optional). */
export function isValidPhone(phone: string) {
  return phone === "" || /^[0-9+()\-\s/.]{5,30}$/.test(phone);
}
