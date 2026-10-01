import Link from "next/link";
import type { Service } from "@/lib/types";
import { serviceGuides } from "@/lib/service-guides";

export default function ServiceGuide({ service, services }: { service: Service; services: Service[] }) {
  const guide = serviceGuides[service.slug];
  if (!guide) return null;
  const related = services.filter(item => guide.related.includes(item.slug));
  return <section className="container mx-auto px-6 py-12 max-w-5xl space-y-12 text-black/60 leading-relaxed">
    <div className="space-y-4"><h2 className="text-3xl font-heading font-bold text-black">{service.title} nedir?</h2><p>{guide.definition}</p></div>
    <div className="space-y-4"><h2 className="text-3xl font-heading font-bold text-black">Kimler için uygundur?</h2><p>{guide.audience}</p></div>
    <div className="space-y-4"><h2 className="text-3xl font-heading font-bold text-black">Çalışma süreci nasıl ilerler?</h2><ol className="list-decimal pl-6 space-y-3">{guide.steps.map(step => <li key={step}>{step}</li>)}</ol></div>
    <div className="space-y-6"><h2 className="text-3xl font-heading font-bold text-black">Sık sorulan sorular</h2>{guide.faqs.map(faq => <div key={faq.question} className="space-y-2"><h3 className="text-xl font-heading font-bold text-black">{faq.question}</h3><p>{faq.answer}</p></div>)}</div>
    {related.length > 0 && <div className="space-y-4"><h2 className="text-3xl font-heading font-bold text-black">Bu hizmeti tamamlayan çalışmalar</h2><p>Projenizin ihtiyacına göre birlikte değerlendirilebilecek hizmetler:</p><ul className="list-disc pl-6 space-y-2">{related.map(item => <li key={item.slug}><Link href={`/hizmetler/${item.slug}`} className="text-primary-neon underline">{item.title}</Link></li>)}</ul></div>}
  </section>;
}
