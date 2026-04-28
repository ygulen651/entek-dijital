import React from "react";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karaman SEO | Google'da Üst Sıralara Çıkın",
  description: "Karaman'da işletmenizin arama motorlarında görünürlüğünü artırın. Veri odaklı SEO stratejileri ile organik trafiğinizi ve satışlarınızı katlayın.",
  keywords: ["karaman seo", "karaman arama motoru optimizasyonu", "karaman dijital pazarlama", "seo danışmanlığı karaman"],
};

const SEOPage = () => {
  return (
    <ServiceTemplate
      title="SEO Çözümleri"
      subtitle="Görünürlüğünüzü Artırın"
      description="Google'da sadece var olmak yetmez, zirvede olmalısınız. Teknik ve içerik odaklı SEO stratejilerimizle sizi hedef kitlenizle buluşturuyoruz."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      features={[
        "Anahtar Kelime Analizi",
        "Teknik SEO Denetimi",
        "İçerik Stratejisi",
        "Backlink Yönetimi",
        "Yerel SEO (Karaman)",
        "Performans Takibi"
      ]}
      benefits={[
        {
          title: "Sürdürülebilir Trafik",
          desc: "Reklam maliyetlerinizi düşürerek, organik aramalardan sürekli ve ücretsiz trafik çekmenizi sağlıyoruz."
        },
        {
          title: "Dönüşüm Odaklılık",
          desc: "Sadece hit değil, satış getirecek doğru anahtar kelimelerle sitenizi optimize ediyoruz."
        }
      ]}
    />
  );
};

export default SEOPage;
