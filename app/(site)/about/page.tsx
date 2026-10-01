import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import { pageMetadata } from "@/lib/seo";
import { getTeam, getTestimonials } from "@/lib/content";

export const metadata = pageMetadata("Hakkımızda", "Entek Digital; Karaman’da web tasarım, özel yazılım, SEO ve dijital pazarlama çözümleri sunan dijital ajanstır.", "/about");

export default async function AboutPage() {
  const [team, testimonials] = await Promise.all([getTeam(), getTestimonials()]);

  return (
    <main className="pt-20">
      <Breadcrumbs visible={false} items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hakkımızda", href: "/about" }]} />
      <AboutSection pageHeading />
      <TeamSection members={team} />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
