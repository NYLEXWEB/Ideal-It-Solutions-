"use client";

import React, { useState } from "react";
import { buildGmailUrls, openGmailCompose, COMPANY_EMAIL } from "@/lib/gmailRedirect";

export default function WarrantySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    productBrand: "",
    productModel: "",
    purchaseDate: "",
    issueDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const buildDetails = () => {
    const subject = `Warranty Claim: ${formData.productBrand || "Hardware"} ${formData.productModel || ""} - ${formData.fullName}`;

    const body = `Hello IDEAL IT Team,

I would like to submit an official warranty claim with the following details:

CUSTOMER INFORMATION:
- Full Name: ${formData.fullName}
- Phone Number: ${formData.phoneNumber}
- Email Address: ${formData.emailAddress || "Not provided"}

PRODUCT INFORMATION:
- Product Brand: ${formData.productBrand || "N/A"}
- Product Model / Serial No: ${formData.productModel || "N/A"}
- Approx. Purchase Date: ${formData.purchaseDate || "N/A"}

ISSUE / DEFECT DETAILS:
${formData.issueDescription}

Thank you,
${formData.fullName}`;

    const whatsappMessage = `*WARRANTY CLAIM - IDEAL IT SOLUTIONS*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer:* ${formData.fullName}
📱 *Phone:* ${formData.phoneNumber}
✉️ *Email:* ${formData.emailAddress || "N/A"}
🏷️ *Brand & Model:* ${formData.productBrand} ${formData.productModel || ""}
📅 *Purchase Date:* ${formData.purchaseDate || "N/A"}
⚠️ *Issue:* ${formData.issueDescription}

_Please verify and generate the RMA warranty service ticket._`;

    const whatsappUrl = `https://wa.me/919605932907?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return { subject, body, whatsappUrl };
  };

  const { subject, body, whatsappUrl } = buildDetails();

  const handleFormSubmit = async (channel: "gmail" | "whatsapp", e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
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

    // 2. Send warranty claim details to backend
    try {
      fetch("/api/warranty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((err) => console.error("Warranty submission error:", err));
    } catch (err) {
      console.error("Warranty submission error:", err);
    }

    setIsSubmitting(false);
    setSubmittedSuccess(true);
  };

  return (
    <section id="warranty" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Light Blue Main Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#ebf4fd] via-[#f0f7fe] to-[#e4f0fc] p-6 sm:p-10 lg:p-12 border border-[#d6e7fa] shadow-sm overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: 3D Shield & Info */}
            <div className="lg:col-span-4 flex flex-col items-start">
              {/* 3D Glass Shield Icon */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6 flex-shrink-0">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-400/20 to-blue-600/30 backdrop-blur-md p-3 flex items-center justify-center border border-white/60 shadow-lg">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-md"
                  >
                    <path
                      d="M50 8L18 22V48C18 70 32 88 50 94C68 88 82 70 82 48V22L50 8Z"
                      fill="url(#shield-grad-1)"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M50 14L24 26V48C24 66 35 81 50 87C65 81 76 66 76 48V26L50 14Z"
                      fill="url(#shield-grad-2)"
                      opacity="0.8"
                    />
                    <path
                      d="M38 48L46 56L64 38"
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="shield-grad-1" x1="18" y1="8" x2="82" y2="94" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38BDF8" />
                        <stop offset="1" stopColor="#0066FF" />
                      </linearGradient>
                      <linearGradient id="shield-grad-2" x1="50" y1="14" x2="50" y2="87" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffffff" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#0052cc" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Eyebrow Pill */}
              <span className="text-[11.5px] font-semibold tracking-[0.2em] text-[#0066FF] uppercase bg-blue-100/70 px-3.5 py-1.5 rounded-full mb-3 border border-blue-200">
                100% OFFICIAL RMA SUPPORT
              </span>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-light text-[#1E293B] leading-tight tracking-[-0.02em] mb-4">
                Fast &amp; Hassle-Free <br />
                <span className="font-normal text-[#0066FF]">Warranty Support</span>
              </h2>

              {/* Description */}
              <p className="text-[14px] font-normal text-[#64748B] leading-relaxed max-w-sm">
                Facing an issue with a product? Fill out the form and we&apos;ll get back to you quickly.
              </p>
            </div>

            {/* Right Column: Warranty Claim Form */}
            <div className="lg:col-span-8">
              {submittedSuccess ? (
                <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm border border-emerald-100 animate-in fade-in zoom-in-95 duration-300 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800">Successfully Submitted!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.fullName || "valued customer"}</strong>. Your warranty claim ticket has been dispatched. Our service desk will verify and contact you shortly.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFormData({
                          fullName: "",
                          phoneNumber: "",
                          emailAddress: "",
                          productBrand: "",
                          productModel: "",
                          purchaseDate: "",
                          issueDescription: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition shadow-sm"
                    >
                      Submit Another Claim
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => handleFormSubmit("gmail", e)} className="space-y-4">
                  {/* Row 1: Name, Phone, Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm border border-slate-200/80 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 placeholder-slate-400 transition"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm border border-slate-200/80 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 placeholder-slate-400 transition"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm border border-slate-200/80 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 placeholder-slate-400 transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Brand, Model, Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div className="relative">
                      <select
                        required
                        value={formData.productBrand}
                        onChange={(e) => setFormData({ ...formData, productBrand: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm border border-slate-200/80 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 appearance-none transition pr-10"
                      >
                        <option value="" disabled>
                          Product Brand *
                        </option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="HP">HP</option>
                        <option value="Dell">Dell</option>
                        <option value="Acer">Acer</option>
                        <option value="Honeywell">Honeywell</option>
                        <option value="Dahua">Dahua</option>
                        <option value="Hikvision">Hikvision</option>
                        <option value="TP-Link">TP-Link</option>
                        <option value="Other">Other Brand</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Product Model / Serial No"
                        value={formData.productModel}
                        onChange={(e) => setFormData({ ...formData, productModel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm border border-slate-200/80 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 placeholder-slate-400 transition"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type={formData.purchaseDate ? "date" : "text"}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.type = "text";
                        }}
                        placeholder="Approx. Purchase Date"
                        value={formData.purchaseDate}
                        onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm border border-slate-200/80 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 placeholder-slate-400 transition"
                      />
                    </div>
                  </div>

                  {/* Row 3: Issue Description */}
                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Issue Description *"
                      value={formData.issueDescription}
                      onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm border border-slate-200/80 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 placeholder-slate-400 transition resize-none"
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
          </div>
        </div>
      </div>
    </section>
  );
}
