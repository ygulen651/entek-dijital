import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Karaman Dijital Ajans İletişim", "Web tasarım, SEO, özel yazılım ve dijital pazarlama ihtiyaçlarınız için Entek Digital ile iletişime geçin.", "/contact");

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <><Breadcrumbs visible={false} items={[{ name: "Ana Sayfa", href: "/" }, { name: "İletişim", href: "/contact" }]} />{children}</>;
}
