"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";
import { buildGmailUrls, openGmailCompose, COMPANY_EMAIL } from "@/lib/gmailRedirect";

const TARGET_PHONE_WHATSAPP = "919605932907";

export default function CareersPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    category: "CCTV & Security Systems",
    customRole: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const getEffectiveRole = () => {
    if (formData.category === "Other") {
      return formData.customRole.trim() || "General IT / Technical Role";
    }
    return formData.category;
  };

  const buildDetails = () => {
    const role = getEffectiveRole();
    const subject = `Job Application: ${role} - ${formData.fullName}`;

    const body = `Hello IDEAL IT Solutions Team,

I would like to submit my job application for:
ROLE / CATEGORY: ${role}

CANDIDATE DETAILS:
- Full Name: ${formData.fullName}
- Phone (WhatsApp): ${formData.phoneNumber}
- Email: ${formData.emailAddress || "Not provided"}
- Location: ${formData.location || "Wayanad / Kerala"}

NOTE / MESSAGE:
${formData.message || "I am interested in working with the IDEAL IT Solutions team."}

Thank you,
${formData.fullName}
Phone: ${formData.phoneNumber}`;

    const whatsappMessage = `*JOB APPLICATION - IDEAL IT SOLUTIONS*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.fullName}
📱 *Phone:* ${formData.phoneNumber}
✉️ *Email:* ${formData.emailAddress || "N/A"}
💼 *Role / Category:* ${role}
📍 *Location:* ${formData.location || "Wayanad"}
📝 *Message:*
${formData.message || "Interested in joining the IDEAL IT team."}

_I look forward to hearing from you._`;

    const whatsappUrl = `https://wa.me/${TARGET_PHONE_WHATSAPP}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return { subject, body, whatsappUrl, role };
  };

  const { subject, body, whatsappUrl, role } = buildDetails();
  const { webGmailUrl, mailtoUrl, smartUrl } = buildGmailUrls({ subject, body });

  const handleFormSubmit = async (channel: "gmail" | "whatsapp", e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setFormError("Please fill in your Full Name and Phone Number.");
      return;
    }
    setFormError(null);
    setIsSubmitting(true);

    const currentRole = getEffectiveRole();
    const { subject, body, whatsappUrl } = buildDetails();

    // 1. Immediately trigger redirection according to chosen channel
    if (channel === "gmail") {
      openGmailCompose({ subject, body });
    } else {
      const opened = window.open(whatsappUrl, "_blank");
      if (!opened || opened.closed || typeof opened.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    }

    // 2. Send application details directly to backend
    try {
      fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          emailAddress: formData.emailAddress,
          position: currentRole,
          location: formData.location,
          message: formData.message,
        }),
      }).catch((err) => console.error("Careers submission error:", err));
    } catch (err) {
      console.error("Submission error:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fbfe] selection:bg-[#0066FF] selection:text-white font-sans antialiased text-[#1E293B]">
      {/* Header */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 pt-4">
            <Link href="/" className="hover:text-[#0066FF] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Careers</span>
          </nav>

          {/* Clean Header */}
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-3">
              CAREERS &bull; WORK WITH US
            </span>
            <h1 className="text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight">
              Job Application Form
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal max-w-md mx-auto">
              Submit your details below. Our technical desk will contact you promptly.
            </p>
          </div>

          {/* Form Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
                  Application Submitted Successfully!
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your application for <strong className="text-slate-800">{role}</strong> has been delivered directly to the IDEAL IT hiring desk.
                </p>

                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Gmail has been opened addressed to <strong>{COMPANY_EMAIL}</strong>. You can also connect with us via the options below:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={smartUrl || mailtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition shadow-sm flex items-center justify-center gap-2"
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
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-medium hover:bg-[#20ba59] transition shadow-sm flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        phoneNumber: "",
                        emailAddress: "",
                        category: "CCTV & Security Systems",
                        customRole: "",
                        location: "",
                        message: "",
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 transition"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit("gmail", e)} className="space-y-4">
                {/* 1. Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul K.M"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 96059 32907"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] transition"
                    />
                  </div>
                </div>

                {/* 2. Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Location / Place
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mananthavady, Wayanad"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] transition"
                    />
                  </div>
                </div>

                {/* 3. Role / Category */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Category / Role *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] transition"
                  >
                    <option value="CCTV & Security Systems">CCTV &amp; Security Systems</option>
                    <option value="Computer Hardware & Laptop Repair">Computer Hardware &amp; Laptop Repair</option>
                    <option value="Networking & Optical Fiber">Networking &amp; Optical Fiber</option>
                    <option value="Sales & Showroom Operations">Sales &amp; Showroom Operations</option>
                    <option value="IT Field Support & AMC">IT Field Support &amp; AMC</option>
                    <option value="Smart Home Automation">Smart Home Automation</option>
                    <option value="Other">Other (Type your role below)</option>
                  </select>
                </div>

                {/* Custom Role Input if Other */}
                {formData.category === "Other" && (
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Specify Your Role / Domain *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Graphic Design, Accounting, Driver, Internship..."
                      value={formData.customRole}
                      onChange={(e) => setFormData({ ...formData, customRole: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] transition"
                    />
                  </div>
                )}

                {/* 4. Short Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Short Message / Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific skills, qualification, experience, or message for the hiring team..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-[#0066FF] resize-none transition"
                  />
                </div>

                {/* Error Banner */}
                {formError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 animate-in fade-in">
                    <svg className="w-4 h-4 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{formError}</span>
                  </div>
                )}

                {/* 5. Dual Submit Buttons */}
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={(e) => handleFormSubmit("gmail", e)}
                      className="w-full py-3.5 px-4 rounded-2xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 disabled:opacity-70"
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
                      className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-medium transition shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 disabled:opacity-70"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Submit via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Direct Contact Prompt */}
          <div className="mt-8 text-center text-xs text-slate-500">
            <span>Direct helpline for careers &amp; internship inquiries: </span>
            <a href="tel:9605932907" className="text-[#0066FF] font-medium hover:underline">
              96059 32907
            </a>
            <span className="mx-2">&bull;</span>
            <a
              href="mailto:idealcomputersmntdy@gmail.com"
              className="text-[#0066FF] font-medium hover:underline"
            >
              idealcomputersmntdy@gmail.com
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* Floating WhatsApp */}
      <WhatsAppFloating />
    </div>
  );
}
