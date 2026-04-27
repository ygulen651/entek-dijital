"use client";

import React from "react";
import ServiceCard from "@/ui/ServiceCard";
import { Code, Layout, Smartphone, Search, BarChart, Globe } from "lucide-react";

const services = [
  {
    title: "Web Architecture",
    description: "En son teknolojilerle yüksek performanslı ve ölçeklenebilir web sistemleri inşa ediyoruz.",
    icon: Code,
  },
  {
    title: "Strategic Design",
    description: "Kullanıcı odaklı, modern ve etkileyici arayüz tasarımlarıyla markanızı dijitalde öne çıkarıyoruz.",
    icon: Layout,
  },
  {
    title: "Mobile Solutions",
    description: "iOS ve Android platformları için hızlı, güvenilir ve kullanıcı dostu mobil çözümler sunuyoruz.",
    icon: Smartphone,
  },
  {
    title: "Growth SEO",
    description: "Arama motorlarında görünürlüğünüzü artırarak doğru hedef kitleye ulaşmanızı sağlıyoruz.",
    icon: Search,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <h2 className="text-primary-neon font-sans font-bold uppercase tracking-[0.4em] text-xs mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary-neon" />
              OUR CAPABILITIES
            </h2>
            <h3 className="text-5xl lg:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter">
              DİJİTAL <br />
              <span className="text-text-secondary">ESTETİKLE</span> <br />
              BULUŞUYOR.
            </h3>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-text-secondary text-xl font-sans leading-tight">
              İşinizi büyütmek ve dijital dünyada kalıcı bir iz bırakmak için 
              teknolojiyi estetikle birleştiriyoruz. Sınırları zorlayan, özgün deneyimler.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="border-r border-b lg:border-b-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
