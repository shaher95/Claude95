"use client";

import { useState, useEffect } from "react";

const notifications = [
  { name: "Ahmed from Riyadh", time: "2 minutes ago", product: "Himalaya Neem Face Wash" },
  { name: "Sara from Jeddah", time: "5 minutes ago", product: "Himalaya Neem Face Wash" },
  { name: "Noura from Dammam", time: "8 minutes ago", product: "Himalaya Neem Scrub" },
  { name: "Khalid from Riyadh", time: "12 minutes ago", product: "Himalaya Neem Face Wash" },
  { name: "Maha from Makkah", time: "15 minutes ago", product: "Himalaya Neem Face Wash" },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
        }, 500);
      }, 4000);
    };

    const initialDelay = setTimeout(showNotification, 5000);
    const interval = setInterval(showNotification, 12000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const notification = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 max-w-xs transition-all duration-500 ${
        visible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white rounded-xl shadow-xl border border-border p-3 flex items-start gap-3">
        <div className="w-9 h-9 bg-primary-light rounded-full flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-xs text-foreground">
            <span className="font-semibold">{notification.name}</span>{" "}
            just purchased
          </p>
          <p className="text-xs text-primary font-medium truncate">
            {notification.product}
          </p>
          <p className="text-[10px] text-muted mt-0.5">{notification.time}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-muted hover:text-foreground shrink-0 mt-0.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
