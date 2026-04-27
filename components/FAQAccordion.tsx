"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "Kayıt Ol ve Hesap Oluştur",
    answer: "Sadece 5 dakika sürer. Kurulum sorunsuz ve basittir, markanızı yansıtacak şekilde tamamen özelleştirilebilir sayfa tasarımıyla sunulur."
  },
  {
    question: "Kartınızı Yönetin",
    answer: "Mobil uygulama üzerinden kartınızı anlık olarak dondurabilir, limitleri güncelleyebilir ve harcamalarınızı kategorize edebilirsiniz."
  },
  {
    question: "ATM Para Çekme ve Online Bankacılık",
    answer: "Dünya genelindeki tüm ATM'lerden komisyonsuz para çekme ve 7/24 kesintisiz online bankacılık hizmetlerine erişim sağlayın."
  },
  {
    question: "Güvenlik ve Gizlilik",
    answer: "Uçtan uca şifreleme ve biyometrik doğrulama ile finansal verileriniz her zaman en üst düzeyde korunur."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="row flex flex-wrap lg:flex-nowrap items-center gap-20">
          <div className="w-full lg:w-1/2">
             <div className="mb-12">
                <h2 className="text-primary-neon font-sans font-bold uppercase tracking-[0.4em] text-xs mb-4">
                  KONTROL SİZDE
                </h2>
                <h3 className="text-5xl lg:text-6xl font-heading font-black text-black tracking-tighter">
                  PARANIZI <br />
                  <span className="text-text-secondary">YÖNETMEYE BAŞLAYIN.</span>
                </h3>
             </div>

             <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-black/10 pb-4">
                    <button 
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      className="w-full flex items-center justify-between text-left py-4 group"
                    >
                      <span className={`text-xl font-bold uppercase tracking-tight transition-colors ${openIndex === index ? 'text-primary-neon' : 'text-black group-hover:text-primary-neon'}`}>
                        {faq.question}
                      </span>
                      {openIndex === index ? <Minus className="text-primary-neon" size={20} /> : <Plus className="text-black" size={20} />}
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-text-secondary pb-6 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
             </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="relative aspect-[4/5] w-full max-w-[600px] mx-auto">
                <div className="absolute inset-0 bg-primary-neon/5 blur-[100px] rounded-full animate-pulse" />
                <Image 
                  src="/hero-shape.png" 
                  alt="Management Visual" 
                  fill 
                  className="object-contain relative z-10 filter"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
