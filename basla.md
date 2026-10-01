# 🚀 ENTEK DIGITAL – WEB SİTESİ TEKNİK ŞARTNAMESİ (v1.0)

## 1) AMAÇ & KAPSAM
Entek Digital için yüksek performanslı, SEO uyumlu, modern (dark + neon) bir ajans sitesi geliştirilecektir. Site; portfolyo sergileme, hizmet anlatımı ve müşteri dönüşümü (lead) üretimi odaklıdır.

Kapsam:
- Kurumsal web sitesi (landing + alt sayfalar)
- Portfolyo (case-based)
- İletişim/lead toplama
- Blog (opsiyonel ama altyapı hazır)

Kapsam dışı:
- E-ticaret
- Çok dilli yapı (ileride genişletilebilir)

---

## 2) HEDEF KİTLE & BAŞARI KRİTERLERİ
Hedef kitle:
- KOBİ sahipleri
- Startup kurucuları
- Kurumsal firmalar (web/branding ihtiyacı)

Başarı kriterleri (KPI):
- Lighthouse Performance ≥ 90 (mobile ≥ 80)
- LCP < 2.5s, CLS < 0.1
- İlk açılışta Time-to-Interactive < 3.5s
- İletişim formu dönüşüm oranı ≥ %2

---

## 3) TEKNOLOJİ KARARLARI (KESİN)
**Framework:** Next.js (App Router)  
**Dil:** TypeScript  
**Stil:** TailwindCSS (+ gerektiğinde CSS Modules)  
**Animasyon:** GSAP (scroll), Framer Motion (component-level)  
**State:** Minimal; gerekirse Zustand  
**Form:** React Hook Form + Zod validation  
**İletişim/Email:** Server Actions veya API Route (Node)  
**Hosting:** Vercel  
**Analitik:** Google Analytics 4 (opsiyonel: Plausible)

Neden:
- Next.js → SEO + performans + SSR/SSG
- Tailwind → hızlı ve tutarlı UI
- GSAP → ileri seviye scroll kontrolü

---

## 4) BİLGİ MİMARİSİ (SITEMAP)
- `/` Ana Sayfa
- `/about` Hakkımızda
- `/services` Hizmetler
- `/projects` Projeler (liste)
- `/projects/[slug]` Proje Detay
- `/contact` İletişim
- `/blog` (opsiyonel)
- `/blog/[slug]` (opsiyonel)

---

## 5) TASARIM SİSTEMİ

### 5.1 Renk Paleti (Dark + Neon)
- Background: `#0B0B0F`
- Surface: `#111118`
- Primary Neon: `#00D1FF`
- Secondary Neon: `#7A5CFF`
- Accent Neon: `#00FFA3`
- Text Primary: `#FFFFFF`
- Text Secondary: `#A1A1AA`

**Kural:**
- Neon renkler %10–15 oranında kullanılacak (aşırı kullanım yasak)
- Arka plan kesinlikle koyu tema

---

### 5.2 Tipografi
- Başlık: 48px–96px (responsive scale)
- Alt başlık: 24px–36px
- Body: 16px–18px
- Font:
  - `Inter` (body)
  - `Space Grotesk` (heading)

**Kural:**
- Büyük tipografi + bol white space
- Satır uzunluğu: max 70 karakter

---

### 5.3 Grid & Spacing
- 12 column grid
- Container max-width: 1200px
- Section spacing: 80px–120px

---

## 6) BİLEŞEN MİMARİSİ

### Core Components
- `Navbar`
- `Hero`
- `SectionWrapper`
- `ProjectCard`
- `ServiceCard`
- `CTA`
- `Footer`

### Reusable Patterns
- Grid system
- Button variants (primary, ghost, neon)
- Card hover effects

---

## 7) ANİMASYON STANDARTLARI

### Scroll Animasyonları
- Fade + translateY (default)
- Duration: 0.6–1s
- Easing: ease-out

### Parallax
- Sadece hero ve 1–2 section’da
- Aşırı kullanım yasak

### Hover Efektleri
- Scale: 1 → 1.05
- Glow (neon shadow)
- Transition: 200–300ms

**Kural:**
- Animasyonlar performansı düşürmeyecek
- Mobile’da hafifletilecek

---

## 8) PORTFOLYO SİSTEMİ

### Liste Sayfası
- Grid layout (3 column desktop)
- Filter (category)

### Proje Detay (Case Study)
İçerik:
- Proje adı
- Kategori
- Problem → Çözüm → Sonuç
- Görseller (optimize edilmiş)
- Kullanılan teknolojiler

---

## 9) İLETİŞİM SİSTEMİ

Form alanları:
- Name (zorunlu)
- Email (zorunlu)
- Message (zorunlu)

Validasyon:
- Zod ile schema validation
- Spam koruması (reCAPTCHA veya honeypot)

Gönderim:
- Email API (Resend / Node mailer)

---

## 10) PERFORMANS

Zorunlu:
- Image optimization (Next/Image)
- Lazy loading
- Code splitting
- Font optimization (next/font)

---

## 11) SEO

- Semantic HTML (header, main, section)
- Meta title & description
- OpenGraph
- Sitemap.xml
- robots.txt

---

## 12) DOSYA YAPISI
/app
/page.tsx
/about/page.tsx
/services/page.tsx
/projects/page.tsx
/projects/[slug]/page.tsx
/components
/ui
/layout
/lib
/styles
/public 
---

## 13) GÜVENLİK

- Form validation (client + server)
- Rate limiting (opsiyonel)
- HTTPS zorunlu

---

## 14) GELİŞTİRME AŞAMALARI

### Faz 1 – Setup
- Next.js kurulumu
- Tailwind config
- Base layout

### Faz 2 – UI
- Navbar
- Hero
- Sections

### Faz 3 – Portfolio
- Liste + detay sayfaları

### Faz 4 – İletişim
- Form + backend

### Faz 5 – Optimizasyon
- Lighthouse test
- SEO

---

## 15) KABUL KRİTERLERİ (DONE DEFINITION)

- Responsive tüm cihazlarda sorunsuz
- Lighthouse skorları hedefe uygun
- Form çalışıyor (email geliyor)
- Sayfa yüklenme süresi hedef altında
- UI tutarlı ve tasarım sistemine uygun

---

## 16) KRİTİK KURALLAR

- ❌ Aşırı animasyon yok
- ❌ Açık tema yok
- ❌ Hazır template hissi yok
- ✔ Minimal + güçlü tasarım
- ✔ Performans öncelikli

---

## 17) SON NOT

Bu proje bir “gösterişli site” değil,
**müşteri getiren dijital vitrin** olarak geliştirilecektir.