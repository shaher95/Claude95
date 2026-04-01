"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  questionAr: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is this face wash suitable for sensitive skin?",
    questionAr: "هل غسول الوجه مناسب للبشرة الحساسة؟",
    answer:
      "While this face wash is dermatologically tested and soap-free, it is primarily formulated for normal to oily skin types. If you have very sensitive or reactive skin, we recommend doing a patch test on a small area first. Consult your dermatologist or pharmacist for personalized advice.",
  },
  {
    question: "How often should I use this product?",
    questionAr: "كم مرة يجب أن أستخدم هذا المنتج؟",
    answer:
      "For best results, use the Himalaya Purifying Neem Face Wash twice daily — once in the morning and once in the evening. Overuse may strip your skin of natural oils. If you experience any dryness, reduce to once daily.",
  },
  {
    question: "Is this product registered with SFDA?",
    questionAr: "هل هذا المنتج مسجل لدى هيئة الغذاء والدواء؟",
    answer:
      "Yes, this product is fully registered and approved by the Saudi Food & Drug Authority (SFDA). All products sold on NahdiCare undergo rigorous verification to ensure compliance with SFDA regulations. You can verify the registration on the SFDA website using the product's barcode or registration number.",
  },
  {
    question: "Can I use this while pregnant or breastfeeding?",
    questionAr: "هل يمكنني استخدامه أثناء الحمل أو الرضاعة؟",
    answer:
      "The product is for external use only and uses herbal ingredients. However, we always recommend consulting with your healthcare provider before introducing any new skincare products during pregnancy or breastfeeding for your peace of mind.",
  },
  {
    question: "What is the shelf life and how should I store it?",
    questionAr: "ما هي مدة صلاحية المنتج وكيف يجب تخزينه؟",
    answer:
      "The shelf life is 36 months from the manufacturing date when unopened. Once opened, use within 12 months. Store in a cool, dry place away from direct sunlight. In Saudi Arabia's hot climate, avoid leaving it in your car or in direct sun exposure.",
  },
  {
    question: "Is this product tested on animals?",
    questionAr: "هل تم اختبار هذا المنتج على الحيوانات؟",
    answer:
      "Himalaya Herbals is committed to cruelty-free practices. This product has not been tested on animals. The company uses advanced in-vitro testing methods and clinical trials on human volunteers to ensure product safety and efficacy.",
  },
];

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="animate-fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted mt-0.5">
            Common questions about this product
          </p>
        </div>
        <button className="text-sm text-primary hover:underline font-medium hidden sm:block">
          Ask a Question
        </button>
      </div>

      <div className="bg-surface rounded-2xl border border-border overflow-hidden divide-y divide-border">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-gray-50/50 transition-colors"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  openIndex === index
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-muted"
                }`}
              >
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3
                  className={`text-sm font-semibold transition-colors ${
                    openIndex === index ? "text-primary" : "text-foreground"
                  }`}
                >
                  {faq.question}
                </h3>
                <p className="text-[11px] text-muted mt-0.5" dir="rtl">
                  {faq.questionAr}
                </p>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="px-5 pb-4 pl-13">
                <p className="text-sm text-foreground/80 leading-relaxed ml-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
