"use client";

import React from "react";
import Link from "next/link";

interface GlanceService {
  id: string;
  href: string;
  title: string;
  badge: string;
  isInitialActive?: boolean;
  icon: (className?: string) => React.ReactNode;
}

const glanceServices: GlanceService[] = [
  {
    id: "computer-sales-service",
    href: "/services#computer-sales-service",
    title: "Computer Sales & Repair",
    badge: "CHIP-LEVEL TECHS",
    isInitialActive: true,
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={2} />
        <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2} strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "cctv-security-systems",
    href: "/services#cctv-security-systems",
    title: "CCTV & Security Systems",
    badge: "24/7 COLOR NIGHT",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "networking-solutions",
    href: "/services#networking-solutions",
    title: "Networking & Optical Fiber",
    badge: "GIGABIT SPEED",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.393 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
  {
    id: "ups-inverter-power",
    href: "/services#ups-inverter-power",
    title: "UPS & Inverter Power Backup",
    badge: "PURE SINE WAVE",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "smart-home-automation",
    href: "/services#smart-home-automation",
    title: "Smart Home Automation",
    badge: "APP & VOICE",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "video-door-phones",
    href: "/services#video-door-phones",
    title: "Video Door Phones",
    badge: "2-WAY HD TALK",
    icon: (cls = "w-4 h-4") => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="2" width="18" height="20" rx="3" strokeWidth={2} />
        <circle cx="12" cy="7" r="2.5" strokeWidth={2} />
        <circle cx="12" cy="15" r="1.5" strokeWidth={2} />
      </svg>
    ),
  },
];

