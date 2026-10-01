import Link from "next/link";

export default function NotFound() {
  return <main className="container mx-auto px-6 pt-48 pb-32 space-y-8">
    <p className="text-primary-neon font-bold">404</p>
    <h1 className="text-5xl font-heading font-bold">Sayfa bulunamadı</h1>
    <p className="text-text-secondary">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
    <nav aria-label="Diğer sayfalar" className="flex flex-wrap gap-6 text-primary-neon underline">
      <Link href="/">Ana sayfaya dön</Link><Link href="/services">Hizmetler</Link><Link href="/contact">İletişim</Link>
    </nav>
  </main>;
}
