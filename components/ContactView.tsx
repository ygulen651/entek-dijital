"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, User, MessageSquare, Target, Shield, Palette } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";
import { ZodError } from "zod";
import { contactSchema, sendContactMessage } from "@/lib/submissions";
import type { SiteSettings } from "@/lib/types";

const ContactView = ({ settings }: { settings: SiteSettings }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: gerçek kullanıcılar bu gizli alanı doldurmaz.
    if (form.website) {
      setStatus("success");
      return;
    }
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      setFeedback(parsed.error.issues[0].message);
      return;
    }
    setStatus("loading");
    try {
      await sendContactMessage(parsed.data);
      setStatus("success");
      setFeedback("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof ZodError ? error.issues[0].message : "Mesaj gönderilemedi, lütfen tekrar deneyin.");
    }
  };

  const socials = [
    { name: "FB", href: settings.facebook },
    { name: "TW", href: settings.twitter },
    { name: "IN", href: settings.instagram },
    { name: "LI", href: settings.linkedin },
  ].filter((s) => s.href);
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b-[6px] border-primary-neon">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-2">
            <h1 className="text-7xl md:text-[10vw] font-heading font-bold text-black leading-none tracking-tighter uppercase">
              BİZE <br />
              <span className="italic font-light">Ulaşın</span>
            </h1>
          </div>
          <div className="flex flex-col items-end gap-8">
             <div className="w-24 h-24 md:w-32 md:h-32 border border-black/10 rounded-full flex items-center justify-center rotate-12">
                <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 fill-none stroke-black stroke-1">
                   <path d="M50 10 L50 90 M10 50 L90 50 M21 21 L79 79 M21 79 L79 21" />
                </svg>
             </div>
             <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-black/40">
                <span className="hover:text-black cursor-pointer">ANASAYFA</span>
                <span>/</span>
                <span className="text-black">İLETİŞİM</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email Card */}
          <div className="group relative pt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white border border-black/5 shadow-xl flex items-center justify-center z-10 transition-transform group-hover:scale-110">
              <Mail className="text-black" size={32} strokeWidth={1} />
            </div>
            <div className="bg-white border border-black/5 rounded-3xl p-12 text-center space-y-6 hover:shadow-2xl transition-all h-full flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold">E-Posta</h3>
              <div className="space-y-1 text-black/50 font-sans">
                {settings.emails.map((email) => (
                  <p key={email}><a href={`mailto:${email}`} className="hover:text-black">{email}</a></p>
                ))}
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative pt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white border border-black/5 shadow-xl flex items-center justify-center z-10 transition-transform group-hover:scale-110">
              <Phone className="text-black" size={32} strokeWidth={1} />
            </div>
            <div className="bg-white border border-black/5 rounded-3xl p-12 text-center space-y-6 hover:shadow-2xl transition-all h-full flex flex-col justify-center ring-1 ring-black/5">
              <h3 className="text-2xl font-heading font-semibold">Telefon</h3>
              <div className="space-y-1 text-black/50 font-sans">
                <p><a href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`} className="hover:text-black">{settings.phone}</a></p>
              </div>
            </div>
          </div>

          {/* Visit Card */}
          <div className="group relative pt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white border border-black/5 shadow-xl flex items-center justify-center z-10 transition-transform group-hover:scale-110">
              <MapPin className="text-black" size={32} strokeWidth={1} />
            </div>
            <div className="bg-white border border-black/5 rounded-3xl p-12 text-center space-y-6 hover:shadow-2xl transition-all h-full flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold">Adres</h3>
              <div className="space-y-1 text-black/50 font-sans">
                {settings.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Let's Work Together Section */}
      <section className="py-32 px-6 bg-[#f8f8f8]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-black" />
                 <span className="text-xs font-bold uppercase tracking-widest text-black/40">Hadi Konuşalım</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-heading font-bold text-black leading-none tracking-tighter">
                 Birlikte <br /> Çalışalım.
               </h2>
               <p className="text-xl text-black/50 font-sans max-w-md leading-relaxed">
                 Sorularınız mı var? Projeniz hakkında konuşmak mı istiyorsunuz? 
                 Sizi dinlemek için buradayız.
               </p>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                     <Mail size={16} />
                  </div>
                  <span className="text-lg font-sans font-medium text-black/70">{settings.emails[0]}</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                     <Phone size={16} />
                  </div>
                  <span className="text-lg font-sans font-medium text-black/70">{settings.phone}</span>
               </div>
            </div>

            <div className="space-y-4 pt-4">
               <span className="text-xs font-bold uppercase tracking-widest text-black/40">Bizi Takip Edin:</span>
               <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all font-bold text-xs"
                    >
                      {social.name}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-black/5">
             <form className="space-y-12" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={update("website")}
                  className="hidden"
                  aria-hidden="true"
                />
                                <div className="space-y-4">
                   <label htmlFor="contact-name" className="text-lg font-sans font-medium text-black block">Adınız ve Soyadınız?</label>
                   <div className="relative border-b border-black/10 pb-4 flex items-center">
                      <input 
                        type="text" 
                        id="contact-name"
                        autoComplete="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Buraya yazın..."
                        className="w-full bg-transparent focus:outline-none text-xl font-sans"
                      />
                      <User className="text-black/20" size={20} />
                   </div>
                </div>

                <div className="space-y-4">
                   <label htmlFor="contact-email" className="text-lg font-sans font-medium text-black block">E-Posta Adresiniz?</label>
                   <div className="relative border-b border-black/10 pb-4 flex items-center">
                      <input 
                        type="email" 
                        id="contact-email"
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="Buraya yazın..."
                        className="w-full bg-transparent focus:outline-none text-xl font-sans"
                      />
                      <Mail className="text-black/20" size={20} />
                   </div>
                </div>

                <div className="space-y-4">
                   <label htmlFor="contact-message" className="text-lg font-sans font-medium text-black block">Mesajınız?</label>
                   <div className="relative border-b border-black/10 pb-4 flex items-center">
                      <textarea 
                        rows={3}
                        id="contact-message"
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Mesajınızı buraya bırakın..."
                        className="w-full bg-transparent focus:outline-none text-xl font-sans resize-none"
                      />
                      <MessageSquare className="text-black/20" size={20} />
                   </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                   <Magnetic>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-primary-neon hover:text-black transition-all disabled:opacity-60"
                      >
                         {status === "loading" ? "GÖNDERİLİYOR..." : "GÖNDER"}
                      </button>
                   </Magnetic>
                   <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                      <ArrowUpRight size={20} />
                   </div>
                </div>

                {feedback && (
                  <p className={`font-sans ${status === "error" ? "text-red-600" : "text-primary-neon"}`}>{feedback}</p>
                )}
             </form>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Toplantıda birlikte çalışan ekip"
                  fill sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-12">
             <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-black" />
                   <span className="text-xs font-bold uppercase tracking-widest text-black/40">Neden Bizi Seçmelisiniz?</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-black leading-none tracking-tighter">
                  Size En İyi <br /> Çözümleri Sunuyoruz
                </h2>
             </div>

             <div className="space-y-10">
                
                <div className="flex gap-6">
                   <div className="shrink-0 w-16 h-16 rounded-full border border-black/5 flex items-center justify-center bg-surface">
                      <Target className="text-black" size={24} />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xl font-heading font-bold uppercase">Kanıtlanmış Pazarlama</h4>
                      <p className="text-black/50 font-sans leading-relaxed">
                        İşinizi büyütmek için tasarlanmış kapsamlı dijital pazarlama hizmetleri sunuyoruz.
                      </p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="shrink-0 w-16 h-16 rounded-full border border-black/5 flex items-center justify-center bg-surface">
                      <Shield className="text-black" size={24} />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xl font-heading font-bold uppercase">Marka Stratejisi</h4>
                      <p className="text-black/50 font-sans leading-relaxed">
                        Markanızı bir sonraki seviyeye taşıyacak yenilikçi stratejiler geliştiriyoruz.
                      </p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="shrink-0 w-16 h-16 rounded-full border border-black/5 flex items-center justify-center bg-surface">
                      <Palette className="text-black" size={24} />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xl font-heading font-bold uppercase">Kazanan Tasarım</h4>
                      <p className="text-black/50 font-sans leading-relaxed">
                        Kullanıcı deneyimini merkeze alan estetik ve fonksiyonel tasarımlar yapıyoruz.
                      </p>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default ContactView;
