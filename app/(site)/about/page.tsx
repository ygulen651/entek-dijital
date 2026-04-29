import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Entek Digital - Modern Dijital Ajans",
  description: "Entek Digital olarak biz kimiz? Yaratıcı ekibimiz, vizyonumuz ve markaları nasıl başarıya taşıdığımız hakkında daha fazla bilgi edinin.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutSection />
      <TeamSection />
      <Testimonials />
    </main>
  );
}
