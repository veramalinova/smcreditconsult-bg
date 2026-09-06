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

  // Kept as optional server path. Prefer client-side FormSubmit in the form,
  // because FormSubmit often blocks datacenter IPs with Cloudflare.
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "—",
        message: goal,
        _subject: `Нова заявка за консултация — ${name}`,
        _template: "table",
        _captcha: "false",
        _replyto: email,
      }),
    },
  );

  const contentType = response.headers.get("content-type") ?? "";
  if (!response.ok || !contentType.includes("application/json")) {
    const detail = await response.text().catch(() => "");
    console.error("FormSubmit error", response.status, detail.slice(0, 300));
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
