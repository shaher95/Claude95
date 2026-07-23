import { steps, stats } from "@/data/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Live in an afternoon, not a quarter
          </h2>
          <p className="mt-4 text-lg text-muted">
            No migrations, no relaunches. AdOrbit layers on top of your existing
            ad accounts.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-sm font-bold text-primary-light">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <dl className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface p-8 sm:p-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="order-2 mt-2 block text-xs text-muted sm:text-sm">
                {stat.label}
              </dt>
              <dd className="text-gradient order-1 text-3xl font-bold sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
