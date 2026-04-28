import React from "react";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karaman Dijital Pazarlama | Sosyal Medya ve Reklam Yönetimi",
  description: "Markanızı dijitalde büyütüyoruz. Karaman sosyal medya yönetimi, Google Ads ve Meta reklamları ile doğru hedef kitleye ulaşın.",
  keywords: ["karaman dijital pazarlama", "karaman sosyal medya yönetimi", "karaman reklam ajansı", "google ads karaman"],
};

const PazarlamaPage = () => {
  return (
    <ServiceTemplate
      title="Dijital Pazarlama"
      subtitle="Büyüme Odaklı Stratejiler"
      description="Markanızı dijital dünyanın her köşesinde duyuruyoruz. Veri analizi ve yaratıcı içeriklerle ROI (Yatırım Getirisi) odaklı kampanyalar yönetiyoruz."
      image="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop"
      features={[
        "Sosyal Medya Yönetimi",
        "Google Ads (PPC)",
        "Meta Reklamları",
        "İçerik Pazarlaması",
        "E-posta Pazarlama",
        "Marka Kimliği"
      ]}
      benefits={[
        {
          title: "Doğru Hedefleme",
          desc: "Bütçenizi boşa harcamadan, hizmetinizle gerçekten ilgilenen kişilere ulaşmanızı sağlıyoruz."
        },
        {
          title: "Yaratıcı İçerik",
          desc: "Sıkıcı reklamlardan kaçınıyor, hedef kitlenizle bağ kuracak özgün ve dikkat çekici içerikler üretiyoruz."
        }
      ]}
    />
  );
};

export default PazarlamaPage;
