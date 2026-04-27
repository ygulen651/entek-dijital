"use client";

import React, { useState } from "react";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary-neon selection:text-background overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="noise-overlay" />
      <div className="bg-grid" />
      <CustomCursor />
      {!loading && (
        <SmoothScroll>
          <Navbar />
          <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-neon via-secondary-neon to-accent-neon z-[100]" />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      )}
    </body>
  );
}
