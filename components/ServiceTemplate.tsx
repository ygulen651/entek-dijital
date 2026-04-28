"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
}) => {
  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 border-b border-black/5">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-neon" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">{subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-bold text-black leading-none tracking-tighter uppercase">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-black/60 font-sans leading-relaxed">
              {description}
            </p>
          </div>
          <Magnetic>
             <Link href="/contact" className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary-neon hover:text-black transition-all group rotate-12">
                <ArrowUpRight size={40} className="group-hover:rotate-45 transition-transform" />
             </Link>
          </Magnetic>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-black/5">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
               <h2 className="text-4xl font-heading font-bold text-black tracking-tight">Neler Sunuyoruz?</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-surface border border-black/5">
                       <CheckCircle2 className="text-primary-neon" size={20} />
                       <span className="font-sans font-bold text-sm uppercase">{feature}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-8">
               <h2 className="text-4xl font-heading font-bold text-black tracking-tight">Neden Biz?</h2>
               <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="space-y-2">
                       <h4 className="text-xl font-heading font-bold text-black uppercase">{benefit.title}</h4>
                       <p className="text-black/50 font-sans leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
         <div className="bg-black rounded-[4rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-neon/20 blur-[100px] rounded-full -mr-48 -mt-48" />
            <h2 className="text-4xl md:text-7xl font-heading font-bold text-white leading-none tracking-tighter relative z-10">
              PROJENİZİ BAŞLATMAYA <br /> HAZIR MISINIZ?
            </h2>
            <div className="flex justify-center relative z-10">
               <Magnetic>
                  <Link href="/contact" className="bg-primary-neon text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all">
                     BİZE ULAŞIN
                  </Link>
               </Magnetic>
            </div>
         </div>
      </section>
    </main>
  );
};

export default ServiceTemplate;
