import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Stores in Mananthavady, Padinjarathara & Kannur",
  description:
    "Get in touch with IDEAL IT. Visit our flagship store in Mananthavady (04935 294907 / +91 96059 32907), Padinjarathara branch (+91 99955 85195), or Kannur service center. Request a free quote for CCTV, IT repair, and networking.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Stores in Mananthavady, Padinjarathara & Kannur",
    description:
      "Find branch addresses, direct phone numbers, and WhatsApp links for our stores in Mananthavady, Padinjarathara, and Kannur.",
    url: "/contact",
    images: [
      {
        url: "/images/branches/mananthavady_store.jpg",
        width: 1200,
        height: 630,
        alt: "IDEAL IT Mananthavady Store",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
