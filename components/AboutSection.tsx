"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate the award stamp
      gsap.to(stampRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Section reveal animation
      gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-12 md:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="flex items-center gap-2 about-reveal">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] uppercase">Hakkımızda</span>
            </div>

            <h2 className="about-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black leading-[1.1] tracking-tight">
              Markaları Cesur Yaratıcılık ve Yenilikçi Stratejilerle Ateşliyoruz.
            </h2>

            <p className="about-reveal text-lg md:text-xl text-black/60 leading-relaxed max-w-lg font-sans">
              Profesyonel ekibimiz, dijital hedeflerinize ulaşmanıza yardımcı olmaya adanmıştır. 
              Web tasarımından markalaşmaya kadar her adımda yanınızdayız.
            </p>

            <div className="flex items-center gap-4 about-reveal pt-4">
              <Magnetic>
                <button className="flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-full border border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all group text-sm md:text-base">
                   BİZİ TANIYIN
                </button>
              </Magnetic>
              <Magnetic>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                  <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                </div>
              </Magnetic>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="about-reveal relative aspect-[4/3] rounded-3xl overflow-hidden border border-black/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Entek Team" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Award Stamp */}
            <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center about-reveal">
              <div ref={stampRef} className="relative w-full h-full flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[8px] font-bold uppercase fill-black/20 tracking-[2px]">
                    <textPath href="#circlePath">
                      • DİJİTAL ÇÖZÜM • STRATEJİK ORTAK • DİJİTAL ÇÖZÜM •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-8 h-8 md:w-12 md:h-12 bg-black flex items-center justify-center rounded-lg md:rounded-xl rotate-45">
                      <div className="w-5 h-5 md:w-8 md:h-8 border-2 border-white/20 rounded-md md:rounded-lg -rotate-45" />
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Counter Row (Added as requested) */}
        <div className="mt-20 md:mt-32 pt-12 md:pt-20 border-t border-black/5 flex flex-wrap lg:flex-nowrap justify-between gap-8 md:gap-12 about-reveal">
          <div className="text-center lg:text-left min-w-[120px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black">150+</h3>
            <p className="text-[10px] md:text-sm font-medium text-black/40 uppercase tracking-widest mt-2">Tamamlanan Projeler</p>
          </div>
          <div className="hidden lg:block w-[1px] h-20 bg-black/5" />
          <div className="text-center lg:text-left min-w-[120px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black">10+</h3>
            <p className="text-[10px] md:text-sm font-medium text-black/40 uppercase tracking-widest mt-2">Yıllık Deneyim</p>
          </div>
          <div className="hidden lg:block w-[1px] h-20 bg-black/5" />
          <div className="text-center lg:text-left min-w-[120px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black">25+</h3>
            <p className="text-[10px] md:text-sm font-medium text-black/40 uppercase tracking-widest mt-2">Sektörel Çözüm</p>
          </div>
          <div className="hidden lg:block w-[1px] h-20 bg-black/5" />
          <div className="text-center lg:text-left min-w-[120px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black">200+</h3>
            <p className="text-[10px] md:text-sm font-medium text-black/40 uppercase tracking-widest mt-2">Mutlu Müşteri</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
