import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/contact";

type ConsultPayload = {
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
};

export async function POST(request: Request) {
  let body: ConsultPayload;

  try {
    body = (await request.json()) as ConsultPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const goal = String(body.goal ?? "").trim();

  if (!name || !email || !goal) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
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
    .replaceAll('"', "&quot;");
}
