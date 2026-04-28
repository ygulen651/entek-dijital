"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkle } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const words = ["WEB TASARIM", "GRAFİK TASARIM", "REKLAM", "DİJİTAL AJANS", "ÖZEL YAZILIM"];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Logic
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

      tl.from(".reveal-text", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
      })
      .from(".star-icon", {
        rotation: 360,
        scale: 0,
        opacity: 0,
        duration: 2,
      }, "-=1.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col bg-background px-6 pt-40 pb-20 overflow-hidden"
    >
      {/* Background Watermark Text - Reverted to single word watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[30vw] font-heading font-bold text-black/[0.03] uppercase tracking-tighter whitespace-nowrap">
          {words[currentWordIndex]}
        </h2>
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* Top Header Row - Reverted to Typewriter */}
        <div className="flex justify-between items-end mb-12 lg:mb-20">
          <div className="flex flex-col items-start w-full">
             <div className="w-full">
                <h1 className="reveal-text text-[7vw] lg:text-[6vw] font-heading font-bold text-black leading-none tracking-tighter uppercase whitespace-nowrap">
                   {displayText}<span className="text-primary-neon animate-pulse">|</span>
                </h1>
             </div>
          </div>
          
          <div className="star-icon shrink-0">
            <Sparkle className="text-primary-neon w-20 h-20 lg:w-32 lg:h-32 fill-primary-neon" strokeWidth={0.2} />
          </div>
        </div>

        {/* Main Content Row - Image Removed as requested */}
        <div className="flex flex-col items-start gap-12 relative mt-12 lg:mt-20">
          
          <div className="max-w-2xl space-y-12">
             <div className="overflow-hidden">
                <p className="reveal-text text-2xl lg:text-3xl text-text-secondary leading-relaxed font-sans">
                   Entek, sadelik ve zarafetin özünü savunan özel bir yaratıcı ekip 
                   tarafından tasarlanmış bir dijital ajanstır.
                </p>
             </div>

             <div className="flex items-center gap-6 reveal-text">
                <Magnetic>
                   <button className="flex items-center justify-center px-12 py-6 rounded-full border border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all group text-lg">
                      İLETİŞİME GEÇELİM
                   </button>
                </Magnetic>
                <Magnetic>
                   <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                      <ArrowUpRight size={32} />
                   </div>
                </Magnetic>
             </div>
          </div>

          {/* New Bottom Content to fill space */}
          <div className="w-full pt-20 border-t border-black/5 flex flex-wrap justify-between items-end gap-12 reveal-text">
             <div className="flex flex-col gap-4">
                 <span className="text-[10px] font-medium text-black/30 uppercase tracking-[0.2em]">Dijital Dünyada Lider Çözümler ®</span>
                <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                   {/* Placeholder logos using simple text for now */}
                   <span className="text-xl font-heading font-bold">GOOGLE</span>
                   <span className="text-xl font-heading font-bold">META</span>
                   <span className="text-xl font-heading font-bold">AMAZON</span>
                   <span className="text-xl font-heading font-bold">APPLE</span>
                </div>
             </div>

             <div className="flex items-center gap-16">
                <div>
                   <h3 className="text-4xl font-heading font-bold text-black">150+</h3>
                   <p className="text-[10px] font-medium text-black/30 uppercase tracking-[0.1em]">Tamamlanan Projeler</p>
                </div>
                <div>
                   <h3 className="text-4xl font-heading font-bold text-black">25+</h3>
                   <p className="text-[10px] font-medium text-black/30 uppercase tracking-[0.1em]">Sektörel Çözüm</p>
                </div>
                <div>
                   <h3 className="text-4xl font-heading font-bold text-black">10+</h3>
                   <p className="text-[10px] font-medium text-black/30 uppercase tracking-[0.1em]">Yıllık Deneyim</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
