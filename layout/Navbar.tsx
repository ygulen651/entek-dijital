"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { name: "WORKS", href: "/projects" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center transition-colors duration-500">
               <div className="w-4 h-4 bg-white rotate-45" />
            </div>
            <span className="text-2xl font-heading font-black text-black tracking-[-0.05em]">
              Averto
            </span>
          </Link>
          <span className="hidden xl:block text-[10px] font-sans font-bold tracking-[0.2em] text-black/40 pt-1 uppercase">
            DIGITAL AGENCY ®
          </span>
        </div>

        {/* Desktop Links (Matches Layout) */}
        <div className="hidden md:flex items-center space-x-12">
           <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-sans font-bold text-black/60 hover:text-primary-neon transition-colors"
                >
                  {link.name}
                </Link>
              ))}
           </div>
           
           <div className="hidden lg:flex items-center space-x-8 border-l border-black/10 pl-8">
              <span className="text-[10px] font-bold text-black/40 uppercase">Linkedin</span>
              <span className="text-[10px] font-bold text-black/40 uppercase">Twitter</span>
              <span className="text-[10px] font-bold text-black/40 uppercase">Instagram</span>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-6 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} strokeWidth={1} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-5xl font-heading font-black text-black hover:text-primary-neon transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
