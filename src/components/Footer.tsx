"use client";

import React from "react";
import { IdealItLogo } from "./Logos";

export default function Footer({
  onOpenQuote,
}: {
  onOpenQuote?: (service?: string) => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200 relative overflow-hidden">
      {/* Background subtle ambient tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 mb-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
          <div className="text-center lg:text-left">
            <span className="text-[11.5px] font-medium text-[#38BDF8] tracking-widest uppercase mb-2 inline-block bg-blue-500/15 px-3.5 py-1 rounded-full border border-blue-400/20">
              FAST ON-SITE SUPPORT &amp; SALES
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mt-2 mb-2">
              Ready to Upgrade Your <span className="font-medium text-[#38BDF8]">Security or IT?</span>
            </h3>
            <p className="text-slate-300 text-sm max-w-xl font-normal">
              Connect with our authorized technicians in Wayanad for prompt installations, service calls, and free project estimations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
            <a
              href="tel:9805932907"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all duration-200 active:scale-95 shadow-sm"
            >
              <svg className="w-4 h-4 text-[#38BDF8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
              </svg>
              <span>Call: 98059 32907</span>
            </a>

            <button
              onClick={() => onOpenQuote?.()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main 4-Column Detailed Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Col 1: Brand & About (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-block">
              <IdealItLogo />
            </div>

            <p className="text-slate-600 text-[13.5px] leading-relaxed font-normal">
              Your trusted technology and security systems partner in Mananthavady, Wayanad. We provide enterprise-grade CCTV surveillance, computer hardware sales &amp; service, optical fiber networking, and smart home automation.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919805932907"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#25D366] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200/80 shadow-sm"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#E1306C] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200/80 shadow-sm"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200/80 shadow-sm"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.714V8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#FF0000] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200/80 shadow-sm"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-slate-900 text-[14.5px] font-semibold tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13.5px] font-normal text-slate-600">
              <li>
                <a href="#home" className="hover:text-[#0066FF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#0066FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0066FF] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#0066FF] transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-[#0066FF] transition-colors">
                  Warranty Support
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0066FF] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuote?.()}
                  className="text-[#0066FF] hover:underline font-medium text-left cursor-pointer"
                >
                  Request a Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-900 text-[14.5px] font-semibold tracking-wide uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-[13.5px] font-normal text-slate-600">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  Computer Sales &amp; Repair
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  CCTV Surveillance Systems
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  Networking &amp; Wi-Fi Setup
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  UPS &amp; Inverter Power Backup
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  Smart Home Automation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  Video Door Phones &amp; Intercoms
                </a>
              </li>
              <li>
                <a
                  href="#warranty"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  Annual Maintenance (AMC)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Contact & Compact Map on Right Side (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-slate-900 text-[14.5px] font-semibold tracking-wide uppercase">
              Store &amp; Location
            </h4>
            
            <div className="space-y-3 text-[13px] text-slate-600">
              {/* Address Link */}
              <a
                href="https://maps.app.goo.gl/nat3JAFL8QiTfyrF9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#0066FF] group transition"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100 group-hover:bg-[#0066FF] group-hover:text-white transition">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="leading-snug text-slate-600 group-hover:text-slate-900">
                  Susheelam Building, Near Kerala Bank, Mysore Road, Mananthavady, Wayanad – 670645
                </span>
              </a>

              {/* Phone & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
                    </svg>
                  </div>
                  <a href="tel:9805932907" className="text-slate-800 hover:text-[#0066FF] font-medium text-xs transition">
                    +91 98059 32907
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-xs">
                    Mon–Sat: 9AM–7PM
                  </span>
                </div>
              </div>

              {/* Compact Map Preview on the Right */}
              <div className="pt-2">
                <div className="relative w-full h-[145px] rounded-xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-100">
                  <iframe
                    title="IDEAL IT SOLUTIONS Location Map"
                    src="https://maps.google.com/maps?q=11.8036631,76.0048841&hl=en&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  {/* Floating Direction Link */}
                  <a
                    href="https://maps.app.goo.gl/nat3JAFL8QiTfyrF9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-medium border border-slate-200/80 shadow-md hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition active:scale-95"
                  >
                    <span>Get Directions</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center sm:text-left">
            © 2026 <span className="text-slate-800 font-medium">IDEAL IT SOLUTIONS</span>. All rights reserved. Susheelam Building, Mysore Rd, Mananthavady, Kerala 670645.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0066FF] transition group py-1 cursor-pointer"
          >
            <span>Back to top</span>
            <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0066FF] text-slate-600 group-hover:text-white flex items-center justify-center transition border border-slate-200">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
