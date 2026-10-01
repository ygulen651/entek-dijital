"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, index, className }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "group relative bg-surface border border-white/5 p-10 flex flex-col justify-between transition-all duration-700 hover:bg-white/[0.02]",
        className
      )}
    >
      <div className="relative z-10">
        <div className="text-white/20 group-hover:text-primary-neon transition-colors duration-500 mb-8">
          <Icon size={40} strokeWidth={1} />
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight leading-none">
          {title}
        </h3>
        
        <p className="text-text-secondary font-sans text-sm leading-relaxed max-w-[250px]">
          {description}
        </p>
      </div>

      <div className="mt-12 overflow-hidden h-[1px] w-full bg-white/5 relative">
        <div className="absolute top-0 left-0 h-full w-full bg-primary-neon -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
      </div>
      
      {/* Background Index Number */}
      <span className="absolute top-8 right-8 text-5xl font-heading font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none">
        0{index + 1}
      </span>
    </motion.div>
  );
};

export default ServiceCard;
