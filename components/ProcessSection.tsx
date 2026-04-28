"use client";

import React from "react";
import { ArrowUpRight, Search, PencilRuler, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const processes = [
  {
    id: "01",
    title: "Keşif ve Araştırma",
    description: "İş hedeflerinizi, hedef kitlenizi ve rakiplerinizi anlayarak başlıyoruz. Size özel bir yol haritası oluşturuyoruz.",
    icon: <Search className="w-8 h-8" />,
    highlight: false
  },
  {
    id: "02",
    title: "Tasarım ve Geliştirme",
    description: "Yaratıcı ekibimiz, markanızı yenilikçi tasarım konseptleriyle hayata geçiriyor. Tasarımları geliştirme ile canlandırıyoruz.",
    icon: <PencilRuler className="w-8 h-8" />,
    highlight: false
  },
  {
    id: "03",
    title: "Yayınlama ve Destek",
    description: "Sürekli destek sağlamaya, performansı izlemeye ve sürdürülebilir başarı için gerekli güncellemeleri yapmaya devam ediyoruz.",
    icon: <Rocket className="w-8 h-8" />,
    highlight: true
  }
];

const ProcessSection = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex justify-between items-end mb-20">
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-sm font-sans font-bold tracking-[0.2em] uppercase">Stratejimiz</span>
             </div>
             <h2 className="text-5xl lg:text-6xl font-heading font-black text-black">İş Sürecimiz</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Magnetic>
               <button className="flex items-center justify-center px-10 py-5 rounded-full border border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all group">
                  İLETİŞİME GEÇİN
               </button>
            </Magnetic>
            <Magnetic>
               <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                  <ArrowUpRight size={24} />
               </div>
            </Magnetic>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`process-card relative p-12 rounded-[2rem] border transition-all duration-500 group ${
                step.highlight 
                ? "border-black bg-white shadow-xl ring-1 ring-black" 
                : "border-black/5 bg-[#f9f9f9] hover:border-black/20"
              }`}
            >
              {/* Step Number Badge */}
              <div className={`absolute -top-4 right-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border ${
                step.highlight ? "bg-[#BFFF00] border-black text-black" : "bg-white border-black/10 text-black/40"
              }`}>
                {step.id}
              </div>

              <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 bg-white">
                {step.icon}
              </div>

              <h3 className="text-2xl lg:text-3xl font-heading font-black text-black mb-6">
                {step.title}
              </h3>
              
              <p className="text-black/60 leading-relaxed font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
