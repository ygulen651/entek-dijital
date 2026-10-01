import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Sans, Syne } from "next/font/google";
import NotFound from "./(site)/not-found";
import "./globals.css";

const instrument = Instrument_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-instrument" });
const syne = Syne({ subsets: ["latin", "latin-ext"], variable: "--font-syne" });
export const metadata: Metadata = { title: "Sayfa bulunamadı | Entek Digital", robots: { index: false, follow: false } };

// Multiple root layouts require a routing-level 404 for unmatched URLs.
export default function GlobalNotFound() {
  return <html lang="tr" className={`${instrument.variable} ${syne.variable} antialiased`}><body className="font-sans">
    <header className="container mx-auto px-6 pt-10"><Link href="/" className="font-heading font-bold text-2xl">ENTEK DIGITAL</Link></header>
    <NotFound />
  </body></html>;
}
