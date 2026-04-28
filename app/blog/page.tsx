"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";

const BlogPage = () => {
  return (
    <main className="bg-white min-h-screen pt-40 pb-20">
      <section className="container mx-auto px-6">
        <div className="mb-20">
           <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-neon" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Fikirler & Analizler</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-heading font-black text-black leading-none tracking-tighter uppercase">
             BLOG
           </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 border border-black/5 shadow-lg">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                     <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <Tag size={12} /> {post.category}
                     </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-black/30 uppercase tracking-widest">
                     <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h2 className="text-3xl font-heading font-black text-black group-hover:text-primary-neon transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-black/50 font-sans leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                     OKUMAYA DEVAM ET <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
