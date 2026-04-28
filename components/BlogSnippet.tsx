"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

const BlogSnippet = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="space-y-4">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary-neon" />
                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Blog & Insights</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-black leading-none tracking-tighter">
                DİJİTAL <br /> DÜNYADAN <br /> HABERLER.
              </h2>
           </div>
           <Magnetic>
              <Link href="/blog" className="px-10 py-5 rounded-full border border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-3 group">
                 TÜMÜNÜ GÖR <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </Link>
           </Magnetic>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
               <Link href={`/blog/${post.slug}`}>
                 <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-xl border border-black/5">
                   <Image 
                     src={post.image} 
                     alt={post.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                 </div>
                 <div className="space-y-4">
                   <span className="text-[10px] font-medium text-black/30 uppercase tracking-[0.2em]">{post.category} — {post.date}</span>
                   <h3 className="text-2xl font-heading font-bold text-black group-hover:text-primary-neon transition-colors leading-tight">
                     {post.title}
                   </h3>
                   <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                      Daha Fazla <ArrowUpRight size={14} />
                   </div>
                 </div>
               </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSnippet;
