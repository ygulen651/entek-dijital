import type { Metadata } from "next";
import { getServices, getSettings } from "@/lib/content";
import { Syne, Instrument_Sans } from "next/font/google";
import "../globals.css";
import ClientLayout from "@/layout/ClientLayout";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata, siteConfig } from "@/lib/seo";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    ...pageMetadata(settings.siteTitle, settings.siteDescription, "/"),
    metadataBase: new URL(siteConfig.url),
    title: { default: settings.siteTitle, template: "%s | Entek Digital" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    // TODO: HTML-file verification token is not a meta verification token.
    verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
    icons: { icon: "/logo-icon.png", shortcut: "/logo-icon.png", apple: "/logo-icon.png" },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, services] = await Promise.all([getSettings(), getServices()]);
  // TODO: kullanıcıdan doğrulanmış adres, telefon ve çalışma saatleri alınmalı.
  // Do not promote fallback contact details or city-centre coordinates into schema.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": ["Organization", "ProfessionalService"], "@id": siteConfig.url + "/#organization", name: siteConfig.name, url: siteConfig.url + "/", logo: siteConfig.url + "/logo-full.png", areaServed: { "@type": "City", name: "Karaman" } },
      { "@type": "WebSite", "@id": siteConfig.url + "/#website", name: siteConfig.name, url: siteConfig.url + "/", publisher: { "@id": siteConfig.url + "/#organization" }, inLanguage: siteConfig.language },
    ],
  };
  const serviceLinks = services.map((s) => ({ name: s.title, href: `/hizmetler/${s.slug}` }));

  return (
    <html
      lang="tr"
      className={`${instrumentSans.variable} ${syne.variable} h-full antialiased dark`}
    >
      <head>
        <noscript><style>{".site-preloader { display: none !important; }"}</style></noscript>
        <JsonLd data={jsonLd} />
      </head>
      <body>
        <ClientLayout settings={settings} serviceLinks={serviceLinks}>{children}</ClientLayout>
        <Analytics />
        <SpeedInsights />
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69f47ee26490501c3031981b/1jnhgv9ik';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
