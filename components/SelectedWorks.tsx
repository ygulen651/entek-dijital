"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const worksData = [
  {
    id: "01",
    title: "Brand identity overhaul for Luxe Co.",
    image: "/works/01.png",
    tags: ["BRANDING", "MOCKUP"]
  },
  {
    id: "02",
    title: "E-Commerce platform design for shopy",
    image: "/works/02.png",
    tags: []
  },
  {
    id: "03",
    title: "Mobile app design for FitPro agency",
    image: "/works/03.png",
    tags: []
  },
  {
    id: "04",
    title: "Digital Ad campaign for FlexWear",
    image: "/works/04.png",
    tags: []
  }
];

const SelectedWorks = () => {
  return (
    <section className="bg-[#0a0a0a] relative py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-heading font-medium text-white tracking-tight">
            Selected works
          </h2>
          
          <button className="flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors group">
            See All Works
            <div className="ml-3 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-black/20 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </button>
        </div>

        {/* Works List */}
        <div className="flex flex-col gap-32">
          {worksData.map((work, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={work.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32 group`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden w-full">
                    <Image 
                      src={work.image} 
                      alt={work.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Tags Overlay */}
                    {work.tags.length > 0 && (
                      <div className="absolute bottom-6 left-6 flex gap-3 z-10">
                        {work.tags.map((tag, i) => (
                          <div 
                            key={i}
                            className="px-4 py-1.5 rounded-full border border-white/40 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/20"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className="flex items-end mb-6">
                    <span className="text-6xl lg:text-7xl font-heading font-medium text-white/30 tracking-tighter">
                      {work.id}
                    </span>
                    <span className="text-4xl text-white/30 mb-2">,</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-12 max-w-xl">
                    {work.title}
                  </h3>

                  <Magnetic>
                    <button className={`flex items-center justify-center px-6 py-3 rounded-full border transition-colors duration-300 group-hover:bg-primary-neon group-hover:border-primary-neon group-hover:text-black
                      ${index === 0 ? 'bg-primary-neon border-primary-neon text-black' : 'border-white/30 text-white'}`}
                    >
                      <span className="text-sm font-bold tracking-wide mr-3">View Full Project</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                        ${index === 0 ? 'bg-black/10' : 'border border-white/30 group-hover:border-black/20 group-hover:bg-black/10'}`}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </button>
                  </Magnetic>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;
