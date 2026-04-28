"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const BlogPostDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Yazı Bulunamadı</h1>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-surface">
        <div className="container mx-auto max-w-4xl space-y-8">
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
              <h1 className="text-4xl md:text-6xl font-heading font-black text-black leading-tight tracking-tighter">
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
            <Image src={post.image} alt={post.title} fill className="object-cover" />
         </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-3xl px-6 pt-20">
         <div className="prose prose-xl prose-slate max-w-none font-sans text-black/70 leading-relaxed space-y-8">
            {post.content.split('\n').map((paragraph, i) => {
              if (paragraph.trim().startsWith('**')) {
                return <h3 key={i} className="text-3xl font-heading font-black text-black pt-4">{paragraph.replace(/\*\*/g, '')}</h3>;
              }
              if (paragraph.trim().startsWith('-')) {
                return <li key={i} className="ml-6 list-disc font-bold text-black">{paragraph.replace('-', '').trim()}</li>;
              }
              return paragraph.trim() ? <p key={i}>{paragraph.trim()}</p> : null;
            })}
         </div>

         {/* Author / Share */}
         <div className="mt-20 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs uppercase">
                  ED
               </div>
               <div>
                  <span className="block text-sm font-bold">Entek Digital Ekibi</span>
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

export default BlogPostDetail;
