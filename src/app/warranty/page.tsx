"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";

export default function WarrantyPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    productBrand: "",
    productModel: "",
    serialNumber: "",
    purchaseDate: "",
    issueDescription: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const TARGET_EMAIL = "idealcomputersmntdy@gmail.com";

  const buildWarrantyEmailUrls = () => {
    const subject = `Warranty Claim: ${formData.productBrand || "Hardware"} ${formData.productModel || ""} - ${formData.fullName}`;
    const body = `Hello IDEAL IT Team,

I would like to submit an official warranty service claim with the following details:

CUSTOMER INFORMATION:
- Full Name: ${formData.fullName}
- Phone Number: ${formData.phoneNumber}
- Email Address: ${formData.emailAddress || "Not provided"}

PRODUCT DETAILS:
- Product Brand: ${formData.productBrand}
- Model / Serial Number: ${formData.productModel || "N/A"}
- Approx. Purchase Date: ${formData.purchaseDate || "N/A"}

ISSUE / DEFECT DESCRIPTION:
${formData.issueDescription}

ATTACHMENT:
- Selected File: ${fileName ? fileName : "No file attached"}
${fileName ? `(Note: Please attach "${fileName}" to this email draft before hitting Send.)` : ""}

Thank you,
${formData.fullName}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      TARGET_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    return { subject, body, gmailUrl, mailtoUrl };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { gmailUrl, mailtoUrl } = buildWarrantyEmailUrls();

    try {
      await fetch("/api/warranty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, invoiceFile: fileName }),
      });
    } catch {
      // background fallback
    } finally {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      const opened = window.open(gmailUrl, "_blank");
      if (!opened) {
        window.location.href = mailtoUrl;
      }
    }
  };

  const { gmailUrl, mailtoUrl } = buildWarrantyEmailUrls();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
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
              <span className="text-slate-900 font-medium">Warranty Support</span>
            </nav>

            <div className="max-w-3xl">
              <span className="text-[11.5px] font-medium tracking-[0.2em] text-[#0066FF] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block mb-4">
                AUTHENTIC HARDWARE PROTECTION
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-light text-[#1E293B] leading-[1.15] tracking-[-0.03em] mb-6">
                Fast, Hassle-Free <br />
                <span className="font-normal text-[#0066FF]">
                  Warranty Claims &amp; Verification.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Every computer, CCTV camera, networking switch, and inverter battery purchased from IDEAL IT comes backed with 100% genuine manufacturer warranties and direct localized repair support in Wayanad.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Interactive Claim Registration Form & Info */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Warranty Portal Form */}
              <div className="lg:col-span-7 bg-[#f8fbfe] p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-medium text-slate-900 mb-2">
                    Submit a Warranty Claim or Service Request
                  </h2>
                  <p className="text-sm text-slate-600">
                    Fill out the product information below. Our technical desk will inspect your warranty status and contact you within 24 business hours.
                  </p>
                </div>

                {submittedSuccess ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-green-200 shadow-sm space-y-4">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900">
                      Warranty Claim Prepared!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. We have opened a Gmail draft with your claim ticket addressed to:
                    </p>
                    <div className="inline-block px-3.5 py-1.5 rounded-xl bg-blue-50 text-[#0066FF] font-medium text-xs border border-blue-100">
                      {TARGET_EMAIL}
                    </div>

                    {fileName && (
                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto text-left">
                        📎 <strong>Selected Attachment:</strong> {fileName}
                        <p className="text-[11px] text-amber-700 mt-1">
                          Please remember to attach your invoice photo or bill in the opened Gmail draft before hitting Send!
                        </p>
                      </div>
                    )}

                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Please click <strong>Send</strong> in Gmail so our technical desk can process your warranty verification.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition shadow-sm"
                      >
                        Open Gmail Compose
                      </a>
                      <a
                        href={mailtoUrl}
                        className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition"
                      >
                        Default Mail App
                      </a>
                      <button
                        onClick={() => {
                          setSubmittedSuccess(false);
                          setFormData({
                            fullName: "",
                            phoneNumber: "",
                            emailAddress: "",
                            productBrand: "",
                            productModel: "",
                            serialNumber: "",
                            purchaseDate: "",
                            issueDescription: "",
                          });
                          setFileName(null);
                        }}
                        className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 transition"
                      >
                        Submit Another Ticket
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="e.g. 96059 32907"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Product Brand *
                        </label>
                        <select
                          required
                          value={formData.productBrand}
                          onChange={(e) => setFormData({ ...formData, productBrand: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                        >
                          <option value="">Select Brand</option>
                          <option value="Hikvision">Hikvision</option>
                          <option value="Dahua">Dahua</option>
                          <option value="CP Plus">CP Plus</option>
                          <option value="HP">HP</option>
                          <option value="Dell">Dell</option>
                          <option value="Lenovo">Lenovo</option>
                          <option value="Asus">Asus</option>
                          <option value="TP-Link">TP-Link</option>
                          <option value="Luminous">Luminous</option>
                          <option value="Microtek">Microtek</option>
                          <option value="Other">Other Authorized Brand</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Model or Serial Number
                        </label>
                        <input
                          type="text"
                          value={formData.productModel}
                          onChange={(e) => setFormData({ ...formData, productModel: e.target.value })}
                          placeholder="e.g. DS-2CD2043G2 / SN123456"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Approx. Purchase Date
                        </label>
                        <input
                          type="date"
                          value={formData.purchaseDate}
                          onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Attach Invoice / Photo (Optional)
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="invoice-upload-page"
                            accept="image/*,.pdf"
                          />
                          <label
                            htmlFor="invoice-upload-page"
                            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-dashed border-slate-300 text-xs text-slate-600 hover:border-[#0066FF] transition cursor-pointer truncate"
                          >
                            <span className="truncate">{fileName || "Click to upload bill/photo"}</span>
                            <span className="text-[#0066FF] font-medium ml-2 flex-shrink-0">Browse</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Describe the Issue or Defect *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.issueDescription}
                        onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                        placeholder="Please describe what problem you are encountering with the hardware..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-medium transition shadow-md shadow-blue-500/25 active:scale-98 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? "Submitting Claim..." : "Submit Official Warranty Claim"}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: 4-Step Claim Process & Direct Help */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[11px] font-semibold text-[#0066FF] tracking-widest uppercase block mb-2">
                    HOW IT WORKS
                  </span>
                  <h3 className="text-2xl font-medium text-slate-900">
                    Simple 4-Step Claim Workflow
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-slate-900">Submit Details Online</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-0.5">
                        Enter your product brand, model, and issue description via our warranty portal or WhatsApp helpline.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-slate-900">Diagnosis &amp; Verification</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-0.5">
                        Our technicians verify the manufacturer warranty coverage and run component diagnostics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-slate-900">OEM Replacement / Repair</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-0.5">
                        We coordinate direct authorized RMA replacement or chip-level servicing with genuine parts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      04
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-slate-900">Doorstep Delivery or Pickup</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-0.5">
                        Collect your repaired or replaced unit at our Mananthavady store, or receive mobile on-site delivery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Help Box */}
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Need Immediate Warranty Status?
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal">
                    Call our direct warranty support desk or drop by our showroom with your device bill.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href="tel:9605932907"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF] text-white text-xs font-medium shadow-sm hover:bg-[#0052cc]"
                    >
                      <span>Call: 96059 32907</span>
                    </a>
                    <a
                      href="mailto:idealcomputersmntdy@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100"
                    >
                      <span>idealcomputersmntdy@gmail.com</span>
                    </a>
                    <a
                      href="https://wa.me/919605932907?text=Hi%20IDEAL%20IT%2C%20I%20want%20to%20check%20my%20warranty%20claim%20status."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100"
                    >
                      <span>WhatsApp Desk</span>
                    </a>
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
