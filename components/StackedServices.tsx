"use client";

import React from "react";
import { ArrowUpRight, Hexagon, Component, Sparkles } from "lucide-react";

const servicesData = [
  {
    id: "01",
    title: "Tasarım",
    description: "İşletmenizin dijital dünyada gelişmesine yardımcı olmak için tasarlanmış kapsamlı dijital pazarlama hizmetleri sunuyoruz.",
    icon: <Hexagon className="w-12 h-12 text-primary-neon" strokeWidth={1} />,
    items: [
      "1. Grafik Tasarım",
      "2. Marka Kimliği",
      "3. Web ve Dijital Tasarım",
    ]
  },
  {
    id: "02",
    title: "Geliştirme",
    description: "Modern teknolojiler kullanarak işletmenize özel, yüksek performanslı ve ölçeklenebilir dijital çözümler üretiyoruz.",
    icon: <Component className="w-12 h-12 text-primary-neon" strokeWidth={1} />,
    items: [
      "1. E-ticaret Geliştirme",
      "2. Özel Web Sitesi Yazılımı",
      "3. Responsive Web Tasarımı",
    ]
  },
  {
    id: "03",
    title: "Pazarlama",
    description: "Markanızın görünürlüğünü artırmak ve hedef kitlenize ulaşmak için veriye dayalı stratejiler uyguluyoruz.",
    icon: <Sparkles className="w-12 h-12 text-primary-neon" strokeWidth={1} />,
    items: [
      "1. Teknik SEO",
      "2. Sayfa İçi Optimizasyon",
      "3. SEO Denetimi ve Analizi",
    ]
  }
];

const StackedServices = () => {
  return (
    <section className="bg-[#0a0a0a] relative py-32">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-sm font-sans font-medium text-white tracking-wide">Hizmetlerimiz</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-heading font-medium text-white">
              Size Neler Sunuyoruz?
            </h2>
          </div>
          
          <button className="flex items-center justify-center px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors group">
            Tüm Hizmetleri Gör
            <div className="ml-3 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-black/20 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </button>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col pb-32">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="sticky w-full bg-[#111] pt-16 pb-20 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] border-t border-white/5 rounded-t-3xl"
              style={{ top: `calc(10vh + ${index * 60}px)` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <span className="text-white text-xl font-medium">({service.id})</span>
                  
                  <div className="hidden lg:block mt-32">
                    <span className="text-white/40 text-sm font-medium mb-4 block">Detayları Gör</span>
                    <div className="w-24 h-24 border border-primary-neon flex items-center justify-center group-hover:bg-primary-neon/10 transition-colors cursor-pointer">
                      <ArrowUpRight className="w-12 h-12 text-primary-neon" strokeWidth={1} />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-9">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-6xl lg:text-[7rem] font-medium text-white tracking-tight leading-none">
                      {service.title}
                    </h3>
                    <div className="hidden md:block">
                      {service.icon}
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-lg max-w-xl mb-16 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-col w-full">
                    {service.items.map((item, i) => (
                      <div 
                        key={i} 
                        className={`py-6 border-t border-white/10 text-white text-xl lg:text-2xl font-medium ${i === service.items.length - 1 ? 'border-b border-white/10' : ''}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Mobile Show Details */}
                  <div className="block lg:hidden mt-12">
                    <span className="text-white/40 text-sm font-medium mb-4 block">Detayları Gör</span>
                    <div className="w-16 h-16 border border-primary-neon flex items-center justify-center">
                      <ArrowUpRight className="w-8 h-8 text-primary-neon" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackedServices;
