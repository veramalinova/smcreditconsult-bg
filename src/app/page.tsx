import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Score recovery",
    body: "We map every tradeline, dispute what is inaccurate, and build a month-by-month plan to raise your score with durable habits—not shortcuts.",
  },
  {
    title: "Debt strategy",
    body: "From revolving balances to collection accounts, we prioritize what to pay, negotiate, or restructure so interest stops eating your progress.",
  },
  {
    title: "Lending readiness",
    body: "Preparing for a mortgage, auto loan, or refinance? We align credit, utilization, and documentation before you talk to a lender.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery call",
    body: "A 30-minute session to understand your goals, timeline, and current credit picture.",
  },
  {
    number: "02",
    title: "Credit blueprint",
    body: "You receive a written plan with priorities, expected timelines, and the actions we will take together.",
  },
  {
    number: "03",
    title: "Guided execution",
    body: "We stay with you through disputes, negotiations, and follow-ups until the next milestone is clear.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-white transition-opacity hover:opacity-90"
          >
            Meridian Credit
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/85 md:flex">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#process" className="transition-colors hover:text-white">
              Process
            </a>
            <a href="#consult" className="transition-colors hover:text-white">
              Consult
            </a>
          </nav>
          <Button
            render={<a href="#consult" />}
            className="h-10 bg-white/95 px-4 text-ink hover:bg-white"
          >
            Book a call
          </Button>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Financial documents and calculator on a desk, suggesting careful credit review"
            fill
            priority
            className="animate-ken-burns object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,122,110,0.28),transparent_55%)]" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
            <p className="animate-fade-up font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Meridian Credit
            </p>
            <div className="animate-draw-line mt-5 h-px w-24 bg-foam" />
            <h1 className="animate-fade-up-delay-1 mt-6 max-w-2xl font-display text-2xl leading-snug text-white/95 sm:text-3xl md:text-4xl">
              Clear advice for complex credit.
            </h1>
            <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Independent consulting for score recovery, debt strategy, and
              lending readiness—so you can move forward with a plan that holds.
            </p>
            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
              <Button
                render={<a href="#consult" />}
                className="h-11 bg-jade px-5 text-accent-foreground hover:bg-jade/90"
              >
                Request a consultation
              </Button>
              <Button
                render={<a href="#services" />}
                variant="outline"
                className="h-11 border-white/35 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
              >
                See how we help
              </Button>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="animate-soft-drift relative overflow-hidden bg-[linear-gradient(135deg,#f3f6f8_0%,#e8f0f2_45%,#dce8e6_100%)] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-medium tracking-[0.18em] text-jade uppercase">
              Services
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              Practical credit work, without the noise.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
              One focused engagement at a time. We explain what matters, what
              can wait, and what to do next.
            </p>

            <div className="mt-14 divide-y divide-border/80 border-y border-border/80">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] md:gap-10"
                >
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-ink py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-foam uppercase">
                Process
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                A calm path from confusion to a written plan.
              </h2>
              <p className="mt-4 max-w-md text-white/70 sm:text-lg">
                No hard sell. You leave the first call knowing whether Meridian
                is the right fit—and what the next thirty days should look like.
              </p>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/consult.jpg"
                  alt="Hands reviewing paperwork during a consulting session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <ol className="space-y-8">
              {steps.map((step) => (
                <li key={step.number} className="border-t border-white/15 pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm tracking-[0.2em] text-foam">
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl">{step.title}</h3>
                  </div>
                  <p className="mt-3 max-w-xl pl-12 text-white/70">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="consult"
          className="relative overflow-hidden bg-[linear-gradient(160deg,#e8f0f2_0%,#f3f6f8_50%,#dce8e6_100%)] py-20 sm:py-28"
        >
          <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-jade/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-jade uppercase">
                Consult
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
                Tell us where you are. We&apos;ll help chart the next move.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground sm:text-lg">
                Share a short note about your situation. We reply within one
                business day with available times—no automated spam, no pressure
                to commit.
              </p>
              <dl className="mt-10 space-y-4 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-ink">Email</dt>
                  <dd>
                    <a
                      href="mailto:hello@meridiancredit.example"
                      className="transition-colors hover:text-jade"
                    >
                      hello@meridiancredit.example
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Phone</dt>
                  <dd>
                    <a
                      href="tel:+15550142880"
                      className="transition-colors hover:text-jade"
                    >
                      (555) 014-2880
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Hours</dt>
                  <dd>Monday–Friday, 9am–5pm ET</dd>
                </div>
              </dl>
            </div>

            <ConsultForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-base text-ink">Meridian Credit</p>
          <p>
            Independent credit consulting. Not a lender, credit repair
            organization, or law firm.
          </p>
        </div>
      </footer>
    </div>
  );
}
