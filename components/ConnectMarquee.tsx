"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

const ConnectMarquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="relative flex flex-col gap-0 -rotate-2 scale-110">
        
        {/* Infinite Marquee Row */}
        <div className="bg-black py-8 md:py-12 flex overflow-hidden border-y border-white/10">
          <motion.div 
            variants={marqueeVariants}
            animate="animate"
            className="flex whitespace-nowrap"
          >
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 px-10">
                <Sparkle className="text-primary-neon fill-primary-neon w-8 h-8 md:w-12 md:h-12" strokeWidth={0.5} />
                <span className="text-4xl md:text-7xl font-heading font-bold text-white uppercase tracking-tighter">
                  HAYDİ KONUŞALIM
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ConnectMarquee;
