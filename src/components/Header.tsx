"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IdealItLogo } from "./Logos";

export default function Header({ onOpenQuote }: { onOpenQuote?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Warranty", href: "/warranty" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100/80"
          : "bg-transparent py-4 md:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <IdealItLogo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-normal text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-150 tracking-normal ${
                  isActive
                    ? "text-[#0066FF] font-medium"
                    : "text-[#334155] hover:text-[#0066FF]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Phone Link */}
          <a
            href="tel:9605932907"
            className="flex items-center gap-2 text-[14px] font-medium text-[#1E293B] hover:text-[#0066FF] transition-colors duration-150"
          >
            <svg
              className="w-4 h-4 text-[#0066FF]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
            </svg>
            <span>96059 32907</span>
          </a>

          {/* Get a Quote Button */}
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[13.5px] font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            <span>Get a Quote</span>
            <svg
              className="w-3.5 h-3.5"
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
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenQuote}
            className="px-3.5 py-1.5 rounded-full bg-[#0066FF] text-white text-xs font-medium cursor-pointer"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-normal py-1 border-b border-slate-50 ${
                  pathname === link.href
                    ? "text-[#0066FF] font-medium"
                    : "text-slate-800 hover:text-[#0066FF]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:9605932907"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 text-slate-800 text-sm font-medium border border-slate-200"
            >
              <svg className="w-4 h-4 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
              </svg>
              <span>Call: 96059 32907</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote?.();
              }}
              className="w-full py-3 rounded-xl bg-[#0066FF] text-white text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
