import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/layout/ClientLayout";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karaman Dijital Ajans | ENTEK DIGITAL - Web Tasarım & SEO",
  description: "Karaman'da yüksek performanslı web tasarımı, SEO optimizasyonu ve modern dijital çözümler sunan öncü bir dijital ajansız. Karaman yazılım ve reklam çözümleri için bize ulaşın.",
  keywords: ["karaman dijital ajans", "karaman web tasarım", "karaman yazılım", "karaman reklam ajansı", "karaman seo", "entek digital karaman"],
  authors: [{ name: "Entek Digital" }],
  openGraph: {
    title: "Karaman Dijital Ajans | ENTEK DIGITAL",
    description: "Karaman'da modern dijital çözümler, web tasarım ve SEO hizmetleri.",
    url: "https://entek.digital",
    siteName: "Entek Digital",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaman Dijital Ajans | ENTEK DIGITAL",
    description: "Karaman'da modern dijital çözümler, web tasarım ve SEO hizmetleri.",
  },
  alternates: {
    canonical: "https://entek.digital",
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
  verification: {
    google: "googlec6f3609bc3b74ee4", // Using the provided verification code
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Entek Digital Karaman",
  "image": "https://entek.digital/logo-full.png",
  "@id": "https://entek.digital",
  "url": "https://entek.digital",
  "telephone": "+905304180770",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Merkez",
    "addressLocality": "Karaman",
    "postalCode": "70000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.1810,
    "longitude": 33.2222
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/entek.digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    "https://www.linkedin.com/company/entekdigital"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${instrumentSans.variable} ${syne.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
