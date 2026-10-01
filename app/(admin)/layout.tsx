import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import "../globals.css";
import AdminShell from "@/components/admin/AdminShell";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Yönetim Paneli | Entek Digital",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${instrumentSans.variable} ${syne.variable} antialiased`}>
      <body className="font-sans">
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
