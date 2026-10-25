"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GlanceService {
  id: string;
  href: string;
  title: string;
  badge: string;
  subtitle: string;
  image: string;
  isInitialActive?: boolean;
}

const glanceServices: GlanceService[] = [
  {
    id: "computer-sales-service",
    href: "/services#computer-sales-service",
    title: "Computer Sales & Repair",
    badge: "CHIP-LEVEL TECHS",
    subtitle: "Laptops, Rigs & Motherboards",
    image: "/services/computer_sales.png",
    isInitialActive: true,
  },
  {
    id: "cctv-security-systems",
    href: "/services#cctv-security-systems",
    title: "CCTV & Security Systems",
    badge: "24/7 COLOR NIGHT",
    subtitle: "AI Cameras & Live Monitoring",
    image: "/services/cctv_security.png",
  },
  {
    id: "networking-solutions",
    href: "/services#networking-solutions",
    title: "Networking & Optical Fiber",
    badge: "GIGABIT SPEED",
    subtitle: "Server Racks & Mesh Wi-Fi",
    image: "/services/networking.png",
  },
  {
    id: "ups-inverter-power",
    href: "/services#ups-inverter-power",
    title: "UPS & Inverter Power Backup",
    badge: "PURE SINE WAVE",
    subtitle: "Zero-Cut Power & Batteries",
    image: "/services/ups_inverter.png",
  },
  {
    id: "smart-home-automation",
    href: "/services#smart-home-automation",
    title: "Smart Home Automation",
    badge: "APP & VOICE",
    subtitle: "Touch Panels & Smart Gates",
    image: "/services/home_automation.png",
  },
  {
    id: "video-door-phones",
    href: "/services#video-door-phones",
    title: "Video Door Phones",
    badge: "2-WAY HD TALK",
    subtitle: "HD Intercom & Remote Unlock",
    image: "/services/video_door_phone.png",
  },
];

