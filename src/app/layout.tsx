import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCallButton } from "@/components/layout/MobileCallButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/data/site";

const inter = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Fraunces({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Real Estate Consultants in Faridabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GT Spaces",
    "real estate consultant Faridabad",
    "Skynest Towers Sector 80",
    "BPTP Skynest Towers",
    "3 BHK 4 BHK Faridabad",
    "property consultant Neharpar",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Real Estate Consultants in Faridabad`,
    description: siteConfig.description,
    images: [
      {
        url: "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Real Estate Consultants in Faridabad`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
    },
    areaServed: "Faridabad, Delhi NCR",
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <JsonLd data={orgSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
