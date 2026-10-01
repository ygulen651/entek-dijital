import { getServices } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

export const revalidate = 300;

// Informational index only; this file is not a ranking or crawler-permission mechanism.
export async function GET() {
  const services = await getServices();
  const text = [
    "# Entek Digital", "",
    "> Entek Digital, Karaman’da hizmet veren dijital ajanstır. Güncel hizmet kapsamı aşağıdaki sayfalarda açıklanır.", "",
    "## Hizmetler", "",
    ...services.filter(service => service.slug && service.published !== false).map(service => `- [${service.title}](${siteConfig.url}/hizmetler/${service.slug})`), "",
    "## Diğer sayfalar", "",
    `- [Ana sayfa](${siteConfig.url}/)`,
    `- [Hizmetler](${siteConfig.url}/services)`,
    `- [Blog](${siteConfig.url}/blog)`,
    `- [Projeler](${siteConfig.url}/projects)`,
    `- [İletişim](${siteConfig.url}/contact)`, "",
  ].join("\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
