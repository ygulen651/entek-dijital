"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowDown } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Averto delivered exceptional service at every stage of our project. Their team is responsive, professional, and dedicated to delivering real results.",
    name: "Olivia Bennett",
    role: "Creative Director, PureVibes",
    avatar: "/team/01.png"
  },
  {
    id: 2,
    text: "Working with this team was an absolute pleasure. They understood our vision perfectly and executed it with precision and creativity.",
    name: "Marcus Johnson",
    role: "CEO, TechFlow",
    avatar: "/team/02.png"
  },
  {
    id: 3,
    text: "The level of detail and commitment they bring is unmatched. Highly recommend for any digital transformation needs.",
    name: "Sarah Jenkins",
    role: "Marketing Head, Elevate",
    avatar: "/team/03.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="bg-[#f4f5f5] pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Controls (Left) */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <button 
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="text-black/40 hover:text-black transition-colors"
            >
              <ArrowUp size={20} strokeWidth={1.5} />
            </button>
            <div className="w-[1px] h-32 bg-black/10"></div>
            <button 
              onClick={() => setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="text-black/40 hover:text-black transition-colors"
            >
              <ArrowDown size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Testimonial Card (Center) */}
          <div className="flex-1 w-full relative">
             <div className="bg-[#f0f4e8] border-2 border-[#BFFF00] rounded-lg p-12 lg:p-16">
               <p className="text-2xl lg:text-3xl font-sans text-black leading-relaxed mb-12">
                 {testimonials[activeIndex].text}
               </p>
               
               <div className="flex items-center gap-4">
                 <div className="w-12 h-[1px] bg-black/30"></div>
                 <div>
                   <h4 className="text-xl font-bold text-black">{testimonials[activeIndex].name}</h4>
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
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden transition-all duration-300 border-2 
                      ${isActive ? 'border-transparent scale-110 shadow-lg grayscale-0' : 'border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`}
                  >
                    <Image 
                      src={item.avatar} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
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
