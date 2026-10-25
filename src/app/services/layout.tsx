import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCTV Installation, Computer Sales & Networking Services",
  description:
    "Explore professional CCTV security camera installation, precision chip-level laptop repair, optical fiber structured networking, UPS power backups, and smart home automation in Wayanad & Kannur.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "CCTV Installation, Computer Sales & Networking Services",
    description:
      "Enterprise & residential CCTV camera systems, chip-level laptop servicing, high-speed WiFi fiber networking, and smart automation across Wayanad and Kannur.",
    url: "/services",
    images: [
      {
        url: "/images/services/cctv_security.png",
        width: 1200,
        height: 630,
        alt: "IDEAL IT CCTV and Security Systems Wayanad",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What locations do you cover for CCTV installation and IT service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide on-site CCTV installation, networking, and computer services across Wayanad District (including Mananthavady, Padinjarathara, Kalpetta, Sulthan Bathery, Panamaram, Meenangadi, and Vythiri) as well as authorized brand warranty support in Kannur, Kerala.",
      },
    },
    {
      "@type": "Question",
      name: "Which CCTV camera brands does IDEAL IT supply and install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install genuine surveillance hardware from top global brands including Hikvision, Dahua, CP Plus, Uniview, and Honeywell, providing 24/7 color night vision, AI motion detection, NVR storage, and mobile streaming.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair laptops and custom desktop computers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our certified technicians offer precision BGA chip-level motherboard diagnostics, screen & keyboard replacements, high-speed NVMe SSD/RAM upgrades, and data recovery for all leading brands including HP, Dell, Lenovo, Asus, and Acer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I monitor my CCTV cameras on my mobile phone from anywhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our IP and HD CCTV setups include secure cloud/P2P mobile configuration, allowing live remote streaming and playback on iOS and Android smartphones from anywhere in the world.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a free site survey for security or networking in Wayanad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can call us directly at 04935 294907 or message our team on WhatsApp at +91 96059 32907 to arrange an on-site property inspection and custom quotation.",
      },
    },
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
