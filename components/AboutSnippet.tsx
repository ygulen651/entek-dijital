"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const AboutSnippet = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
             <h2 className="text-primary-neon font-sans font-bold uppercase tracking-[0.4em] text-xs mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary-neon" />
              KURUMSAL VİZYON
            </h2>
            <h3 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-[0.9] tracking-tighter mb-8">
              STRATEJİ <br /> 
              ODAKLI <br />
              DİJİTAL <br />
              <span className="text-text-secondary italic">ÇÖZÜMLER.</span>
            </h3>
            <p className="text-text-secondary text-lg font-sans leading-relaxed mb-8">
              Entek Digital olarak, sadece estetik değil, iş sonuçlarınıza doğrudan etki eden kurumsal dijital stratejiler geliştiriyoruz. 
              Modern teknolojileri, firmanızın kurumsal kimliği ve hedefleriyle harmanlıyoruz.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { title: "Veri Odaklı Kararlar", desc: "Tüm tasarım ve geliştirme süreçlerimizi gerçek kullanıcı verilerine dayandırıyoruz." },
                 { title: "Ölçeklenebilir Altyapı", desc: "Firmanız büyürken sizinle birlikte esneyen ve gelişen teknolojik altyapılar sunuyoruz." },
                 { title: "SEO ve Performans", desc: "Google standartlarına tam uyumlu, en yüksek hız skorlarına sahip web deneyimleri." },
                 { title: "Sürdürülebilir Destek", desc: "Proje tesliminden sonra da yanınızdayız; sürekli güncelleme ve teknik destek sağlıyoruz." }
               ].map((item, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                 >
                    <CheckCircle2 className="text-primary-neon mb-4" size={24} />
                    <h4 className="text-white font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-snug">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
