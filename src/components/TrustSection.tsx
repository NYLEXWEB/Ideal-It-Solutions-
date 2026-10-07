"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-1",
    num: "01",
    question: "Why choose IDEAL IT for IT & CCTV Security in Wayanad?",
    answer:
      "We provide 100% genuine products from leading global brands (Hikvision, Dahua, Lenovo, HP, Dell, TP-Link), certified technician installations, prompt on-site support across Wayanad, and reliable warranty backing with over 15 years of industry expertise.",
  },
  {
    id: "faq-2",
    num: "02",
    question: "Do you provide on-site installation and cabling across Wayanad?",
    answer:
      "Yes, our mobile service team provides complete door-step on-site installation, optical fiber networking, CCTV cabling, inverter wiring, and repair services for residences, commercial spaces, schools, resorts, and offices anywhere in Wayanad.",
  },
  {
    id: "faq-3",
    num: "03",
    question: "How does the warranty support & claim process work?",
    answer:
      "All hardware sold by IDEAL IT comes with authentic manufacturer warranties. You can register and verify your warranty directly through our online warranty portal or visit our store at Susheelam Building, Mananthavady for rapid service and replacements.",
  },
  {
    id: "faq-4",
    num: "04",
    question: "Can I get a customized security & IT quotation for my property?",
    answer:
      "Absolutely! We offer free site surveys and tailored estimates for CCTV surveillance, networking infrastructure, smart home automation, and computer setups based on your exact budget and requirements.",
  },
  {
    id: "faq-5",
    num: "05",
    question: "Do you offer Annual Maintenance Contracts (AMC) for institutions & businesses?",
    answer:
      "Yes, we provide flexible AMC packages with scheduled preventative check-ups, emergency breakdown priority support, backup equipment provision, and software updates for retail stores, hotels, clinics, and offices.",
  },
];

export default function TrustSection({ onOpenQuote }: { onOpenQuote?: () => void }) {
  // All FAQs closed by default initially
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f8fbfe] border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow, Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#0066FF]/20 mb-3.5 w-fit">
              <span className="text-[11px] sm:text-[11.5px] font-medium text-[#0066FF] tracking-[0.16em] uppercase">
                WHY CHOOSE US &bull; FAQ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0F172A] leading-[1.18] tracking-[-0.025em] mb-4">
              Frequently Asked <br />
              <span className="font-normal text-[#0066FF]">Questions &amp; Trust.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] font-normal text-[#64748B] leading-relaxed mb-8">
              Find quick answers to common questions about our products, installations, warranty coverage, and on-site support across Wayanad.
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[13.5px] font-medium shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Borderless Minimalist FAQ List (No Card Boxes) */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id} className="transition-colors duration-150">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-5 sm:py-5.5 flex items-center justify-between gap-4 select-none cursor-pointer group"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                      {/* Number Indicator */}
                      <span
                        className={`text-xs font-medium transition-colors flex-shrink-0 mt-0.5 sm:mt-0 ${
                          isOpen ? "text-[#0066FF]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {faq.num}
                      </span>
                      <span
                        className={`text-[15.5px] sm:text-[17px] font-medium leading-snug transition-colors ${
                          isOpen ? "text-[#0066FF]" : "text-[#0F172A] group-hover:text-[#0066FF]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Expand Arrow Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#0066FF]/10 text-[#0066FF] rotate-180"
                          : "text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content (Shown only when opened) */}
                  {isOpen && (
                    <div className="pb-5 sm:pb-6 pl-7 sm:pl-8 pr-4 text-[14px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
