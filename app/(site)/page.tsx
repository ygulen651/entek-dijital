import { pageMetadata, pageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/Hero";
import StackedServices from "@/components/StackedServices";
import SelectedWorks from "@/components/SelectedWorks";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import BlogSnippet from "@/components/BlogSnippet";
import { getBlogPosts, getProjects, getSettings, getTeam, getTestimonials } from "@/lib/content";

const title = "Karaman Web Tasarım & Dijital Reklam Ajansı";
const description = "Entek Digital; Karaman’da web tasarım, özel yazılım, SEO ve dijital pazarlama hizmetleri sunar.";
export const metadata = pageMetadata(title, description, "/");

export default async function Home() {
  const [settings, projects, testimonials, team, posts] = await Promise.all([
    getSettings(),
    getProjects(),
    getTestimonials(),
    getTeam(),
    getBlogPosts(),
  ]);

  return (
    <main className="bg-background">
      <JsonLd data={pageSchema(title, description, "/")} />
      <Hero />
      <ClientMarquee brands={settings.marqueeItems} />
      <AboutSection />
      <ProcessSection />
      <StackedServices />
      <SelectedWorks projects={projects} />
      <Testimonials testimonials={testimonials} />
      <TeamSection members={team} />
      <BlogSnippet posts={posts} />
    </main>
  );
}