export default function Hero({ onOpenQuote }: { onOpenQuote?: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[850px] sm:min-h-[100dvh] md:min-h-[640px] lg:min-h-[660px] md:h-[100dvh] pt-16 sm:pt-20 md:pt-20 lg:pt-22 pb-2 sm:pb-3 overflow-hidden flex flex-col justify-between bg-[#f4f8fd]"
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
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-white/90 via-transparent via-35% to-white/95 pointer-events-none" />

        {/* Bottom subtle fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

        {/* Top subtle fade under the navbar */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-0 sm:my-auto py-1 sm:py-2 md:py-3 -translate-y-16 sm:translate-y-0">
        <div className="max-w-2xl lg:max-w-xl text-left">
          {/* Eyebrow / Tag */}


          {/* Headline */}
          <h1 className="mt-[395px] sm:mt-0 text-[31px] xs:text-[35px] sm:text-4xl md:text-[44px] lg:text-[52px] font-light text-[#1E293B] leading-[1.12] tracking-[-0.03em] mb-2.5 sm:mb-3">
            Smarter <br />
            Solutions for <br />
            a <span className="font-normal text-[#0066FF]">Safer Tomorrow.</span>
          </h1>

          {/* Subheading / Primary Local Services */}
          <p className="text-[13px] sm:text-[14.5px] lg:text-[15px] text-[#475569] font-normal leading-relaxed mb-4 sm:mb-5 max-w-lg">
            Certified CCTV &amp; IP security camera installation, precision chip-level laptop repairs, optical fiber networking, and smart automation across Wayanad and Kannur.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 max-w-sm sm:max-w-none">
            {/* Primary Services Button */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[13.5px] sm:text-[14px] font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
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
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-[13.5px] sm:text-[14px] font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <svg
                className="w-4 h-4 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Bottom Services at a Glance Section - Hero Main Attraction Showcase */}
      <div className="relative z-20 w-full mt-auto pt-2 sm:pt-3 pb-2 sm:pb-3 -translate-y-16 sm:translate-y-0">
        {/* Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">

            <span className="text-[11px] sm:text-[12px] font-bold text-slate-900 tracking-[0.16em] uppercase">
              SERVICES AT A GLANCE
            </span>

          </div>


        </div>

        {/* Self-contained CSS Animation for guaranteed infinite looping across all browsers */}
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
                animation: serviceMarqueeLoop 30s linear infinite !important;
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

          {/* Marquee Track - Guaranteed continuous auto-scroll */}
          <div
            className="animate-services-auto-loop flex items-center gap-3 sm:gap-3.5 py-1.5 px-4 cursor-pointer"
            style={{
              animation: "serviceMarqueeLoop 30s linear infinite",
              willChange: "transform",
            }}
          >
            {/* Set 1 */}
            {glanceServices.map((service) => (
              <Link
                key={`s1-${service.id}`}
                href={service.href}
                className={`group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] h-[106px] sm:h-[114px] rounded-2xl bg-white/95 hover:bg-white border transition-all duration-300 active:scale-[0.98] overflow-hidden flex items-center shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(0,102,255,0.18)] hover:-translate-y-1 ${service.isInitialActive
                  ? "border-[#0066FF]/50 ring-1 ring-[#0066FF]/30"
                  : "border-slate-200/90 hover:border-[#0066FF]/60"
                  }`}
              >
                {/* Right Side Product Graphic Render from public/services */}
                <div className="absolute right-0 top-0 bottom-0 w-[52%] sm:w-[50%] pointer-events-none select-none overflow-hidden rounded-r-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 180px, 200px"
                    className="object-cover object-right group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Left Side Content */}
                <div className="relative z-10 w-[62%] sm:w-[60%] h-full p-3 sm:p-3.5 flex flex-col justify-between text-left">
                  <div>
                    {/* Badge Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50/90 border border-blue-200/60 text-[#0066FF] text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase mb-1.5 shadow-2xs group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] transition-colors duration-200">

                      <span className="truncate">{service.badge}</span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-slate-800 group-hover:text-[#0066FF] transition-colors duration-200 leading-tight line-clamp-1">
                      {service.title}
                    </h3>

                    {/* Subtitle / Key Spec */}
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Bottom Action Prompt */}
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-medium text-slate-400 group-hover:text-[#0066FF] transition-all duration-200">
                    <span>Explore specs</span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200 text-[#0066FF]"
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
                  </div>
                </div>

                {/* Top Shimmer Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#0066FF]/0 to-transparent group-hover:via-[#0066FF]/70 transition-all duration-300" />
              </Link>
            ))}

            {/* Set 2 (Identical duplicate for seamless zero-gap infinite marquee) */}
            {glanceServices.map((service) => (
              <Link
                key={`s2-${service.id}`}
                href={service.href}
                className={`group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] h-[106px] sm:h-[114px] rounded-2xl bg-white/95 hover:bg-white border transition-all duration-300 active:scale-[0.98] overflow-hidden flex items-center shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(0,102,255,0.18)] hover:-translate-y-1 ${service.isInitialActive
                  ? "border-[#0066FF]/50 ring-1 ring-[#0066FF]/30"
                  : "border-slate-200/90 hover:border-[#0066FF]/60"
                  }`}
              >
                {/* Right Side Product Graphic Render from public/services */}
                <div className="absolute right-0 top-0 bottom-0 w-[52%] sm:w-[50%] pointer-events-none select-none overflow-hidden rounded-r-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 180px, 200px"
                    className="object-cover object-right group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Left Side Content */}
                <div className="relative z-10 w-[62%] sm:w-[60%] h-full p-3 sm:p-3.5 flex flex-col justify-between text-left">
                  <div>
                    {/* Badge Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50/90 border border-blue-200/60 text-[#0066FF] text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase mb-1.5 shadow-2xs group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] transition-colors duration-200">

                      <span className="truncate">{service.badge}</span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-slate-800 group-hover:text-[#0066FF] transition-colors duration-200 leading-tight line-clamp-1">
                      {service.title}
                    </h3>

                    {/* Subtitle / Key Spec */}
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Bottom Action Prompt */}
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-medium text-slate-400 group-hover:text-[#0066FF] transition-all duration-200">
                    <span>Explore specs</span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200 text-[#0066FF]"
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
                  </div>
                </div>

                {/* Top Shimmer Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#0066FF]/0 to-transparent group-hover:via-[#0066FF]/70 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
