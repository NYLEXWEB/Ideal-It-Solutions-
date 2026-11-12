"use client";

import React from "react";
import { GoogleGLogo } from "./Logos";

interface ReviewItem {
  id: number;
  name: string;
  initial: string;
  avatarBg: string;
  rating: number;
  date: string;
  reviewMeta: string;
  isLocalGuide?: boolean;
  text: string;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: "Arun Grz",
    initial: "A",
    avatarBg: "bg-emerald-600",
    rating: 5,
    date: "3 years ago",
    reviewMeta: "Local Guide · 147 reviews · 85 photos",
    isLocalGuide: true,
    text: "Excellent service for security systems and IT infrastructure. Good collections of desktop/laptops . Staff and management was very supported & professionals . One time delivery and service.",
  },
  {
    id: 2,
    name: "Mohammed Hakheem",
    initial: "M",
    avatarBg: "bg-blue-600",
    rating: 5,
    date: "2 years ago",
    reviewMeta: "2 reviews",
    text: "Staffs was good in explaining.we had visited that computer IT . They had supported very much.",
  },
  {
    id: 3,
    name: "Arjun",
    initial: "A",
    avatarBg: "bg-indigo-600",
    rating: 5,
    date: "2 years ago",
    reviewMeta: "1 review",
    text: "Amazing services on affordable price with a wide variety of system's and accessories.",
  },
  {
    id: 4,
    name: "Zen",
    initial: "Z",
    avatarBg: "bg-amber-600",
    rating: 4,
    date: "2 years ago",
    reviewMeta: "3 reviews",
    text: "I am the student of Nilgiri college I vist the ideal it solution and get more information about CCTV and the facilities are friendly thank you for support and your knowledge sharing with me",
  },
  {
    id: 5,
    name: "Ranjith P G",
    initial: "R",
    avatarBg: "bg-purple-600",
    rating: 4,
    date: "3 years ago",
    reviewMeta: "11 reviews · 2 photos",
    text: "Such amazing services provided ideal, all the workers and Boss is available in any time in any where keep going team",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row with Google Branding and Direct Google Review Action */}
        <div
          data-reveal="fade-up"
          suppressHydrationWarning
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-medium tracking-wider uppercase mb-3">
              <span className="text-amber-500">★ ★ ★ ★ ★</span>
              <span>4.8 / 5.0 RATED ON GOOGLE MAPS</span>
            </div>

            <div className="flex items-center gap-3">
              <GoogleGLogo className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0F172A] tracking-tight">
                Authentic <span className="font-normal text-slate-900">Google Reviews</span>
              </h2>
            </div>
            <p className="text-[14px] text-slate-500 font-normal mt-1.5">
              Real, unfiltered feedback directly from our Google Business Profile in Mananthavady, Wayanad.
            </p>
          </div>

          {/* Direct Google Review Button */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJb2vV_KTepTsRUT2fCCgoSXo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#1E293B] hover:text-[#0066FF] text-[13.5px] font-medium border border-slate-200 shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <GoogleGLogo className="w-4 h-4 flex-shrink-0" />
              <span>Write a Review</span>
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Reviews Grid - All 5 Reviews Displayed Together */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              data-reveal="fade-up"
              suppressHydrationWarning
              data-delay={`${idx * 80}`}
              className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-blue-100"
            >
              <div>
                {/* User Header */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initial Circle */}
                    <div
                      className={`w-10 h-10 rounded-full ${review.avatarBg} text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow-sm relative`}
                    >
                      {review.initial}
                      {review.isLocalGuide && (
                        <span
                          title="Local Guide"
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[9px] shadow-sm font-bold"
                        >
                          ★
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-[14.5px] font-semibold text-slate-900 leading-tight">
                          {review.name}
                        </h3>
                        {review.isLocalGuide && (
                          <span className="text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200/60 px-1.5 py-0.2 rounded">
                            Local Guide
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                        {review.reviewMeta}
                      </p>
                    </div>
                  </div>

                  <GoogleGLogo className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>

                {/* Stars and Date Row */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating
                            ? "text-[#F59E0B] fill-current"
                            : "text-slate-200 fill-current"
                          }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11.5px] text-slate-400 font-normal">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[13.5px] text-slate-700 font-normal leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified Google Customer
                </span>

                <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                  Google Maps
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
