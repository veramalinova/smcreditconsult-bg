import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/contact";
import {
  CONSULT_LIMITS,
  HONEYPOT_FIELD,
  MIN_FILL_TIME_MS,
  isValidEmail,
  isValidPhone,
} from "@/lib/consult-validation";

type ConsultPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  goal?: unknown;
  privacyAccepted?: unknown;
  elapsedMs?: unknown;
  [HONEYPOT_FIELD]?: unknown;
};

/* ------------------------------------------------------------------ */
/* Rate limiting: max RATE_MAX requests per IP per RATE_WINDOW_MS.     */
/* In-memory, so it is per server instance and resets on restart.      */
/* That is enough to stop simple floods; it is not a hard guarantee.   */
/* ------------------------------------------------------------------ */
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // Keep memory bounded: drop stale entries now and then.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_MAX;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 },
    );
  }

  let body: ConsultPayload;
  try {
    body = (await request.json()) as ConsultPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  // Bot traps: the hidden field is filled in, or the form was sent too fast.
  // Answer "ok" so the bot does not learn it was caught, but send nothing.
  const elapsed = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;
  if (text(body[HONEYPOT_FIELD]) !== "" || elapsed < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  // Collapse line breaks in single-line fields (name goes into the subject).
  const name = text(body.name).replace(/\s+/g, " ");
  const email = text(body.email);
  const phone = text(body.phone).replace(/\s+/g, " ");
  const goal = text(body.goal);
  const privacyAccepted = body.privacyAccepted === true;

  if (!name || !email || !goal) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 },
    );
  }

  if (
    name.length > CONSULT_LIMITS.name ||
    phone.length > CONSULT_LIMITS.phone ||
    goal.length > CONSULT_LIMITS.goal
  ) {
    return NextResponse.json(
      { ok: false, error: "too_long" },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "invalid_phone" },
      { status: 400 },
    );
  }

  if (!privacyAccepted) {
    return NextResponse.json(
      { ok: false, error: "privacy_required" },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER?.trim() || CONTACT_EMAIL;
  // App passwords are often copied with spaces — Gmail accepts them without.
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "") ?? "";

  if (!gmailPass) {
    console.error("Consult email not configured: missing GMAIL_APP_PASSWORD");
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"СМ Кредит Консулт" <${gmailUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Нова заявка за консултация — ${name}`,
      text: [
        `Име: ${name}`,
        `Имейл: ${email}`,
        `Телефон: ${phone || "—"}`,
        "",
        "Заявка:",
        goal,
      ].join("\n"),
      html: `
        <h2>Нова заявка за консултация</h2>
        <p><strong>Име:</strong> ${escapeHtml(name)}</p>
        <p><strong>Имейл:</strong> ${escapeHtml(email)}</p>
        <p><strong>Телефон:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Заявка:</strong></p>
        <p>${escapeHtml(goal).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const err = error as { code?: string; responseCode?: number; message?: string };
    console.error("Consult email error", {
      code: err.code,
      responseCode: err.responseCode,
      message: err.message,
      user: gmailUser,
    });
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
