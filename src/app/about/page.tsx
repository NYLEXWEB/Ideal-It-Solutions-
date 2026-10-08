"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import BranchesSection from "@/components/BranchesSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (service?: string) => {
    setSelectedService(service);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0066FF] selection:text-white font-sans antialiased text-[#1E293B]">
      {/* Top Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow pt-24 md:pt-28">
        {/* 1. Breadcrumb & Page Hero */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#f4f8fd] via-white to-white overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-100 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#0066FF] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">About Us</span>
            </nav>

            <div className="max-w-3xl">
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60">
                  OUR LEGACY &bull; SINCE 2010
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-light text-[#1E293B] leading-[1.15] tracking-[-0.03em] mb-6">
                Pioneering IT Excellence, <br />
                <span className="font-normal text-[#0066FF]">
                  Driven by Punctuality &amp; Trust.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                For over 15 years, IDEAL COMPUTERS &amp; IT SOLUTIONS has provided comprehensive technology sales, precision hardware maintenance, enterprise CCTV security, and networking across Kerala and India.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Detailed Company Story & Heritage */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image with Showroom Badge */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/about_showroom.jpg"
                      alt="IDEAL IT Technology Showroom and Service Lab"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[11px] font-semibold text-[#38BDF8] tracking-widest uppercase">
                      MANANTHAVADY &bull; WAYANAD
                    </span>
                    <h3 className="text-xl font-medium leading-snug">
                      Authorized Technology &amp; Security Experience Center
                    </h3>
                    <p className="text-xs text-slate-300 font-normal">
                      Susheelam Building, Near Royal Drive, Thalassery Road
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Narrative Presentation */}
              <div className="lg:col-span-7 space-y-6 text-slate-700">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#64748B] uppercase">
                    OUR STORY &amp; PHILOSOPHY
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-normal text-[#1E293B] leading-[1.2] tracking-[-0.025em]">
                  A Name Built on Quality Work, <br />
                  <span className="text-[#0066FF]">Delivered on Right Time and in the Right Manner.</span>
                </h2>

                {/* Lead Quotation Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-800 text-[15px] sm:text-[16px] leading-relaxed italic">
                  &ldquo;We are proud to introduce ourselves as pioneers in the sales and maintenance of computers and IT products since 2010. We have been quick to rise and shine in this competitive market that thrives on professional, honest, and most importantly punctual service providers and innovative solution enthusiasts.&rdquo;
                </div>

                {/* Body Paragraphs */}
                <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-600 font-normal">
                  <p>
                    <strong className="text-slate-900 font-medium">IDEAL COMPUTERS</strong> is a leading solution provider for IT-based applications, computing hardware, and critical infrastructure services for over a decade. We have assembled a dedicated team of highly experienced professionals committed to delivering <strong className="text-slate-900 font-medium">total IT solutions under one single roof</strong>.
                  </p>
                  <p>
                    Our operations are powered not only by the latest technology gadgets and diagnostic equipment, but also by seasoned hands capable of offering user-friendly, customized solutions tailored to specific commercial or residential requirements.
                  </p>
                  <p>
                    With an established, extensive network across India, we deliver end-to-end IT solutions and hardware provisions to numerous private sector companies and growing enterprises.
                  </p>
                  <p className="text-slate-800 font-medium pt-1">
                    We have made a recognized name in a relatively short span of time solely through our steadfast commitment to ensuring customer needs are met by rewarding them with <span className="text-[#0066FF]">quality work on the right time and in the right manner</span>.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleOpenQuote()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
                  >
                    <span>Request a Quote</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <a
                    href="tel:9605932907"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium transition-all duration-200"
                  >
                    <svg className="w-4 h-4 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
                    </svg>
                    <span>Call: 96059 32907</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Four Core Pillars of Excellence */}
        <section className="py-16 md:py-24 bg-[#f8fbfe] border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-3">
                OUR CORE ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#1E293B] tracking-tight">
                Why Clients Choose <span className="text-[#0066FF]">IDEAL IT</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 font-normal">
                Four steadfast commitments that define every interaction, delivery, and installation we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">
                  Punctual &amp; Honest Service
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Strict adherence to project schedules, prompt on-site diagnostics, honest recommendations, and zero hidden costs.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">
                  Total IT Under One Roof
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Eliminating multiple vendors by offering hardware sales, chip-level service, security surveillance, and network infrastructure seamlessly.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">
                  Latest Tech &amp; Skilled Hands
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Equipped with next-generation technology gadgets, handled by certified engineers who craft customized and intuitive solutions.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">
                  Pan-India Network
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  A strong distribution and deployment network providing IT infrastructure to private sector enterprises across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Store Branches */}
        <BranchesSection />

        {/* 5. Clarifications & Contact Callout Banner */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="relative z-10 max-w-xl">
                <span className="text-[11px] font-medium text-[#38BDF8] tracking-widest uppercase mb-2 inline-block bg-blue-500/20 px-3.5 py-1 rounded-full border border-blue-400/20">
                  WE ARE HERE TO HELP
                </span>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight mt-2 mb-3">
                  Have Questions or Need Further Clarifications?
                </h3>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  Please feel free to contact us anytime for customized project proposals, site inspections, or corporate hardware pricing.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <a
                  href="tel:9605932907"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all active:scale-95"
                >
                  <svg className="w-4 h-4 text-[#38BDF8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
                  </svg>
                  <span>96059 32907</span>
                </a>

                <button
                  onClick={() => handleOpenQuote()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition-all shadow-lg shadow-blue-500/30 active:scale-95 cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloating />

      {/* Interactive Get a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />
    </div>
  );
}
