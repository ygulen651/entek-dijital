import React from "react";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karaman Özel Yazılım | İhtiyacınıza Özel Yazılım Çözümleri",
  description: "İş süreçlerinizi dijitalleştiren, yüksek performanslı ve ölçeklenebilir özel yazılım çözümleri. Karaman yazılım firması Entek Digital.",
  keywords: ["karaman özel yazılım", "karaman yazılım geliştirme", "karaman uygulama geliştirme", "crm yazılımı karaman"],
};

const YazilimPage = () => {
  return (
    <ServiceTemplate
      title="Özel Yazılım"
      subtitle="İşinizi Dijitalleştirin"
      description="Hazır çözümler işinize uymuyorsa, işinize uyan özel yazılımlar geliştiriyoruz. CRM, ERP ve özel otomasyon sistemleri ile verimliliğinizi artırın."
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      features={[
        "Özel CRM / ERP Sistemleri",
        "API Entegrasyonları",
        "SaaS Geliştirme",
        "Mobil Uygulamalar",
        "Bulut Tabanlı Çözümler",
        "Veri Analitiği"
      ]}
      benefits={[
        {
          title: "Tam Kontrol",
          desc: "Tüm süreçlerinizi tek bir noktadan yönetebileceğiniz, size özel ve esnek bir altyapı sunuyoruz."
        },
        {
          title: "Ölçeklenebilirlik",
          desc: "İşiniz büyüdükçe sizinle birlikte büyüyen, geleceğe hazır teknolojik mimariler kuruyoruz."
        }
      ]}
    />
  );
};

export default YazilimPage;
