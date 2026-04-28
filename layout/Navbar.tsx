"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { name: "ÇALIŞMALAR", href: "/projects" },
  { 
    name: "HİZMETLER", 
    href: "/services",
    subLinks: [
      { name: "Web Tasarım", href: "/hizmetler/web-tasarim" },
      { name: "Özel Yazılım", href: "/hizmetler/ozel-yazilim" },
      { name: "Dijital Pazarlama", href: "/hizmetler/dijital-pazarlama" },
      { name: "SEO Optimizasyonu", href: "/hizmetler/seo-optimizasyonu" },
    ]
  },
  { name: "HAKKIMIZDA", href: "/about" },
  { name: "BLOG", href: "/blog" },
  { name: "İLETİŞİM", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubMenu = (name: string) => {
    setActiveSubMenu(activeSubMenu === name ? null : name);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-black/5 py-4"
            : "bg-transparent py-8"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link href="/" className="group flex items-center">
              <Image src="/logo-full.png" alt="Entek Digital" width={500} height={150} className="w-auto h-[100px] object-contain origin-left" priority unoptimized={true} />
            </Link>
            <span className="hidden xl:block text-[10px] font-sans font-bold tracking-[0.2em] text-black/40 pt-1 uppercase">
              DİJİTAL AJANS ®
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
             <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className="text-xs font-sans font-bold text-black/60 hover:text-primary-neon transition-colors flex items-center gap-1 uppercase"
                    >
                      {link.name}
                      {link.subLinks && <ChevronDown size={10} />}
                    </Link>
                    
                    {link.subLinks && (
                      <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white border border-black/5 shadow-2xl rounded-2xl p-6 min-w-[240px] flex flex-col gap-3">
                          {link.subLinks.map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href}
                              className="text-[10px] font-bold text-black/40 hover:text-primary-neon uppercase tracking-widest transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
             </div>
             
             <div className="hidden lg:flex items-center space-x-8 border-l border-black/10 pl-8">
                <span className="text-[10px] font-bold text-black/40 uppercase">Linkedin</span>
                <span className="text-[10px] font-bold text-black/40 uppercase">Twitter</span>
                <a 
                  href="https://www.instagram.com/entek.digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] font-bold text-black/40 uppercase hover:text-primary-neon transition-colors"
                >
                  Instagram
                </a>
             </div>

             <div className="hidden lg:block text-[10px] font-bold text-black/40 uppercase border-l border-black/10 pl-8">
                NEW YORK, US
             </div>
          </div>

          {/* Burger Menu Button */}
          <button
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-primary-neon hover:text-white transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-[10000] flex flex-col p-6 overflow-y-auto"
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center mb-12">
               <Image src="/logo-full.png" alt="Entek Digital" width={500} height={200} className="w-auto h-24 object-contain" unoptimized={true} />
               <button
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
               >
                  <X size={24} strokeWidth={1} />
               </button>
            </div>

            {/* Main Links Area */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center justify-between group">
                       {link.subLinks ? (
                         <button
                           className="text-4xl sm:text-5xl font-heading font-black text-black hover:text-primary-neon transition-colors uppercase tracking-tighter block text-left"
                           onClick={() => toggleSubMenu(link.name)}
                         >
                           {link.name}
                         </button>
                       ) : (
                         <Link
                           href={link.href}
                           className="text-4xl sm:text-5xl font-heading font-black text-black hover:text-primary-neon transition-colors uppercase tracking-tighter block"
                           onClick={() => setIsOpen(false)}
                         >
                           {link.name}
                         </Link>
                       )}
                       {link.subLinks && (
                          <button 
                            onClick={() => toggleSubMenu(link.name)}
                            className={cn(
                              "w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all",
                              activeSubMenu === link.name ? "bg-black text-white border-black" : ""
                            )}
                          >
                             <ChevronDown size={20} className={cn("transition-transform", activeSubMenu === link.name ? "rotate-180" : "")} />
                          </button>
                       )}
                    </div>

                    {/* Sublinks Accordion */}
                    <AnimatePresence>
                       {link.subLinks && activeSubMenu === link.name && (
                         <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="overflow-hidden bg-black/5 rounded-3xl mt-4"
                         >
                            <div className="p-6 flex flex-col gap-4">
                               {link.subLinks.map((sub) => (
                                 <Link 
                                   key={sub.name} 
                                   href={sub.href}
                                   className="text-lg font-sans font-bold text-black/60 hover:text-primary-neon uppercase tracking-tight"
                                   onClick={() => setIsOpen(false)}
                                 >
                                   {sub.name}
                                 </Link>
                               ))}
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Area */}
            <div className="mt-auto border-t border-black/5 pt-12 pb-6 grid grid-cols-2 gap-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="flex flex-col gap-4"
               >
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Takip Edin</span>
                   <div className="flex flex-col gap-2">
                      <a 
                        href="https://www.instagram.com/entek.digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-sans font-bold text-black/60 uppercase hover:text-primary-neon transition-colors"
                      >
                        Instagram
                      </a>
                      <span className="text-sm font-sans font-bold text-black/60 uppercase">Linkedin</span>
                      <span className="text-sm font-sans font-bold text-black/60 uppercase">Twitter</span>
                   </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="flex flex-col gap-4"
               >
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Lokasyon</span>
                  <p className="text-sm font-sans font-bold text-black/60 uppercase leading-relaxed">
                     İSTANBUL, TR <br />
                     NEW YORK, US
                  </p>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
