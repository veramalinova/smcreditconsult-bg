"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ConsultForm() {
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
        className="rounded-xl border border-jade/30 bg-white/80 px-6 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl text-ink">Request received</p>
        <p className="mt-3 text-muted-foreground">
          We&apos;ll review your note and reply within one business day with
          next steps and available times.
        </p>
        <Button
          type="button"
          className="mt-6 h-11 px-5"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-border/80 bg-white/80 p-6 shadow-[0_20px_50px_-40px_rgba(6,32,41,0.45)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Jordan Blake"
            className="h-11 bg-white"
            aria-invalid={status === "error" || undefined}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@email.com"
            className="h-11 bg-white"
            aria-invalid={status === "error" || undefined}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
          className="h-11 bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal">What do you need help with?</Label>
        <Textarea
          id="goal"
          name="goal"
          required
          rows={4}
          placeholder="Score repair, debt strategy, mortgage readiness, or something else…"
          className="min-h-28 resize-y bg-white text-base md:text-sm"
          aria-invalid={status === "error" || undefined}
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Please fill in your name, email, and consulting goal so we can prepare
          for the call.
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 w-full bg-jade text-accent-foreground hover:bg-jade/90 sm:w-auto sm:px-6"
      >
        {status === "submitting" ? "Sending…" : "Request a consultation"}
      </Button>
    </form>
  );
}
