"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="bg-[#f4f5f5] py-20 pb-32">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-sm font-sans font-medium text-black tracking-wide">Ekip Üyelerimiz</span>
             </div>
             <h2 className="text-5xl lg:text-6xl font-heading font-medium text-black tracking-tight">
               Profesyonellerimizle Tanışın
             </h2>
          </div>

          <button className="flex items-center justify-center px-6 py-3 rounded-full border border-black/20 text-black text-sm font-medium hover:bg-black hover:text-white transition-colors group">
            Tüm Üyeler
            <div className="ml-3 w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-white/20 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
