"use client";

import React, { useState, useRef } from "react";
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

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvFileUrl, setCvFileUrl] = useState<string>("");
  const [isUploadingCv, setIsUploadingCv] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const getEffectiveRole = () => {
    if (formData.category === "Other") {
      return formData.customRole.trim() || "General IT / Technical Role";
    }
    return formData.category;
  };

  const handleFileSelect = async (file: File) => {
    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setFormError("The selected file exceeds 10MB. Please choose a smaller PDF or image.");
      return;
    }

    setFormError(null);
    setCvFile(file);
    setIsUploadingCv(true);

    try {
      const uploadData = new FormData();
      uploadData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });

      if (res.ok) {
        const json = await res.json();
        if (json.fileUrl) {
          setCvFileUrl(json.fileUrl);
        }
      }
    } catch (err) {
      console.error("Local CV upload error:", err);
    } finally {
      setIsUploadingCv(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemoveCv = () => {
    setCvFile(null);
    setCvFileUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const buildDetails = () => {
    const role = getEffectiveRole();
    const subject = `Job Application: ${role} - ${formData.fullName}`;

    // Get origin URL for public download link if hosted
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const resumeDownloadLink = cvFileUrl ? `${origin}${cvFileUrl}` : "";

    const body = `Hello IDEAL IT Solutions Team,

I would like to submit my job application for:
ROLE / CATEGORY: ${role}

CANDIDATE DETAILS:
- Full Name: ${formData.fullName}
- Phone (WhatsApp): ${formData.phoneNumber}
- Email: ${formData.emailAddress || "Not provided"}
- Location: ${formData.location || "Wayanad / Kerala"}
${cvFile ? `- CV / Resume: ${cvFile.name} (Uploaded)` : "- CV: None attached"}
${resumeDownloadLink ? `- Direct Resume Link: ${resumeDownloadLink}` : ""}

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
${cvFile ? `📄 *CV / Resume Attached:* ${cvFile.name}` : ""}
${resumeDownloadLink ? `🔗 *Download CV:* ${resumeDownloadLink}` : ""}
📝 *Message:*
${formData.message || "Interested in joining the IDEAL IT team."}

_I look forward to hearing from you._`;

    const whatsappUrl = `https://wa.me/${TARGET_PHONE_WHATSAPP}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return { subject, body, whatsappUrl, role, whatsappMessage };
  };

  const handleFormSubmit = async (channel: "gmail" | "whatsapp", e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setFormError("Please fill in your Full Name and Phone Number.");
      return;
    }
    setFormError(null);
    setIsSubmitting(true);

    const currentRole = getEffectiveRole();
    const { subject, body, whatsappUrl, whatsappMessage } = buildDetails();

    // 1. Immediately trigger redirection according to chosen channel
    if (channel === "gmail") {
      openGmailCompose({ subject, body });
    } else {
      // 1. If mobile device supports Web Share API with files, share the actual file!
      let sharedDirectly = false;
      if (
        cvFile &&
        typeof navigator !== "undefined" &&
        navigator.canShare &&
        navigator.canShare({ files: [cvFile] })
      ) {
        try {
          await navigator.share({
            title: `Job Application: ${currentRole} - ${formData.fullName}`,
            text: whatsappMessage,
            files: [cvFile],
          });
          sharedDirectly = true;
        } catch (shareErr: any) {
          if (shareErr.name === "AbortError") {
            // User cancelled share
            setIsSubmitting(false);
            return;
          }
        }
      }

      // If Web Share wasn't completed, open direct WhatsApp chat with details & link
      if (!sharedDirectly) {
        const opened = window.open(whatsappUrl, "_blank");
        if (!opened || opened.closed || typeof opened.closed === "undefined") {
          window.location.href = whatsappUrl;
        }
      }
    }

    // 2. Send application details + actual file directly to backend
    try {
      const careerData = new FormData();
      careerData.append("fullName", formData.fullName);
      careerData.append("phoneNumber", formData.phoneNumber);
      careerData.append("emailAddress", formData.emailAddress);
      careerData.append("position", currentRole);
      careerData.append("location", formData.location);
      careerData.append("message", formData.message);
      if (cvFile) {
        careerData.append("resume", cvFile);
      }
      if (cvFileUrl) {
        careerData.append("resumeUrl", cvFileUrl);
      }

      await fetch("/api/careers", {
        method: "POST",
        body: careerData,
      });
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
              <div className="text-center py-8 space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-medium text-slate-900">
                  Successfully Submitted!
                </h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your application for <strong className="text-slate-800">{getEffectiveRole()}</strong> has been dispatched. Our hiring desk will review and contact you shortly.
                </p>

                <div className="pt-2">
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
                    className="px-6 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition shadow-sm"
                  >
                    Submit Another Application
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

                {/* 4. CV / Resume Upload (PDF / Image) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-medium text-slate-700">
                      Upload CV / Resume (PDF, DOCX or Image)
                    </label>
                    <span className="text-[11px] text-slate-400">PDF, JPG, PNG up to 10MB</span>
                  </div>

                  {/* Hidden native file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    className="hidden"
                  />

                  {!cvFile ? (
                    /* Dropzone when no file selected */
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`w-full p-5 sm:p-6 rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                        isDragging
                          ? "border-[#0066FF] bg-blue-50/60 scale-[1.01]"
                          : "border-slate-200 bg-slate-50/70 hover:bg-slate-50 hover:border-[#0066FF]/50"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white text-[#0066FF] shadow-xs border border-slate-200/60 flex items-center justify-center mb-2.5">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-800">
                        <span className="text-[#0066FF] underline">Click to choose CV</span> or drag &amp; drop file here
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Supports PDF documents, Word files, or photo/scans
                      </p>
                    </div>
                  ) : (
                    /* Selected file card */
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-3 animate-in fade-in">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* File Type Badge Icon */}
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0 border border-blue-100">
                          {cvFile.type.includes("pdf") ? (
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v3H6v-7h3.5c1.1 0 2 .9 2 2s-.9 2-2 2zm8.5 3h-1.5v-1.5H18v-1.5h-1.5V11H18V9.5h-3v7H18V14.5zm-5-1.5h-1.5v-4H13c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z" />
                            </svg>
                          ) : cvFile.type.includes("image") ? (
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                        </div>

                        {/* File Details */}
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                            {cvFile.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] text-slate-500">
                              {(cvFile.size / 1024).toFixed(0)} KB
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              {isUploadingCv ? "Saving..." : "Ready to attach"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
                        >
                          Change
                        </button>
                        <button
                          type="button"
                          onClick={handleRemoveCv}
                          className="w-7 h-7 rounded-lg text-red-500 hover:bg-red-50 flex items-center justify-center transition"
                          title="Remove file"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>On mobile phones, WhatsApp will open with this file attached. In email, this file is sent directly as an attachment.</span>
                  </p>
                </div>

                {/* 5. Short Message */}
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
