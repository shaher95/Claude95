"use client";

import { useState } from "react";

export default function DemoCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="demo" className="glow scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Put your ads on <span className="text-gradient">autopilot</span> this week
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Start a free trial or book a 20-minute demo — we&apos;ll connect your
          accounts and build your first automation live on the call.
        </p>

        {submitted ? (
          <div
            className="mx-auto mt-10 max-w-md rounded-2xl border border-accent/40 bg-accent/10 p-8"
            role="status"
          >
            <p className="text-lg font-semibold text-accent">You&apos;re on the list 🎉</p>
            <p className="mt-2 text-sm text-muted">
              Our team will reach out within one business day to set up your
              trial and demo.
            </p>
          </div>
        ) : (
          <form
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="work-email" className="sr-only">
              Work email
            </label>
            <input
              id="work-email"
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm placeholder:text-muted focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              Get started free
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-muted">
          14-day trial · Full feature access · Cancel anytime
        </p>
      </div>
    </section>
  );
}
