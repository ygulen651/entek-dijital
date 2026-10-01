import Link from "next/link";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/seo";

export default function Breadcrumbs({ items, visible = true }: { items: { name: string; href: string }[]; visible?: boolean }) {
  return <>
    {visible && <nav aria-label="Sayfa yolu" className="container mx-auto px-6 pt-8 text-sm text-black/60">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => <li key={item.href} className="flex gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.href} className="hover:text-primary-neon">{item.name}</Link>}
        </li>)}
      </ol>
    </nav>}
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.href) })) }} />
  </>;
}
