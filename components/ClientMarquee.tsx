"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "WEB TASARIM", "SOSYAL MEDYA", "DİJİTAL REKLAM", "MARKA KİMLİĞİ", "SEO OPTİMİZASYON", "İÇERİK PAZARLAMA"
];

const ClientMarquee = () => {
  return (
    <section className="py-24 border-b border-black/5 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-[10px] font-sans font-bold tracking-[0.3em] text-black/20 uppercase text-center">
          NELER YAPIYORUZ?
        </p>
      </div>

      <div className="flex relative mt-10">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-4xl lg:text-7xl font-heading font-black text-black/[0.03] hover:text-primary-neon/20 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Mask */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default ClientMarquee;
