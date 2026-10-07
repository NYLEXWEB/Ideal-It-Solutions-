import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idealitwayanad.com"),
  title: "IDEAL IT - Computer & Security Solutions | Wayanad",
  description:
    "IDEAL IT is your trusted partner for Computer Sales & Service, CCTV & Security Systems, Networking Solutions, UPS Power Backups, and Home Automation in Mananthavady, Wayanad.",
  keywords: [
    "IDEAL IT",
    "CCTV Installation Wayanad",
    "Computer Service Mananthavady",
    "Security Camera Wayanad",
    "Networking Solutions Kerala",
    "UPS Inverter Wayanad",
    "Home Automation Wayanad",
  ],
  authors: [{ name: "IDEAL IT" }],
  openGraph: {
    title: "IDEAL IT - Computer & Security Solutions",
    description:
      "Smarter Solutions for a Safer Tomorrow. Complete IT, CCTV Security, Networking and Smart Automation in Wayanad.",
    url: "https://idealitwayanad.com",
    siteName: "IDEAL IT",
    images: [
      {
        url: "/images/hero_cctv.jpg",
        width: 1200,
        height: 630,
        alt: "IDEAL IT Security and IT Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "IDEAL IT",
  image: "https://idealitwayanad.com/images/hero_cctv.jpg",
  "@id": "https://idealitwayanad.com",
  url: "https://idealitwayanad.com",
  telephone: "+919805932907",
  email: "idealitwayanad@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Susheelam Building, Mysore Road",
    addressLocality: "Mananthavady",
    addressRegion: "Kerala",
    postalCode: "670645",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.8037",
    longitude: "76.0035",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/eKaYPgcWsdFsBaMs7?g_st=aw",
    "https://instagram.com",
    "https://facebook.com",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-800">
        {children}
      </body>
    </html>
  );
}
