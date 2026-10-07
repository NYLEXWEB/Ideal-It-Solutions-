"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import GallerySection from "@/components/GallerySection";
import WarrantySection from "@/components/WarrantySection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (service?: string) => {
    setSelectedService(service);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0066FF] selection:text-white font-sans antialiased text-[#1E293B]">
      {/* Top Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Brand / Partner Logos */}
        <BrandLogos />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection onSelectService={(service) => handleOpenQuote(service)} />

        {/* 5. Trust / Why Choose Us */}
        <TrustSection onOpenQuote={() => handleOpenQuote()} />

        {/* 6. Recent Projects / Gallery */}
        <GallerySection onOpenQuote={() => handleOpenQuote()} />

        {/* 7. Warranty Support */}
        <WarrantySection />

        {/* 8. Google Reviews */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloating />

      {/* Interactive Get a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />
    </div>
  );
}
