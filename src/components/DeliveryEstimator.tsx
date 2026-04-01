"use client";

import { useState } from "react";

interface DeliveryEstimate {
  city: string;
  standard: string;
  express: string;
  sameDayAvailable: boolean;
}

const deliveryData: Record<string, DeliveryEstimate> = {
  riyadh: { city: "Riyadh", standard: "1-2 business days", express: "Same day by 9 PM", sameDayAvailable: true },
  jeddah: { city: "Jeddah", standard: "1-2 business days", express: "Same day by 9 PM", sameDayAvailable: true },
  dammam: { city: "Dammam", standard: "1-2 business days", express: "Same day by 9 PM", sameDayAvailable: true },
  makkah: { city: "Makkah", standard: "2-3 business days", express: "Next day by 6 PM", sameDayAvailable: false },
  madinah: { city: "Madinah", standard: "2-3 business days", express: "Next day by 6 PM", sameDayAvailable: false },
  tabuk: { city: "Tabuk", standard: "3-5 business days", express: "2 business days", sameDayAvailable: false },
  abha: { city: "Abha", standard: "3-5 business days", express: "2 business days", sameDayAvailable: false },
  other: { city: "Other Areas", standard: "5-7 business days", express: "3-4 business days", sameDayAvailable: false },
};

export default function DeliveryEstimator() {
  const [selectedCity, setSelectedCity] = useState<string>("riyadh");
  const estimate = deliveryData[selectedCity];

  return (
    <div className="bg-surface rounded-xl border border-border p-5">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 className="text-sm font-semibold text-foreground">
          Delivery Estimate
        </h3>
      </div>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary mb-3"
      >
        <option value="riyadh">Riyadh</option>
        <option value="jeddah">Jeddah</option>
        <option value="dammam">Dammam</option>
        <option value="makkah">Makkah</option>
        <option value="madinah">Madinah</option>
        <option value="tabuk">Tabuk</option>
        <option value="abha">Abha</option>
        <option value="other">Other Areas</option>
      </select>

      <div className="space-y-2">
        {estimate.sameDayAvailable && (
          <div className="flex items-center justify-between bg-success/5 border border-success/20 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-semibold text-success">Same-Day</span>
            </div>
            <span className="text-xs text-success font-medium">{estimate.express}</span>
          </div>
        )}

        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <span className="text-xs font-medium text-foreground">Express</span>
          </div>
          <span className="text-xs text-muted">{estimate.sameDayAvailable ? "Included" : estimate.express}</span>
        </div>

        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-xs font-medium text-foreground">Standard</span>
          </div>
          <span className="text-xs text-muted">{estimate.standard}</span>
        </div>
      </div>

      <p className="text-[10px] text-muted mt-3 leading-relaxed">
        Free delivery on orders over 100 SAR. Express delivery fee: 15 SAR.
        Same-day delivery available for orders placed before 2 PM.
      </p>
    </div>
  );
}
