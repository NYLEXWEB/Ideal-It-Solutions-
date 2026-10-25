import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
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
  title: {
    default: "Best CCTV Installation & Computer Services in Wayanad | IDEAL IT",
    template: "%s | IDEAL IT Wayanad",
  },
  description:
    "IDEAL IT is Wayanad's #1 trusted provider for CCTV & IP Security Camera Installation, Chip-Level Laptop & Computer Repair, Optical Fiber Networking, UPS Power Backup, and Smart Home Automation in Mananthavady, Padinjarathara & Kannur.",
  keywords: [
    "Best CCTV Installation Wayanad",
    "Best Computer Service Mananthavady",
    "Best Security Camera Dealers Wayanad",
    "CCTV Installation Wayanad",
    "Security Camera Installation Mananthavady",
    "Computer Sales and Service Wayanad",
    "Laptop Repair Mananthavady",
    "Optical Fiber Networking Wayanad",
    "Home Automation Wayanad",
    "Zebronics Service Center Kannur",
    "UPS Inverter Power Backup Wayanad",
    "Hikvision CCTV Dealers Wayanad",
    "Dahua Security Camera Kerala",
  ],
  authors: [{ name: "IDEAL IT" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/ideal_it_logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/images/ideal_it_logo.png"],
    apple: [
      { url: "/images/ideal_it_logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Best CCTV Installation & Computer Services in Wayanad | IDEAL IT",
    description:
      "Wayanad's trusted partner for CCTV Security, Chip-Level Laptop Repair, Optical Fiber Networking, and Smart Home Automation.",
    url: "https://idealitwayanad.com",
    siteName: "IDEAL IT Solutions",
    images: [
      {
        url: "/images/hero_cctv.jpg",
        width: 1200,
        height: 630,
        alt: "IDEAL IT Security and Computer Solutions Wayanad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV Installation & Computer Service | IDEAL IT Wayanad",
    description:
      "Complete CCTV security systems, laptop motherboard repairs, networking, and home automation in Wayanad & Kannur.",
    images: ["/images/hero_cctv.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://idealitwayanad.com/#website",
      url: "https://idealitwayanad.com",
      name: "IDEAL IT Solutions",
      description: "CCTV Installation, Security Systems & Computer Hardware Services in Wayanad & Kannur",
      inLanguage: "en-IN",
    },
    {
      "@type": ["LocalBusiness", "SecuritySystemSupplier", "ComputerStore"],
      "@id": "https://idealitwayanad.com/#mananthavady",
      name: "IDEAL IT - Mananthavady (Flagship Store)",
      image: "https://idealitwayanad.com/images/branches/mananthavady_store.jpg",
      url: "https://idealitwayanad.com",
      telephone: "+919605932907",
      email: "idealcomputersmntdy@gmail.com",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suseelam Building, Mysore Road",
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
      areaServed: [
        { "@type": "City", name: "Mananthavady" },
        { "@type": "AdministrativeArea", name: "Wayanad" },
        { "@type": "City", name: "Kalpetta" },
        { "@type": "City", name: "Sulthan Bathery" },
        { "@type": "City", name: "Panamaram" }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT & Security Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CCTV & IP Surveillance Camera Installation",
              description: "Full color night vision IP & HD cameras, NVR/DVR storage, remote smartphone live monitoring, and AI motion detection."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Computer Sales & Chip-Level Motherboard Repair",
              description: "Sales of branded laptops & custom desktop PCs, chip-level BGA repairs, SSD upgrades, and data recovery."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Optical Fiber & Structured Network Installation",
              description: "Enterprise Cat6 cabling, optical fiber fusion splicing, server racks, and mesh Wi-Fi access points."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Smart Home Automation & Video Door Phones",
              description: "Smart switches, biometric digital door locks, two-way HD video door intercoms, and motorized gate systems."
            }
          }
        ]
      },
      sameAs: [
        "https://maps.app.goo.gl/eKaYPgcWsdFsBaMs7?g_st=aw",
        "https://instagram.com",
        "https://facebook.com",
      ],
    },
    {
      "@type": ["LocalBusiness", "ComputerStore"],
      "@id": "https://idealitwayanad.com/#padinjarathara",
      name: "IDEAL IT - Padinjarathara Branch",
      image: "https://idealitwayanad.com/images/branches/padinjarathara_office.jpg",
      url: "https://idealitwayanad.com/contact",
      telephone: "+919995585195",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mundunadakkal Building, Opposite Panchayath Office",
        addressLocality: "Padinjarathara",
        addressRegion: "Kerala",
        postalCode: "673575",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "11.6667",
        longitude: "75.9833",
      },
      areaServed: [
        { "@type": "City", name: "Padinjarathara" },
        { "@type": "AdministrativeArea", name: "Wayanad" }
      ]
    },
    {
      "@type": ["LocalBusiness", "ComputerRepairService"],
      "@id": "https://idealitwayanad.com/#kannur",
      name: "IDEAL SOLUTIONS - Kannur (Authorized Service Center)",
      image: "https://idealitwayanad.com/images/branches/kannur_service.jpg",
      url: "https://idealitwayanad.com/warranty",
      telephone: "+918129059275",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, Topland Grand Bazar Complex, Bellard Road",
        addressLocality: "Kannur",
        addressRegion: "Kerala",
        postalCode: "670001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "11.8745",
        longitude: "75.3704",
      },
      areaServed: [
        { "@type": "City", name: "Kannur" },
        { "@type": "AdministrativeArea", name: "Kannur District" }
      ],
      description: "Authorized warranty service center for Zebronics, Fingers, and Artis hardware; out-of-warranty CCTV and electronics diagnosis."
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/images/ideal_it_logo.png" />
        <link rel="shortcut icon" href="/images/ideal_it_logo.png" />
        <link rel="apple-touch-icon" href="/images/ideal_it_logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-800">
        {children}
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
