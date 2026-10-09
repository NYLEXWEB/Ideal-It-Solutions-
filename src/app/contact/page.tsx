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

    const whatsappMessage = `*CUSTOMER INQUIRY - IDEAL IT SOLUTIONS*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || "N/A"}
📌 *Subject:* ${formData.subject}
📝 *Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/919605932907?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return { subject, body, whatsappUrl };
  };

  const handleFormSubmit = (channel: "gmail" | "whatsapp", e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError("Please enter your name and phone number to continue.");
      return;
    }
    setFormError(null);
    setIsSubmitting(true);

    const { subject, body, whatsappUrl } = buildDetails();

    // 1. Immediately trigger redirection according to selected channel
    if (channel === "gmail") {
      openGmailCompose({ subject, body });
    } else {
      const opened = window.open(whatsappUrl, "_blank");
      if (!opened || opened.closed || typeof opened.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    }

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
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4 animate-in fade-in duration-200">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-slate-900">
                      Successfully Submitted!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your inquiry has been dispatched. Our team will contact you shortly.
                    </p>
                    <div className="pt-2">
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
                        className="px-6 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition shadow-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleFormSubmit("gmail", e)} className="space-y-4 text-left">
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

                    {/* Dual Submit Buttons: Gmail and WhatsApp */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={(e) => handleFormSubmit("gmail", e)}
                        className="w-full py-3.5 px-6 rounded-2xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Submit via Gmail</span>
                      </button>

                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={(e) => handleFormSubmit("whatsapp", e)}
                        className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Submit via WhatsApp</span>
                      </button>
                    </div>
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
