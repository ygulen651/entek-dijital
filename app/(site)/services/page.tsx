import StackedServices from "@/components/StackedServices";
import ProcessSection from "@/components/ProcessSection";
import FeatureGrid from "@/components/FeatureGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Web Tasarım, SEO ve Yazılım Geliştirme",
  description: "Markanızı dijital dünyada öne çıkaracak kapsamlı hizmetler: Web Tasarım, Mobil Uygulama, SEO ve Dijital Pazarlama çözümleri.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <StackedServices />
      <ProcessSection />
      <FeatureGrid />
    </main>
  );
}
