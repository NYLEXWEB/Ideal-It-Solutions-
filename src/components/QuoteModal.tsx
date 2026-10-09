"use client";

import React, { useState } from "react";
import { buildGmailUrls, openGmailCompose, COMPANY_EMAIL } from "@/lib/gmailRedirect";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "CCTV & Security Systems",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) return null;

  const buildDetails = () => {
    const subject = `Quote Request: ${formData.service} - ${formData.name}`;
    const body = `Hello IDEAL IT Team,

I would like to request a quotation for:

SERVICE REQUESTED:
${formData.service}

CUSTOMER DETAILS:
- Full Name: ${formData.name}
- Phone Number: ${formData.phone}
- Email Address: ${formData.email || "Not provided"}

PROJECT REQUIREMENTS & MESSAGE:
${formData.requirements || "None specified"}

Thank you,
${formData.name}`;

    return { subject, body };
  };

  const { subject, body } = buildDetails();
  const { webGmailUrl, mailtoUrl, smartUrl } = buildGmailUrls({ subject, body });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError("Please enter your Name and Phone number to continue.");
      return;
    }
    setFormError(null);
    setIsSubmitting(true);

    // 1. Immediately trigger Gmail redirection (app on mobile, web compose on desktop)
    openGmailCompose({ subject, body });

    // 2. Asynchronously log quote to backend
    fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {
      // background fallback
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/919605932907?text=${encodeURIComponent(
    `Hi IDEAL IT, I am ${formData.name}. I would like to get a quote for ${formData.service}. Phone: ${formData.phone}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-slate-900 mb-2">Quote Request Prepared!</h3>
            <p className="text-sm text-slate-600 mb-2">
              Thank you, <strong className="text-slate-800">{formData.name}</strong>. Gmail has been opened with your quote details addressed to:
            </p>
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-blue-50 text-[#0066FF] font-medium text-xs mb-4 border border-blue-100">
              {COMPANY_EMAIL}
            </div>
            <p className="text-xs text-slate-500 mb-6 max-w-sm mx-auto">
              Please click <strong>Send</strong> in Gmail to deliver your quote request.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={smartUrl || mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition shadow-sm flex items-center justify-center gap-2"
              >
                <span>Open Gmail</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-blue-200 text-[#0066FF] text-xs font-medium hover:bg-blue-50 transition shadow-sm flex items-center justify-center gap-2"
              >
                <span>Default Mail App</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-medium hover:bg-[#20ba59] transition shadow-sm flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 transition"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#0066FF] uppercase block mb-1">
              FREE ESTIMATE
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-2 tracking-tight">
              Get a Fast Quote
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mb-6">
              Tell us about your project or service requirement and we&apos;ll get back with a tailored quote.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 96059 32907"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Required Service *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF]"
                >
                  <option value="CCTV & Security Systems">CCTV &amp; Security Systems</option>
                  <option value="Computer Sales & Service">Computer Sales &amp; Service</option>
                  <option value="Networking Solutions">Networking Solutions</option>
                  <option value="UPS & Inverter Systems">UPS &amp; Inverter Systems</option>
                  <option value="Home Automation">Home Automation</option>
                  <option value="Annual Maintenance Contract">Annual Maintenance Contract (AMC)</option>
                  <option value="Other Inquiries">Other Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Project Details / Message</label>
                <textarea
                  rows={3}
                  placeholder="Describe your location, number of cameras, or IT requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] resize-none"
                />
              </div>

              {/* Error Message */}
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-in fade-in">
                  <svg className="w-4 h-4 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{formError}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition shadow-md flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Submitting..." : "Get Instant Quote"}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
