"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const Newsletter = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-surface p-12 lg:p-20 border border-white/5 relative overflow-hidden">
          {/* Background Decorative Line */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-neon/5 -skew-x-12 translate-x-1/2" />
          
          <div className="row flex flex-wrap lg:flex-nowrap items-center gap-12 relative z-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-tighter">Bültenimize Katılın.</h2>
              <p className="text-text-secondary text-lg font-sans">
                Günlük bültenimize abone olarak en yeni haberlerden ve fırsatlardan anında haberdar olun.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2">
               <form className="relative max-w-md ml-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="E-posta adresinizi girin"
                    className="w-full bg-white/5 border-b border-white/20 py-6 px-4 text-white focus:outline-none focus:border-primary-neon transition-colors font-sans"
                  />
                  <div className="absolute right-0 bottom-4">
                    <Magnetic>
                      <button className="w-12 h-12 bg-primary-neon flex items-center justify-center group">
                        <ArrowRight className="text-black group-hover:translate-x-1 transition-transform" size={20} />
                      </button>
                    </Magnetic>
                  </div>
               </form>
               <p className="text-right text-xs text-white/30 mt-4 font-sans">
                  Zaten abone misiniz? <a href="#" className="text-white/60 hover:text-primary-neon transition-colors">Abonelikten Ayrıl</a>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
