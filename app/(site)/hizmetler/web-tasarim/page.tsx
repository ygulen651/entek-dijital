import React from "react";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karaman Web Tasarım | Modern ve Mobil Uyumlu Web Siteleri",
  description: "Karaman'da işletmenizi öne çıkaracak, hız odaklı ve modern web tasarım çözümleri. Karaman web tasarım ve yazılım hizmetleri için Entek Digital yanınızda.",
  keywords: ["karaman web tasarım", "karaman web sitesi yapımı", "karaman yazılım", "karaman dijital ajans"],
};

const WebTasarimPage = () => {
  return (
    <ServiceTemplate
      title="Web Tasarım"
      subtitle="Dijital Varlığınızı Güçlendirin"
      description="Kullanıcı deneyimi odaklı, estetik ve performans canavarı web siteleri tasarlıyoruz. Sadece bir site değil, bir satış makinesi inşa ediyoruz."
      image="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop"
      features={[
        "Modern Kullanıcı Deneyimi",
        "Mobil Uyumlu Tasarım",
        "Hız Optimizasyonu",
        "SEO Uyumlu Altyapı",
        "Yönetim Paneli",
        "SSL Güvenlik"
      ]}
      benefits={[
        {
          title: "Stratejik Tasarım",
          desc: "Hedef kitlenizi analiz ediyor ve onları müşteriye dönüştürecek stratejik arayüzler tasarlıyoruz."
        },
        {
          title: "Teknik Mükemmellik",
          desc: "Google Core Web Vitals standartlarında, en hızlı teknolojilerle (Next.js, React) sitenizi kodluyoruz."
        }
      ]}
    />
  );
};

export default WebTasarimPage;
