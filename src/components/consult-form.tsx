"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error"
  | "invalid"
  | "privacy";

export function ConsultForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const goal = String(data.get("goal") ?? "").trim();

    if (!name || !email || !goal) {
      setStatus("invalid");
      return;
    }

    if (!privacyAccepted) {
      setStatus("privacy");
      return;
    }

    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          goal,
          privacyAccepted: true,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setPrivacyAccepted(false);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-md border border-jade/30 bg-white/80 px-6 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl text-ink">{t.form.successTitle}</p>
        <p className="mt-3 text-muted-foreground">{t.form.successBody}</p>
        <Button
          type="button"
          className="mt-6 h-11 px-5"
          onClick={() => setStatus("idle")}
        >
          {t.form.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-md border border-border/80 bg-white/80 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t.form.name}</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder={t.form.namePlaceholder}
            className="h-11 bg-white"
            aria-invalid={status === "invalid" || undefined}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t.form.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={t.form.emailPlaceholder}
            className="h-11 bg-white"
            aria-invalid={status === "invalid" || undefined}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t.form.phone}</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={t.form.phonePlaceholder}
          className="h-11 bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal">{t.form.goal}</Label>
        <Textarea
          id="goal"
          name="goal"
          required
          rows={4}
          placeholder={t.form.goalPlaceholder}
          className="min-h-28 resize-y bg-white text-base md:text-sm"
          aria-invalid={status === "invalid" || undefined}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={privacyAccepted}
          onChange={(event) => {
            setPrivacyAccepted(event.target.checked);
            if (status === "privacy") setStatus("idle");
          }}
          required
          className="mt-1 size-4 shrink-0 accent-jade"
          aria-invalid={status === "privacy" || undefined}
        />
        <label htmlFor="privacy" className="text-sm leading-relaxed text-muted-foreground">
          {t.form.privacyAckBefore}
          <Link
            href="/politika-za-poveritelnost"
            className="font-medium text-ink underline decoration-jade/50 underline-offset-2 transition-colors hover:text-jade"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.form.privacyAckLink}
          </Link>
        </label>
      </div>

      {status === "invalid" ? (
        <p className="text-sm text-destructive" role="alert">
          {t.form.invalid}
        </p>
      ) : null}

      {status === "privacy" ? (
        <p className="text-sm text-destructive" role="alert">
          {t.form.privacyRequired}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {t.form.error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 w-full bg-jade text-accent-foreground hover:bg-jade/90 sm:w-auto sm:px-6"
      >
        {status === "submitting" ? t.form.submitting : t.form.submit}
      </Button>
    </form>
  );
}
