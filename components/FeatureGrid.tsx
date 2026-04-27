"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, CreditCard, ShieldCheck, Zap, BarChart3, Users } from "lucide-react";

const features = [
  {
    title: "Global Ödemeler",
    desc: "Reklamlar, abonelikler ve envanter için Mastercard® ile ödeme yaparak kolaylığı maksimize edin.",
    icon: Globe,
    delay: 0.1
  },
  {
    title: "Çoklu Döviz Desteği",
    desc: "Giderek artan sayıda para biriminde hesaplar kullanın ve yerel bir kullanıcı gibi ödeme alın.",
    icon: CreditCard,
    delay: 0.2
  },
  {
    title: "Online Ödeme",
    desc: "Tüm dünyadaki müşterilerinizden güvenle ve hızla ödeme alabileceğiniz entegre çözümler.",
    icon: Zap,
    delay: 0.3
  },
  {
    title: "Üst Düzey Güvenlik",
    desc: "Paranızı ve verilerinizi güvende tutan dünya standartlarında güvenlik sistemleri.",
    icon: ShieldCheck,
    delay: 0.4
  },
  {
    title: "Anlık Analiz",
    desc: "Tüm finansal verilerinizi tek bir panelden anlık olarak takip edin ve optimize edin.",
    icon: BarChart3,
    delay: 0.5
  },
  {
    title: "Ekip Yönetimi",
    desc: "Ekip üyelerinize özel yetkiler tanımlayın ve harcamaları kontrol altında tutun.",
    icon: Users,
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
          <h3 className="text-5xl lg:text-6xl font-heading font-black text-black tracking-tighter">
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
