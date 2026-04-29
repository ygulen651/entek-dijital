import Hero from "@/components/Hero";
import StackedServices from "@/components/StackedServices";
import SelectedWorks from "@/components/SelectedWorks";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import FeatureGrid from "@/components/FeatureGrid";
import FAQAccordion from "@/components/FAQAccordion";
import Newsletter from "@/components/Newsletter";

import BlogSnippet from "@/components/BlogSnippet";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <ClientMarquee />
      <AboutSection />
      <ProcessSection />
      <StackedServices />
      <SelectedWorks />
      <Testimonials />
      <TeamSection />
      <BlogSnippet />
    </main>
  );
}
