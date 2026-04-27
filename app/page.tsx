import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import FeatureGrid from "@/components/FeatureGrid";
import FAQAccordion from "@/components/FAQAccordion";
import Newsletter from "@/components/Newsletter";
import Footer from "@/layout/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <ClientMarquee />
      <AboutSection />
      <ProcessSection />
      <Footer />
    </main>
  );
}
