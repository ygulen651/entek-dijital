"use client";

import React from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import RichText from "@/components/RichText";

const BlogPostView = ({ post, breadcrumbs }: { post: BlogPost; breadcrumbs?: React.ReactNode }) => {
  const router = useRouter();

  return (
    <main className="bg-white min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-surface">
        <div className="container mx-auto max-w-4xl space-y-8">
           {breadcrumbs}
           <Magnetic>
             <button 
               onClick={() => router.back()}
               className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
             >
               <ArrowLeft size={16} /> GERİ DÖN
             </button>
           </Magnetic>
           
           <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold text-primary-neon uppercase tracking-[0.2em]">
                 <span className="flex items-center gap-2"><Tag size={12} /> {post.category}</span>
                 <span className="w-1 h-1 rounded-full bg-black/10" />
                 <span className="flex items-center gap-2 text-black/40"><Calendar size={12} /> {post.date}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-black leading-tight tracking-tighter">
                {post.title}
              </h1>
           </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto max-w-5xl px-6 -mt-12">
         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
         >
            <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 1024px" className="object-cover" />
         </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-3xl px-6 pt-20">
         <RichText text={post.content} />

         {/* Author / Share */}
         <div className="mt-20 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs uppercase">
                  ED
               </div>
               <div>
                  <span className="block text-sm font-bold">{post.author || "Entek Digital Ekibi"}</span>
                  <span className="text-xs text-black/40 uppercase font-sans">İçerik Stratejisti</span>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">Paylaş:</span>
               <div className="flex gap-2">
                  {["FB", "TW", "LI"].map((s) => (
                    <button key={s} className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all font-bold text-[10px]">
                      {s}
                    </button>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default BlogPostView;
