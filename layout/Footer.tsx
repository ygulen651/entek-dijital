import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-heading font-black text-black tracking-tighter uppercase">
              ENTEK<span className="text-primary-neon">DIGITAL</span>
            </Link>
            <p className="mt-4 text-black/60 max-w-md font-sans">
              Sadelik ve zarafetin özünü savunan özel bir yaratıcı ekip 
              tarafından tasarlanan dijital çözümlerle işinizi geleceğe taşıyoruz.
            </p>
          </div>
          
          <div>
            <h4 className="text-black font-bold mb-6 uppercase text-sm tracking-widest">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-black/40 hover:text-primary-neon transition-colors font-sans">Hakkımızda</Link></li>
              <li><Link href="/services" className="text-black/40 hover:text-primary-neon transition-colors font-sans">Hizmetler</Link></li>
              <li><Link href="/projects" className="text-black/40 hover:text-primary-neon transition-colors font-sans">Projeler</Link></li>
              <li><Link href="/contact" className="text-black/40 hover:text-primary-neon transition-colors font-sans">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6 uppercase text-sm tracking-widest">Sosyal Medya</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/40 hover:text-primary-neon transition-colors font-sans">Instagram</a></li>
              <li><a href="#" className="text-black/40 hover:text-primary-neon transition-colors font-sans">LinkedIn</a></li>
              <li><a href="#" className="text-black/40 hover:text-primary-neon transition-colors font-sans">X (Twitter)</a></li>
              <li><a href="#" className="text-black/40 hover:text-primary-neon transition-colors font-sans">Behance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black/30 font-sans">
          <p>© {new Date().getFullYear()} ENTEK DIGITAL. Tüm hakları saklıdır.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-black transition-colors">Gizlilik Politikası</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
