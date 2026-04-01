"use client";

export default function ProductBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Clinically Tested",
      titleAr: "مختبر سريرياً",
      description: "Dermatologically tested formula proven safe for daily use on all skin types.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Gentle & Soap-Free",
      titleAr: "لطيف وخالي من الصابون",
      description: "Non-drying formula that maintains skin's natural moisture barrier while deep cleansing.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: "Herbal Ingredients",
      titleAr: "مكونات عشبية",
      description: "Powered by Neem's antibacterial and Turmeric's anti-inflammatory properties.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "SFDA Approved",
      titleAr: "معتمد من هيئة الغذاء والدواء",
      description: "Registered and approved by the Saudi Food & Drug Authority for safe consumer use.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Results",
      titleAr: "نتائج سريعة",
      description: "Visible reduction in pimples and excess oil within 2 weeks of regular use.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Eco-Friendly",
      titleAr: "صديق للبيئة",
      description: "Cruelty-free, sustainably sourced ingredients. Recyclable packaging.",
    },
  ];

  return (
    <section className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-foreground">Why Choose This Product?</h2>
        <p className="text-sm text-muted mt-1">Trusted by over 1 million customers in Saudi Arabia</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="group bg-surface rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
              {benefit.icon}
            </div>
            <h3 className="text-sm font-semibold text-foreground">{benefit.title}</h3>
            <p className="text-[11px] text-muted mt-0.5 font-medium" dir="rtl">
              {benefit.titleAr}
            </p>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
