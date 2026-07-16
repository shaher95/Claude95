"use client";

import { skills, metrics, caseGroups } from "@/data/portfolio";

function SkillCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group p-[26px] rounded-2xl bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(45,212,191,0.4)] hover:bg-[rgba(45,212,191,0.05)]">
      <div className="w-[46px] h-[46px] rounded-xl grid place-items-center bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.25)] text-[22px]">
        {icon}
      </div>
      <h3 className="mt-5 font-heading font-semibold text-[19px] text-white">
        {title}
      </h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-[#93a3b3]">
        {desc}
      </p>
    </div>
  );
}

function MetricCard({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="p-[30px_26px] rounded-2xl bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(212,175,55,0.4)]">
      <div className="font-heading font-extrabold text-[clamp(38px,4.4vw,52px)] leading-none gradient-text">
        {value}
      </div>
      <div className="mt-3.5 font-heading font-semibold text-[15px] text-[#e6edf3]">
        {label}
      </div>
      <div className="mt-1.5 text-[13px] leading-relaxed text-subtle">
        {detail}
      </div>
    </div>
  );
}

function StatPill({ v, l }: { v: string; l: string }) {
  return (
    <div className="flex flex-col gap-[3px] px-[18px] py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)]">
      <span className="font-heading font-bold text-[20px] text-white">
        {v}
      </span>
      <span className="font-mono text-[11px] tracking-[0.04em] uppercase text-subtle">
        {l}
      </span>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] relative">
      {/* Background gradients */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(45,212,191,0.10), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(212,175,55,0.06), transparent 55%)",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-[1100px] mx-auto pt-[88px] px-8 pb-16 relative">
          <div className="animate-float-up inline-flex items-center gap-2.5 px-4 py-[7px] border border-[rgba(45,212,191,0.35)] rounded-full bg-[rgba(45,212,191,0.06)] font-mono text-xs tracking-[0.14em] uppercase text-accent">
            <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_10px_#2dd4bf]" />
            Ahmed Shaher · Portfolio 2026
          </div>

          <h1 className="animate-float-up-delay-1 mt-7 font-heading font-extrabold text-[clamp(34px,5.4vw,62px)] leading-[1.04] tracking-tight max-w-[15ch]">
            Performance Marketing{" "}
            <span className="animate-shimmer">Expert.</span>
          </h1>

          <p className="animate-float-up-delay-2 mt-[22px] font-mono text-[clamp(13px,1.5vw,16px)] leading-[1.7] text-muted max-w-[60ch]">
            E-commerce &amp; B2B Growth Strategist&nbsp;&nbsp;·&nbsp;&nbsp;Mobile
            App Marketing&nbsp;&nbsp;·&nbsp;&nbsp;Digital Marketing Leader
          </p>
        </header>

        {/* Summary */}
        <section className="max-w-[1100px] mx-auto px-8 pb-[72px]">
          <div className="flex gap-5 items-start border-t border-[rgba(255,255,255,0.08)] pt-10">
            <span className="flex-none mt-1.5 w-10 h-[3px] rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
            <p className="text-[clamp(17px,2.1vw,23px)] leading-relaxed text-[#cdd8e3] max-w-[68ch]">
              Over <strong className="text-white">6+ years</strong> scaling
              brands across E-commerce, FMCG, Real Estate, Food &amp;
              Beverages, Digital Agencies, and B2B Marketing. I build
              full-funnel acquisition engines that{" "}
              <strong className="text-white">reduce cost per acquisition</strong>
              , lift customer lifetime value, and drive qualified B2B demand.
              Every decision is grounded in data — from campaign structure to
              retention, backed by rigorous analytics.
            </p>
          </div>
        </section>

        {/* What I Bring */}
        <section className="max-w-[1100px] mx-auto px-8 pb-20">
          <div className="flex items-baseline gap-4 mb-9">
            <span className="font-mono text-[13px] text-accent-secondary">
              01
            </span>
            <h2 className="font-heading font-bold text-[clamp(24px,3.4vw,38px)] tracking-tight">
              What I Bring to the Table
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {skills.map((s) => (
              <SkillCard key={s.title} {...s} />
            ))}
          </div>
        </section>

        {/* Automation */}
        <section className="max-w-[1100px] mx-auto px-8 pb-20">
          <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-surface p-[clamp(32px,5vw,52px)] flex flex-wrap items-center gap-10 justify-between">
            <div className="flex-[1_1_380px]">
              <span className="font-mono text-[13px] text-accent-secondary">
                02 / AUTOMATION
              </span>
              <h2 className="mt-3.5 font-heading font-bold text-[clamp(24px,3.4vw,36px)] tracking-tight leading-[1.1]">
                Marketing &amp; Ops Automation
              </h2>
              <p className="mt-4 text-[clamp(15px,1.9vw,18px)] leading-relaxed text-[#cdd8e3] max-w-[52ch]">
                I design and ship end-to-end automation flows that connect ad
                platforms, CRMs, and data tools — routing leads, syncing events,
                and eliminating manual work. Expert in building production
                workflows with{" "}
                <strong className="text-white">Make</strong> and{" "}
                <strong className="text-white">n8n</strong>.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-[0_1_auto]">
              <div className="flex flex-col gap-[3px] px-[18px] py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)]">
                <span className="font-heading font-bold text-[18px] text-white">
                  Make
                </span>
                <span className="font-mono text-[11px] tracking-[0.04em] uppercase text-subtle">
                  Visual scenarios
                </span>
              </div>
              <div className="flex flex-col gap-[3px] px-[18px] py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)]">
                <span className="font-heading font-bold text-[18px] text-white">
                  n8n
                </span>
                <span className="font-mono text-[11px] tracking-[0.04em] uppercase text-subtle">
                  Self-hosted flows
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Success */}
        <section className="bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent border-t border-b border-[rgba(255,255,255,0.06)]">
          <div className="max-w-[1100px] mx-auto py-20 px-8">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono text-[13px] text-accent-secondary">
                03
              </span>
              <h2 className="font-heading font-bold text-[clamp(24px,3.4vw,38px)] tracking-tight">
                Proven Success
              </h2>
            </div>
            <p className="font-mono text-[13px] text-[#7d8fa0] mb-10 ml-[34px]">
              // real numbers from live campaigns
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[18px]">
              {metrics.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
            </div>

            {/* Campaign Evidence */}
            <div className="mt-[72px] pt-12 border-t border-[rgba(255,255,255,0.08)]">
              <h3 className="font-heading font-bold text-[clamp(20px,2.6vw,28px)] tracking-tight">
                Campaign Evidence
              </h3>
              <p className="font-mono text-[13px] text-[#7d8fa0] mt-2">
                // pulled from live dashboards — organized by account &amp;
                industry
              </p>

              <div className="flex flex-col gap-14 mt-11">
                {caseGroups.map((g) => (
                  <div key={g.account}>
                    <div className="flex flex-wrap items-baseline gap-3.5 mb-1">
                      <h4 className="font-heading font-bold text-[clamp(19px,2.3vw,25px)] text-white">
                        {g.account}
                      </h4>
                      <span className="font-mono text-xs tracking-[0.08em] uppercase px-[11px] py-1 rounded-full border border-[rgba(45,212,191,0.35)] bg-[rgba(45,212,191,0.06)] text-accent">
                        {g.industry}
                      </span>
                      <span className="font-mono text-xs text-subtle">
                        {g.meta}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2.5 mt-[18px] mb-6">
                      {g.stats.map((st) => (
                        <StatPill key={st.l} {...st} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1100px] mx-auto py-24 px-8">
          <div
            className="rounded-3xl p-[clamp(36px,6vw,68px)] border border-[rgba(45,212,191,0.22)] relative overflow-hidden"
            style={{
              background:
                "radial-gradient(700px 300px at 100% 0%, rgba(212,175,55,0.10), transparent 60%), radial-gradient(600px 300px at 0% 100%, rgba(45,212,191,0.10), transparent 60%), rgba(255,255,255,0.02)",
            }}
          >
            <span className="font-mono text-[13px] text-accent-secondary">
              04 / GET IN TOUCH
            </span>
            <h2 className="mt-4 font-heading font-extrabold text-[clamp(28px,4.2vw,48px)] leading-[1.1] tracking-tight max-w-[16ch]">
              Let&apos;s connect and explore new opportunities!
            </h2>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <a
                href="mailto:ahmedshaher.15895@gmail.com"
                className="inline-flex items-center gap-2.5 px-[26px] py-[15px] rounded-xl bg-accent text-[#06231f] font-heading font-semibold text-[15px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(45,212,191,0.4)] shadow-[0_8px_30px_rgba(45,212,191,0.25)]"
              >
                ✉ ahmedshaher.15895@gmail.com
              </a>
              <a
                href="tel:01096700152"
                className="inline-flex items-center gap-2.5 px-[26px] py-[15px] rounded-xl border border-[rgba(255,255,255,0.16)] text-[#e6edf3] font-heading font-semibold text-[15px] transition-all duration-200 hover:border-[rgba(45,212,191,0.5)] hover:bg-[rgba(45,212,191,0.06)]"
              >
                ☎ 01096700152
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-shaher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-[26px] py-[15px] rounded-xl border border-[rgba(255,255,255,0.16)] text-[#e6edf3] font-heading font-semibold text-[15px] transition-all duration-200 hover:border-[rgba(45,212,191,0.5)] hover:bg-[rgba(45,212,191,0.06)]"
              >
                in LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
