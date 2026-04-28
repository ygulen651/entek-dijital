"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, ShieldCheck, Zap, Search, Cpu } from "lucide-react";

const features = [
  {
    title: "Özel Web Yazılım",
    desc: "İşinize özel, ölçeklenebilir ve yüksek performanslı web tabanlı yazılım çözümleri geliştiriyoruz.",
    icon: Globe,
    delay: 0.1
  },
  {
    title: "Mobil Uyumlu Tasarım",
    desc: "Tüm cihazlarda kusursuz çalışan, kullanıcı dostu ve estetik arayüzler tasarlıyoruz.",
    icon: Smartphone,
    delay: 0.2
  },
  {
    title: "SEO Optimizasyonu",
    desc: "Google ve diğer arama motorlarında üst sıralarda yer almanız için teknik ve içerik odaklı çalışmalar yapıyoruz.",
    icon: Search,
    delay: 0.3
  },
  {
    title: "Üst Düzey Güvenlik",
    desc: "Yazılımlarınızı en güncel güvenlik protokolleri ile koruyor, verilerinizi güvence altına alıyoruz.",
    icon: ShieldCheck,
    delay: 0.4
  },
  {
    title: "API Entegrasyonları",
    desc: "Mevcut sistemlerinizi diğer platformlarla sorunsuz konuşturuyor, veri akışını otomatikleştiriyoruz.",
    icon: Zap,
    delay: 0.5
  },
  {
    title: "Hızlı Altyapı",
    desc: "Next.js ve modern teknolojiler kullanarak en hızlı yükleme sürelerine sahip web deneyimleri sunuyoruz.",
    icon: Cpu,
    delay: 0.6
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-primary-neon font-sans font-bold uppercase tracking-[0.4em] text-xs mb-4">
            ÖZELLİKLER
          </h2>
          <h3 className="text-5xl lg:text-6xl font-heading font-bold text-black tracking-tighter">
            HIZLI, GÜVENLİ VE <br />
            <span className="text-text-secondary">AKILLI ÇÖZÜMLER.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className="group p-10 border border-black/5 bg-surface hover:shadow-xl hover:shadow-primary-neon/5 transition-all duration-500 relative"
            >
              <div className="w-14 h-14 bg-primary-neon/10 flex items-center justify-center mb-8 group-hover:bg-primary-neon transition-colors duration-500">
                <feature.icon className="text-primary-neon group-hover:text-white transition-colors duration-500" size={28} />
              </div>
              <h4 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">{feature.title}</h4>
              <p className="text-text-secondary leading-relaxed mb-8">{feature.desc}</p>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-neon group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
