import { features, type Feature } from "@/data/site";

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  const paths: Record<Feature["icon"], React.ReactNode> = {
    launch: (
      <path
        d="M12 3c3.5 1.8 5 5.2 5 9l2.5 3.5-3 .5-1.5 3-3-1.5-3 1.5-1.5-3-3-.5L7 12c0-3.8 1.5-7.2 5-9Zm0 6a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    budget: (
      <path
        d="M4 19V5m0 14h16M8 15l3-4 3 2 4-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    creative: (
      <path
        d="M5 5h9v9H5V5Zm9 3h5v11H8v-5m3.5-6.5-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    rules: (
      <path
        d="M6 7h12M6 12h12M6 17h7M17 15.5l1.5 1.5 3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    reporting: (
      <path
        d="M5 20V10m5 10V4m5 16v-7m5 7V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    ),
    audience: (
      <path
        d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 1a2.5 2.5 0 1 0 0-5M3.5 19c.6-2.9 2.9-4.5 5.5-4.5s4.9 1.6 5.5 4.5m1-4.3c2 .3 3.6 1.6 4.2 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Automation that actually moves your numbers
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything a performance team needs to run paid social at scale —
            without the 2am budget checks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border bg-background p-7"
            >
              <div className="inline-flex rounded-xl bg-primary/15 p-3 text-primary-light">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
