import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import { getService, getServices } from "@/lib/content";
import { pageMetadata, pageSchema, absoluteUrl, siteConfig } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ServiceGuide from "@/components/seo/ServiceGuide";

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();
  return pageMetadata(service.seoTitle || `Karaman ${service.title}`, service.seoDescription || service.description, `/hizmetler/${service.slug}`);
}

export default async function ServicePage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();
  const services = await getServices();
  const path = `/hizmetler/${service.slug}`;

  return (
    <ServiceTemplate
      breadcrumbs={<Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetler", href: "/services" }, { name: service.title, href: path }]} />}
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      image={service.image}
      features={service.features ?? []}
      benefits={service.benefits ?? []}
    >
      <JsonLd data={pageSchema(service.title, service.description, path)} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": absoluteUrl(path) + "#service", name: service.title, description: service.description, url: absoluteUrl(path), provider: { "@id": siteConfig.url + "/#organization" }, areaServed: { "@type": "City", name: "Karaman" } }} />
      <ServiceGuide service={service} services={services} />
    </ServiceTemplate>
  );
}
