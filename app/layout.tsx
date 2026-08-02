import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { Intro } from "@/app/components/Intro";
import { SiteNav } from "@/app/components/SiteNav";
import "./globals.css";

const supplyMono = Geist_Mono({
  variable: "--font-mono-supply",
  subsets: ["latin"],
});

const description =
  "Austin Leis is an interior design studio in Los Angeles working across residential, retail and hospitality interiors.";

export const metadata: Metadata = {
  metadataBase: new URL("https://austinleis.com"),
  title: "Austin Leis",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Austin Leis | Interiors | Los Angeles",
    description,
  },
  twitter: {
    card: "summary",
    title: "Austin Leis | Interiors | Los Angeles",
    description,
  },
  robots: "all",
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
    <html
      lang="en"
      data-intro="idle"
      className={supplyMono.variable}
    >
      <body>
        {children}
        <SiteNav />
        <Intro />
      </body>
    </html>
  );
}
