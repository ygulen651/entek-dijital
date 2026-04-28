"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-neon/10 blur-[150px] rounded-full -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-neon/5 blur-[150px] rounded-full -ml-40 -mb-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-white/10">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter">
                Bültenimize <br /> Abone Olun
              </h2>
              <p className="text-white/80 font-sans max-w-xs leading-relaxed">
                En yeni projelerimizden ve dijital trendlerden haberdar olun.
              </p>
            </div>

            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="E-posta adresiniz..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-5 px-8 focus:outline-none focus:border-primary-neon transition-colors font-sans text-white placeholder:text-white/40"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary-neon text-black font-bold px-8 rounded-full hover:bg-white transition-colors uppercase text-sm">
                ABONE OL
              </button>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em] border-b border-white/10 pb-2">Şirket</h4>
            <ul className="space-y-4 text-white/70 font-sans text-sm font-medium">
              <li><Link href="/about" className="hover:text-primary-neon transition-colors">Hakkımızda</Link></li>
              <li><Link href="/services" className="hover:text-primary-neon transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/projects" className="hover:text-primary-neon transition-colors">Projelerimiz</Link></li>
              <li><Link href="/blog" className="hover:text-primary-neon transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-neon transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em] border-b border-white/10 pb-2">Çözümler</h4>
            <ul className="space-y-4 text-white/70 font-sans text-sm font-medium">
              <li><Link href="/hizmetler/web-tasarim" className="hover:text-primary-neon transition-colors">Web Tasarım</Link></li>
              <li><Link href="/hizmetler/ozel-yazilim" className="hover:text-primary-neon transition-colors text-primary-neon">Özel Yazılım</Link></li>
              <li><Link href="/hizmetler/dijital-pazarlama" className="hover:text-primary-neon transition-colors">Dijital Pazarlama</Link></li>
              <li><Link href="/hizmetler/seo-optimizasyonu" className="hover:text-primary-neon transition-colors">SEO Optimizasyonu</Link></li>
              <li><Link href="/services" className="hover:text-primary-neon transition-colors opacity-50 italic">Tüm Hizmetler</Link></li>
            </ul>
          </div>

          {/* Instagram Grid Section */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em] border-b border-white/10 pb-2">Instagram</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "/sosyal/entek 3_.png",
                "/sosyal/entek 7.png",
                "/sosyal/entek 10.png",
                "/sosyal/tabaela. tasarımı_.png"
              ].map((src, i) => (
                <a 
                  key={i} 
                  href="https://www.instagram.com/entek.digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
                >
                   <Image 
                     src={src}
                     alt={`Entek Social ${i}`}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-primary-neon/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image src="/logo-full.png" alt="Entek Digital" width={300} height={100} className="w-auto h-12 object-contain invert brightness-0" unoptimized={true} />
            </Link>
            <p className="hidden md:block text-xs text-white/60 font-sans font-bold">
              © {new Date().getFullYear()} ENTEK DIGITAL. Tüm hakları saklıdır.
            </p>
          </div>

          <div className="flex items-center gap-4">
             {["FB", "TW", "IN", "BE"].map((name, idx) => (
               <a 
                 key={idx} 
                 href={name === "IN" ? "https://www.instagram.com/entek.digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" : "#"} 
                 target={name === "IN" ? "_blank" : undefined}
                 rel={name === "IN" ? "noopener noreferrer" : undefined}
                 className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white transition-all text-[10px] font-black"
               >
                 {name}
               </a>
             ))}
          </div>

          <Magnetic>
             <button 
               onClick={scrollToTop}
               className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary-neon hover:text-black transition-all text-white hover:border-primary-neon"
             >
               <ArrowUp size={24} />
             </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
