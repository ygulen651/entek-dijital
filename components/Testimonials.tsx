"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowDown } from "lucide-react";
import type { Testimonial } from "@/lib/types";


const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[#f4f5f5] pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Controls (Left) */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <button 
              aria-label="Önceki müşteri görüşü"
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="text-black/40 hover:text-black transition-colors"
            >
              <ArrowUp size={20} strokeWidth={1.5} />
            </button>
            <div className="w-[1px] h-32 bg-black/10"></div>
            <button 
              aria-label="Sonraki müşteri görüşü"
              onClick={() => setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="text-black/40 hover:text-black transition-colors"
            >
              <ArrowDown size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Testimonial Card (Center) */}
          <div className="flex-1 w-full relative">
             <div className="bg-[#f0f4e8] border-2 border-[#BFFF00] rounded-lg p-8 md:p-12 lg:p-16">
               <p className="text-lg md:text-2xl lg:text-3xl font-sans text-black leading-relaxed mb-8 md:mb-12">
                 {testimonials[activeIndex].text}
               </p>
               
               <div className="flex items-center gap-4">
                 <div className="w-12 h-[1px] bg-black/30"></div>
                 <div>
                   <p className="text-xl font-bold text-black">{testimonials[activeIndex].name}</p>
                   <span className="text-sm text-black/50">{testimonials[activeIndex].role}</span>
                 </div>
               </div>
             </div>
          </div>

          {/* Avatars (Right) */}
          <div className="flex flex-row lg:flex-col items-center gap-6">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div key={item.id} className="relative flex items-center">
                  {/* Active Indicator Arrow */}
                  {isActive && (
                    <div className="hidden lg:block absolute -left-8 text-black">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-black"></div>
                    </div>
                  )}
                  
                  <button 
                    aria-label={`${item.name} görüşünü göster`}
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden transition-all duration-300 border-2 
                      ${isActive ? 'border-transparent scale-110 shadow-lg grayscale-0' : 'border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`}
                  >
                    {item.avatar && <Image 
                      src={item.avatar} 
                      alt={item.name}
                      fill sizes="(max-width: 1024px) 64px, 80px"
                      className="object-cover"
                    />}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
