"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { useNewsletter } from "@/components/useNewsletter";
import type { SiteSettings } from "@/lib/types";
import type { NavLink } from "@/layout/Navbar";

const Footer = ({ settings, serviceLinks }: { settings: SiteSettings; serviceLinks: NavLink[] }) => {
  const newsletter = useNewsletter();
  const socials = [
    { name: "FB", href: settings.facebook },
    { name: "TW", href: settings.twitter },
    { name: "IN", href: settings.instagram },
    { name: "LI", href: settings.linkedin },
    { name: "BE", href: settings.behance },
  ].filter((s) => s.href);

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
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">
                Bültenimize <br /> Abone Olun
              </h2>
              <p className="text-white/80 font-sans max-w-xs leading-relaxed">
                En yeni projelerimizden ve dijital trendlerden haberdar olun.
              </p>
            </div>

            <form className="relative max-w-md" onSubmit={newsletter.submit}>
              <input 
                aria-label="Bülten için e-posta adresiniz"
                type="email" 
                required
                value={newsletter.email}
                onChange={(e) => newsletter.setEmail(e.target.value)}
                placeholder="E-posta adresiniz..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-5 px-8 focus:outline-none focus:border-primary-neon transition-colors font-sans text-white placeholder:text-white/40"
              />
              <button
                type="submit"
                disabled={newsletter.status === "loading"}
                className="absolute right-2 top-2 bottom-2 bg-primary-neon text-black font-bold px-8 rounded-full hover:bg-white transition-colors uppercase text-sm disabled:opacity-60"
              >
                {newsletter.status === "loading" ? "..." : "ABONE OL"}
              </button>
            </form>
            {newsletter.message && (
              <p className={`text-sm font-sans ${newsletter.status === "error" ? "text-red-400" : "text-primary-neon"}`}>
                {newsletter.message}
              </p>
            )}
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h2 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em] border-b border-white/10 pb-2">Şirket</h2>
            <ul className="space-y-4 text-white/70 font-sans text-sm font-medium">
              <li><Link href="/about" className="hover:text-primary-neon transition-colors">Hakkımızda</Link></li>
              <li><Link href="/services" className="hover:text-primary-neon transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/projects" className="hover:text-primary-neon transition-colors">Projelerimiz</Link></li>
              <li><Link href="/blog" className="hover:text-primary-neon transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-neon transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em] border-b border-white/10 pb-2">Çözümler</h4>
            <ul className="space-y-4 text-white/70 font-sans text-sm font-medium">
              {serviceLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-primary-neon transition-colors">{link.name}</Link></li>
              ))}
              <li><Link href="/services" className="hover:text-primary-neon transition-colors opacity-50 italic">Tüm Hizmetler</Link></li>
            </ul>
          </div>

          {/* Instagram Grid Section */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em] border-b border-white/10 pb-2">Instagram</h4>
            <div className="grid grid-cols-2 gap-3">
              {settings.footerInstagramImages.map((src, i) => (
                <a 
                  key={i} 
                  href={settings.instagram || "/contact"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
                >
                   <Image 
                     src={src}
                     alt="Entek Digital sosyal medya tasarımı"
                     fill sizes="(max-width: 1024px) 50vw, 12vw"
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
              <Image src="/logo-full.png" alt="Entek Digital" width={600} height={200} className="w-auto h-24 object-contain invert brightness-0" unoptimized={true} />
            </Link>
            <p className="hidden md:block text-xs text-white/60 font-sans font-bold">
              © {new Date().getFullYear()} ENTEK DIGITAL. Tüm hakları saklıdır.
            </p>
          </div>

          <div className="flex items-center gap-4">
             {socials.map((social) => (
               <a 
                 key={social.name} 
                 href={social.href} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-black hover:bg-white hover:border-white transition-all text-[10px] font-bold"
               >
                 {social.name}
               </a>
             ))}
          </div>

          <Magnetic>
             <button 
               aria-label="Sayfanın başına dön"
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