export default function Hero({ onOpenQuote }: { onOpenQuote?: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] md:min-h-[720px] lg:min-h-[760px] pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 overflow-hidden flex flex-col justify-between bg-[#f4f8fd]"
    >
      {/* 1. Full Dynamic Background Video System: Dedicated Mobile Portrait & Desktop Landscape */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden bg-[#f4f8fd]">
        {/* Mobile Portrait Video (< 768px screens) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/herosection_bg_video/herosection_mobile_poster.jpg"
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source
            src="/images/herosection_bg_video/herosection_mobile_portrait.mp4"
            type="video/mp4"
          />
          <source
            src="/images/herosection_bg_video/herosection_mobile_portrait.webm"
            type="video/webm"
          />
        </video>

        {/* Desktop & Tablet Landscape Video (>= 768px screens) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/herosection_bg_video/herosection_poster.jpg"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-[75%_center] lg:object-center pointer-events-none"
        >
          <source
            src="/images/herosection_bg_video/herosection_clean.mp4"
            type="video/mp4"
          />
          <source
            src="/images/herosection_bg_video/herosection_clean.webm"
            type="video/webm"
          />
        </video>

        {/* 2. Apple-style Soft Gradient Overlays for High-Contrast Readability */}
        {/* Desktop Left-to-Right linear fade */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-50% sm:from-white/95 sm:via-white/75 sm:via-55% lg:from-white/95 lg:via-white/70 lg:via-50% to-transparent pointer-events-none" />

        {/* Mobile vertical gradient for seamless text contrast and top/bottom blending */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-white/90 via-white/35 via-35% to-white/95 pointer-events-none" />

        {/* Bottom subtle fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

        {/* Top subtle fade under the navbar */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-8">
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
            {/* Primary Services Button */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[14px] sm:text-[14.5px] font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Our Services</span>
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
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919605932907?text=Hi%20IDEAL%20IT,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
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

      {/* 3. Bottom Services at a Glance Section with Continuous Horizontal Loop */}
      <div className="relative z-20 w-full mt-auto pt-6 pb-2 sm:pb-3">
        {/* Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse flex-shrink-0" />
            <span className="text-[11px] sm:text-[12px] font-bold text-slate-800 tracking-[0.14em] uppercase">
              SERVICES AT A GLANCE
            </span>
            <span className="text-[11px] sm:text-[12px] text-slate-500 font-normal">
              (6 Core Services)
            </span>
          </div>

          <div className="text-[11px] sm:text-[12px] text-slate-500 font-normal hidden sm:flex items-center gap-1.5">
            <span>Tap any service to jump directly to details &amp; pricing</span>
          </div>
        </div>

        {/* Self-contained CSS Animation for 100% guaranteed infinite looping across all browsers and caching states */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes serviceMarqueeLoop {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-50%, 0, 0);
                }
              }
              .animate-services-auto-loop {
                display: flex !important;
                width: max-content !important;
                animation: serviceMarqueeLoop 26s linear infinite !important;
                will-change: transform;
              }
              .animate-services-auto-loop:hover {
                animation-play-state: paused !important;
              }
            `,
          }}
        />

        {/* Infinite Horizontal Looping Marquee */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Side soft fade gradients for seamless visual edge blend */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#f4f8fd] via-[#f4f8fd]/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#f4f8fd] via-[#f4f8fd]/80 to-transparent pointer-events-none z-10" />

          {/* Marquee Track - Guaranteed continuous auto-scroll */}
          <div
            className="animate-services-auto-loop animate-marquee-services flex items-center gap-3 sm:gap-3.5 py-1.5 px-4 cursor-pointer"
            style={{
              animation: "serviceMarqueeLoop 26s linear infinite",
              willChange: "transform",
            }}
          >
            {/* Set 1 */}
            {glanceServices.map((service, idx) => (
              <Link
                key={`s1-${service.id}`}
                href={service.href}
                className={`group flex-shrink-0 flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-white/95 hover:bg-white border transition-all duration-200 active:scale-[0.98] ${
                  service.isInitialActive
                    ? "border-[#0066FF]/50 shadow-[0_2px_12px_rgba(0,102,255,0.12)]"
                    : "border-slate-200/90 hover:border-[#0066FF]/50 shadow-sm hover:shadow-[0_4px_16px_rgba(0,102,255,0.12)]"
                }`}
              >
                {/* Round Icon Container */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    service.isInitialActive
                      ? "bg-[#0066FF] text-white"
                      : "bg-[#f1f5f9] text-slate-600 group-hover:bg-[#0066FF] group-hover:text-white"
                  }`}
                >
                  {service.icon("w-3.5 h-3.5 sm:w-4 sm:h-4")}
                </div>

                {/* Service Title */}
                <span
                  className={`text-[12.5px] sm:text-[13.5px] font-medium whitespace-nowrap transition-colors duration-200 ${
                    service.isInitialActive
                      ? "text-[#0066FF]"
                      : "text-[#1E293B] group-hover:text-[#0066FF]"
                  }`}
                >
                  {service.title}
                </span>

                {/* Pill Feature Badge */}
                <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0066FF] border border-slate-200/70 group-hover:border-blue-200/60 whitespace-nowrap transition-colors duration-200">
                  {service.badge}
                </span>

                {/* Chevron Arrow */}
                <svg
                  className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0066FF] transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}

            {/* Set 2 (Identical duplicate for seamless zero-gap infinite marquee) */}
            {glanceServices.map((service, idx) => (
              <Link
                key={`s2-${service.id}`}
                href={service.href}
                className={`group flex-shrink-0 flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-white/95 hover:bg-white border transition-all duration-200 active:scale-[0.98] ${
                  service.isInitialActive
                    ? "border-[#0066FF]/50 shadow-[0_2px_12px_rgba(0,102,255,0.12)]"
                    : "border-slate-200/90 hover:border-[#0066FF]/50 shadow-sm hover:shadow-[0_4px_16px_rgba(0,102,255,0.12)]"
                }`}
              >
                {/* Round Icon Container */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    service.isInitialActive
                      ? "bg-[#0066FF] text-white"
                      : "bg-[#f1f5f9] text-slate-600 group-hover:bg-[#0066FF] group-hover:text-white"
                  }`}
                >
                  {service.icon("w-3.5 h-3.5 sm:w-4 sm:h-4")}
                </div>

                {/* Service Title */}
                <span
                  className={`text-[12.5px] sm:text-[13.5px] font-medium whitespace-nowrap transition-colors duration-200 ${
                    service.isInitialActive
                      ? "text-[#0066FF]"
                      : "text-[#1E293B] group-hover:text-[#0066FF]"
                  }`}
                >
                  {service.title}
                </span>

                {/* Pill Feature Badge */}
                <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0066FF] border border-slate-200/70 group-hover:border-blue-200/60 whitespace-nowrap transition-colors duration-200">
                  {service.badge}
                </span>

                {/* Chevron Arrow */}
                <svg
                  className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0066FF] transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
