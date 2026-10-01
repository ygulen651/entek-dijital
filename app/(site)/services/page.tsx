import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Link from "next/link";
import { getServices } from "@/lib/content";
import StackedServices from "@/components/StackedServices";
import ProcessSection from "@/components/ProcessSection";
import FeatureGrid from "@/components/FeatureGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Karaman Web Tasarım, SEO ve Dijital Hizmetler", "Web tasarım, özel yazılım, SEO ve dijital pazarlama hizmetlerimizi inceleyin. İşletmenize uygun çözümü birlikte planlayalım.", "/services");

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <main className="pt-20">
      <Breadcrumbs visible={false} items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetler", href: "/services" }]} />
      <StackedServices pageHeading />
      <section className="container mx-auto px-6 py-16"><h2 className="text-3xl font-heading font-bold mb-6">Hizmet detaylarını inceleyin</h2><ul className="flex flex-wrap gap-6">{services.map(service => <li key={service.slug}><Link href={`/hizmetler/${service.slug}`} className="text-primary-neon underline">{service.title}</Link></li>)}</ul></section>
      <ProcessSection />
      <FeatureGrid />
    </main>
  );
}
