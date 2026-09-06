"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ConsultForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const goal = String(data.get("goal") ?? "").trim();

    if (!name || !email || !goal) {
      setStatus("error");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        className="border border-jade/30 bg-white/80 px-6 py-10 text-center"
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
      className="space-y-5 border border-border/80 bg-white/80 p-6 sm:p-8"
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
            aria-invalid={status === "error" || undefined}
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
            aria-invalid={status === "error" || undefined}
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
          aria-invalid={status === "error" || undefined}
        />
      </div>

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
