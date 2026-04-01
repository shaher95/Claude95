"use client";

import { useState } from "react";
import { Product } from "@/types/product";

const tabs = ["Description", "Ingredients", "How to Use", "Warnings"] as const;
type Tab = (typeof tabs)[number];

export default function ProductTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<Tab>("Description");

  const content: Record<Tab, string> = {
    Description: product.description,
    Ingredients: product.ingredients,
    "How to Use": product.howToUse,
    Warnings: product.warnings,
  };

  const icons: Record<Tab, React.ReactNode> = {
    Description: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    Ingredients: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    "How to Use": (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Warnings: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  };

  return (
    <section className="animate-fade-in-up">
      <div className="bg-surface rounded-2xl border border-border overflow-hidden">
        {/* Tab headers */}
        <div className="flex border-b border-border overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-primary tab-active bg-primary-light/30"
                  : "text-muted hover:text-foreground hover:bg-gray-50"
              }`}
            >
              {icons[tab]}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-6 lg:p-8">
          {activeTab === "Description" && (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-foreground/85">
                {content[activeTab]}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                {[
                  { label: "Skin Type", value: "Normal to Oily" },
                  { label: "Formula", value: "Soap-Free" },
                  { label: "Key Ingredient", value: "Neem & Turmeric" },
                  { label: "Size", value: product.volume },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-background rounded-lg p-3 text-center"
                  >
                    <p className="text-xs text-muted mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Ingredients" && (
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-foreground/85">
                {content[activeTab]}
              </p>
              <div className="flex gap-2 mt-4">
                {["Neem", "Turmeric", "Glycerin"].map((ing) => (
                  <span
                    key={ing}
                    className="px-3 py-1.5 bg-primary-light text-primary text-xs font-medium rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "How to Use" && (
            <div className="space-y-4">
              {content[activeTab]
                .split(". ")
                .filter(Boolean)
                .map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/85">
                      {step.trim().replace(/\.$/, "")}.
                    </p>
                  </div>
                ))}
            </div>
          )}

          {activeTab === "Warnings" && (
            <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <svg
                className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm leading-relaxed text-amber-900">
                {content[activeTab]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
