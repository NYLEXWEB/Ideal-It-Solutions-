"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BranchesSection from "@/components/BranchesSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";
import { buildGmailUrls, openGmailCompose, COMPANY_EMAIL } from "@/lib/gmailRedirect";

export default function ContactPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const buildDetails = () => {
    const subject = `Inquiry / Quote: ${formData.subject} - ${formData.name}`;
    const body = `Hello IDEAL IT Team,

I would like to contact you regarding the following:

SUBJECT / SERVICE:
${formData.subject}

CUSTOMER DETAILS:
- Full Name: ${formData.name}
- Phone Number: ${formData.phone}
- Email Address: ${formData.email || "Not provided"}

MESSAGE / REQUIREMENTS:
${formData.message}

Thank you,
${formData.name}`;

    return { subject, body };
  };

  const { subject, body } = buildDetails();
  const { webGmailUrl, mailtoUrl, smartUrl } = buildGmailUrls({ subject, body });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError("Please enter your name and phone number to continue.");
      return;
    }
    setFormError(null);
    setIsSubmitting(true);

    // 1. Immediately trigger Gmail redirection (mobile app / desktop web compose)
    openGmailCompose({ subject, body });

    // 2. Asynchronously log the contact message to backend
    fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.subject,
        requirements: formData.message,
      }),
    }).catch(() => {
      // background fallback
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/919605932907?text=${encodeURIComponent(
    `Hi IDEAL IT, I am ${formData.name}. Regarding: ${formData.subject}. Message: ${formData.message}`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0066FF] selection:text-white font-sans antialiased text-[#1E293B]">
      {/* Top Header */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="flex-grow pt-24 md:pt-28">
        {/* 1. Breadcrumb & Hero */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#f4f8fd] via-white to-white overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#0066FF] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Contact Us</span>
            </nav>

            <div className="max-w-3xl">
              <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-4">
                WE ARE ALWAYS HERE TO HELP
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-light text-[#1E293B] leading-[1.15] tracking-[-0.03em] mb-6">
                Get in Touch with Our <br />
                <span className="font-normal text-[#0066FF]">
                  Technology Specialists.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Whether you need a custom CCTV quote, computer hardware repair, optical networking setup, or have any clarifications—feel free to contact our team in Mananthavady, Wayanad.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Our Store Branches */}
        <BranchesSection />

        {/* 3. Interactive Form & Map Section */}

        {/* 3. Interactive Form & Map Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Message Form */}
              <div className="lg:col-span-6 bg-[#f8fbfe] p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
                <h2 className="text-2xl font-medium text-slate-900 mb-2">
                  Send Us a Direct Message
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the details below and we will get back to you promptly with technical advice or quote estimates.
                </p>

                {submitted ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-blue-200 space-y-4">
                    <div className="w-14 h-14 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900">
                      Message Prepared for Delivery!
                    </h3>
                    <p className="text-sm text-slate-600">
                      Thank you, <strong className="text-slate-800">{formData.name}</strong>. Gmail has been opened with your inquiry addressed to:
                    </p>
                    <div className="inline-block px-3.5 py-1.5 rounded-xl bg-blue-50 text-[#0066FF] font-medium text-xs border border-blue-100">
                      {COMPANY_EMAIL}
                    </div>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Please click <strong>Send</strong> in Gmail to deliver your inquiry.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={smartUrl || mailtoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition shadow-sm flex items-center justify-center gap-2"
                      >
                        <span>Open Gmail</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={mailtoUrl}
                        className="px-5 py-2.5 rounded-full border border-blue-200 text-[#0066FF] text-xs font-medium hover:bg-blue-50 transition shadow-sm flex items-center justify-center gap-2"
                      >
                        <span>Default Mail App</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-medium hover:bg-[#20ba59] transition shadow-sm flex items-center justify-center gap-2"
                      >
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            subject: "General Inquiry",
                            message: "",
                          });
                        }}
                        className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 transition"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 96059 32907"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Service / Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                      >
                        <option value="CCTV Security Systems">CCTV Security Systems</option>
                        <option value="Computer Sales & Service">Computer Sales & Service</option>
                        <option value="Networking & Optical Fiber">Networking & Optical Fiber</option>
                        <option value="UPS & Inverter Backup">UPS & Inverter Backup</option>
                        <option value="Smart Home Automation">Smart Home Automation</option>
                        <option value="Video Door Phones">Video Door Phones</option>
                        <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                        <option value="General Inquiry">General Inquiry / Clarifications</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Your Message / Requirements *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project location, timeline, or requirement..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition resize-none"
                      />
                    </div>

                    {/* Inline Error Message */}
                    {formError && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 animate-in fade-in">
                        <svg className="w-4 h-4 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>{formError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition shadow-md shadow-blue-500/25 active:scale-98 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Google Maps & Store Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[11px] font-semibold text-[#0066FF] tracking-widest uppercase block mb-1">
                    FIND OUR STORE
                  </span>
                  <h3 className="text-2xl font-medium text-slate-900">
                    Visit Our Experience Center
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Located conveniently on Thalassery Road in Mananthavady with dedicated customer parking.
                  </p>
                </div>

                {/* Google Maps Container */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] w-full bg-slate-100">
                  <iframe
                    title="IDEAL IT Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9463942363197!2d76.00282667584518!3d11.803719888414002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5d023b379d727%3A0xe54e60144f8ea584!2sMananthavady%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Need Further Clarifications?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-0.5">
                      Please feel free to call us at <strong className="text-slate-800">96059 32907</strong>, email us at <a href="mailto:idealcomputersmntdy@gmail.com" className="text-[#0066FF] font-medium hover:underline">idealcomputersmntdy@gmail.com</a>, or request an on-site engineer visit to your home or office anywhere in Wayanad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloating />

      {/* Interactive Get a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
