import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { ViewTransition } from "react";
import { MobileMenu } from "@/app/components/MobileMenu";
import { Reveal } from "@/app/components/Reveal";
import { SiteNav } from "@/app/components/SiteNav";
import { JsonLd, personSchema, siteDescription, siteName, siteUrl, websiteSchema } from "@/app/lib/site";
import "./globals.css";

const supplyMono = Geist_Mono({
  variable: "--font-mono-supply",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Austin Leis | Photographer | Los Angeles",
    template: "%s | Austin Leis, Photographer",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "Austin Leis",
    "photographer",
    "Los Angeles photographer",
    "interiors photography",
    "architecture photography",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: "/",
    title: "Austin Leis | Photographer | Los Angeles",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Leis | Photographer | Los Angeles",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  referrer: "no-referrer",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={supplyMono.variable}>
      <body>
        <JsonLd schema={[personSchema(), websiteSchema()]} />
        <ViewTransition default="page">{children}</ViewTransition>
        <SiteNav />
        <MobileMenu />
        <Reveal />
      </body>
    </html>
  );
}
