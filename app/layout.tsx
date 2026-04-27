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
  title: "ENTEK DIGITAL | Modern Dijital Ajans",
  description: "Yüksek performanslı, SEO uyumlu, modern dijital çözümler.",
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
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
