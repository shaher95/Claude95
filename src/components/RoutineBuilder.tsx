"use client";

import { useState } from "react";
import StarRating from "./StarRating";

interface RoutineStep {
  id: string;
  step: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  description: string;
  isCurrent?: boolean;
}

const routineSteps: RoutineStep[] = [
  {
    id: "step-1",
    step: 1,
    name: "Himalaya Purifying Neem Face Wash",
    brand: "Himalaya",
    price: 29.95,
    originalPrice: 39.95,
    rating: 4.6,
    description: "Cleanse away impurities, dirt, and excess oil",
    isCurrent: true,
  },
  {
    id: "step-2",
    step: 2,
    name: "Himalaya Purifying Neem Scrub",
    brand: "Himalaya",
    price: 24.95,
    originalPrice: 32.0,
    rating: 4.4,
    description: "Exfoliate dead skin cells for a smoother texture",
  },
  {
    id: "step-3",
    step: 3,
    name: "Himalaya Refreshing & Clarifying Toner",
    brand: "Himalaya",
    price: 31.95,
    originalPrice: 38.0,
    rating: 4.5,
    description: "Balance skin pH and tighten pores",
  },
  {
    id: "step-4",
    step: 4,
    name: "Himalaya Nourishing Skin Cream",
    brand: "Himalaya",
    price: 19.95,
    rating: 4.7,
    description: "Lock in moisture for soft, supple skin",
  },
];

export default function RoutineBuilder() {
  const [selectedSteps, setSelectedSteps] = useState<Set<string>>(
    new Set(routineSteps.map((s) => s.id))
  );

  const toggleStep = (id: string) => {
    const step = routineSteps.find((s) => s.id === id);
    if (step?.isCurrent) return;
    setSelectedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedProducts = routineSteps.filter((s) => selectedSteps.has(s.id));
  const totalOriginal = selectedProducts.reduce(
    (sum, s) => sum + (s.originalPrice || s.price),
    0
  );
  const totalPrice = selectedProducts.reduce((sum, s) => sum + s.price, 0);
  const bundleDiscount = totalPrice * 0.1;
  const bundleTotal = totalPrice - bundleDiscount;

  return (
    <section className="animate-fade-in-up">
      <div className="bg-gradient-to-br from-primary-light/60 via-white to-accent-light/40 rounded-2xl border border-primary/10 overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <h2 className="text-xl font-bold text-foreground">Build Your Skincare Routine</h2>
          </div>
          <p className="text-sm text-muted">
            Select products to create your personalized routine and save 10% on the bundle
          </p>
        </div>

        {/* Steps */}
        <div className="px-6 pb-4">
          <div className="space-y-3">
            {routineSteps.map((step, index) => {
              const isSelected = selectedSteps.has(step.id);
              return (
                <div key={step.id}>
                  <div
                    onClick={() => toggleStep(step.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      step.isCurrent
                        ? "bg-primary/5 border-2 border-primary/30 cursor-default"
                        : isSelected
                        ? "bg-white border-2 border-primary/20 cursor-pointer hover:shadow-sm"
                        : "bg-white/50 border-2 border-transparent cursor-pointer hover:bg-white hover:border-border"
                    }`}
                  >
                    {/* Checkbox */}
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-primary border-primary text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>

                    {/* Step number */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected ? "bg-primary text-white" : "bg-gray-200 text-muted"
                    }`}>
                      {step.step}
                    </div>

                    {/* Product visual */}
                    <div className={`w-10 h-14 rounded-lg shrink-0 flex items-center justify-center text-[8px] font-bold text-white ${
                      isSelected ? "bg-gradient-to-b from-emerald-500 to-emerald-600" : "bg-gray-300"
                    }`}>
                      H
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`text-sm font-semibold truncate ${isSelected ? "text-foreground" : "text-muted"}`}>
                          {step.name}
                        </h3>
                        {step.isCurrent && (
                          <span className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full shrink-0">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted mt-0.5">{step.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={step.rating} size="sm" />
                        <span className="text-[10px] text-muted">{step.rating}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right shrink-0">
                      <p className={`text-sm font-bold ${isSelected ? "text-primary" : "text-muted"}`}>
                        {step.price.toFixed(2)} SAR
                      </p>
                      {step.originalPrice && (
                        <p className="text-[10px] text-muted line-through">
                          {step.originalPrice.toFixed(2)} SAR
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < routineSteps.length - 1 && (
                    <div className="flex justify-start ml-[3.25rem] py-1">
                      <div className={`w-0.5 h-4 rounded-full ${
                        isSelected && selectedSteps.has(routineSteps[index + 1].id)
                          ? "bg-primary/30"
                          : "bg-gray-200"
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bundle Summary */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-primary/10 px-6 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted">
                Bundle Price ({selectedProducts.length} items)
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-primary">
                  {bundleTotal.toFixed(2)} SAR
                </span>
                <span className="text-sm text-muted line-through">
                  {totalOriginal.toFixed(2)} SAR
                </span>
              </div>
              <p className="text-xs text-success font-medium mt-0.5">
                You save {(totalOriginal - bundleTotal).toFixed(2)} SAR with this bundle!
              </p>
            </div>

            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
              Add Bundle to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
