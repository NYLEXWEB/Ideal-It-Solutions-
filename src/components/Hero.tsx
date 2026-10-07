"use client";

import React from "react";
import Image from "next/image";

export default function Hero({ onOpenQuote }: { onOpenQuote?: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] md:min-h-[640px] pt-24 pb-10 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center bg-[#f4f8fd]"
    >
      {/* 1. Full Background CCTV Image spanning mobile and desktop */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/hero_cctv_bg.jpg"
          alt="IDEAL IT Smart Solutions for a Safer Tomorrow"
          fill
          priority
          className="object-cover object-[85%_20%] sm:object-[80%_center] md:object-[80%_center] lg:object-[85%_center]"
          sizes="100vw"
        />

        {/* 2. Seamless Apple-style Soft White / Sky Blue Gradient Overlays */}
        {/* Left-to-Right linear fade for clean text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-65% sm:from-[#f4f8fd] sm:via-[#f4f8fd]/92 sm:via-55% lg:via-55% to-transparent" />

        {/* Mobile top & bottom subtle vertical overlays for full screen elegance */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/85 md:hidden" />

        {/* Bottom subtle fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-white via-white/40 to-transparent" />

        {/* Top subtle fade under the navbar */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 sm:from-[#f4f8fd]/90 to-transparent" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-2xl lg:max-w-xl text-left">
          {/* Eyebrow / Tag */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-[11px] sm:text-[12.5px] font-medium tracking-[0.2em] text-[#64748B] uppercase">
              YOUR TRUSTED IT &amp; SECURITY PARTNER
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[34px] xs:text-[38px] sm:text-5xl lg:text-[58px] font-light text-[#1E293B] leading-[1.12] tracking-[-0.03em] mb-4 sm:mb-6">
            Smarter <br />
            Solutions for <br />
            a <span className="font-normal text-[#0066FF]">Safer Tomorrow.</span>
          </h1>

          {/* Subtitle / Services List */}
          <div className="text-[13px] sm:text-[14.5px] text-[#64748B] font-normal leading-relaxed mb-7 sm:mb-9 space-y-1">
            <div>
              Computer Solutions{" "}
              <span className="text-[#CBD5E1] mx-1.5 font-normal">|</span> CCTV
              Security{" "}
              <span className="text-[#CBD5E1] mx-1.5 font-normal">|</span>{" "}
              Networking
            </div>
            <div>
              Power Solutions{" "}
              <span className="text-[#CBD5E1] mx-1.5 font-normal">|</span>{" "}
              Smart Home Automation
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none">
            {/* Primary Quote Button */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[14px] sm:text-[14.5px] font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Get a Quote</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919805932907?text=Hi%20IDEAL%20IT,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-[#1E293B] text-[14px] sm:text-[14.5px] font-medium border border-slate-200/90 shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] backdrop-blur-sm"
            >
              <svg
                className="w-4 h-4 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
