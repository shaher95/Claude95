import { trustedBy } from "@/data/site";

export default function Hero() {
  return (
    <section className="glow relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Now automating $40M+ in monthly ad spend
          </p>

          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight sm:text-6xl">
            Your social ads, on autopilot across{" "}
            <span className="text-gradient">Meta, TikTok & Snapchat</span>
          </h1>

          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-muted [animation-delay:100ms]">
            AdOrbit launches your campaigns on all three platforms at once, then
            rebalances budgets, rotates creatives, and kills underperformers
            automatically — so your team scales results, not spreadsheets.
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:200ms]">
            <a
              href="#demo"
              className="w-full rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark sm:w-auto"
            >
              Start 14-day free trial
            </a>
            <a
              href="#how-it-works"
              className="w-full rounded-xl border border-border bg-surface px-8 py-3.5 text-base font-semibold transition hover:border-muted sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <p className="mt-4 text-xs text-muted">
            No credit card required · Connect your ad accounts in 2 minutes
          </p>
        </div>

        <div className="mt-16 overflow-hidden" aria-label="Trusted by">
          <p className="mb-6 text-center text-xs font-semibold tracking-widest text-muted uppercase">
            Trusted by growth teams and agencies
          </p>
          <div className="relative">
            <div className="animate-marquee flex w-max gap-12">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-lg font-semibold whitespace-nowrap text-muted/60"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
