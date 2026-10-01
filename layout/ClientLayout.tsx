"use client";

import React, { useState } from "react";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ConnectMarquee from "@/components/ConnectMarquee";
import type { SiteSettings } from "@/lib/types";
import type { NavLink } from "@/layout/Navbar";

export default function ClientLayout({
  children,
  settings,
  serviceLinks,
}: {
  children: React.ReactNode;
  settings: SiteSettings;
  serviceLinks: NavLink[];
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary-neon selection:text-background overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="noise-overlay" />
      <div className="bg-grid" />
      <CustomCursor />
      {(
        <>
          <Navbar settings={settings} serviceLinks={serviceLinks} />
          <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-neon via-secondary-neon to-accent-neon z-[100]" />
          <SmoothScroll>
            <div className="flex-grow">{children}</div>
            <ConnectMarquee />
            <Footer settings={settings} serviceLinks={serviceLinks} />
          </SmoothScroll>
        </>
      )}
    </div>
  );
}
