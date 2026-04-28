"use client";

import React, { useState } from "react";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ConnectMarquee from "@/components/ConnectMarquee";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary-neon selection:text-background overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="noise-overlay" />
      <div className="bg-grid" />
      <CustomCursor />
      {!loading && (
        <>
          <Navbar />
          <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-neon via-secondary-neon to-accent-neon z-[100]" />
          <SmoothScroll>
            <main className="flex-grow">{children}</main>
            <ConnectMarquee />
            <Footer />
          </SmoothScroll>
        </>
      )}
    </div>
  );
}
