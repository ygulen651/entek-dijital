# Entek Digital — SEO + GEO/AEO uygulama raporu

Tarih: 1 Ekim 2026. Bu çalışma yerel repository üzerinde tamamlandı; production deployment yapılmadı. Çalışmadan önce mevcut olan Firebase/admin geçişi ve diğer kullanıcı değişiklikleri korundu. Aşağıdaki dosya listesi yalnızca bu SEO çalışmasının kapsamıdır; Git diff içindeki önceki değişikliklerin tamamı bu çalışmaya ait değildir.

## 1. Genel Özet

Next.js 16.2.4, React 19.2.4, TypeScript ve App Router kullanılıyor. `app/(site)` ve `app/(admin)` ayrı root layout içeriyor; `app/layout.tsx` ve Pages Router yok. İçerikler Firebase/Firestore üzerinden okunuyor; geliştirme fallback içerikleri mevcut. Gerçek detay yolları `/hizmetler/[slug]`, `/blog/[slug]`, `/projects/[slug]`.

Mevcut metadata, robots, sitemap, `next/image`, `next/font/google`, Vercel Analytics, favicon ve HTML dosyasıyla Search Console doğrulaması geliştirildi. Yeni CMS veya bağımsız hizmet URL’leri oluşturulmadı. Mevcut dört hizmet: Web Tasarım, Özel Yazılım, Dijital Pazarlama, SEO Çözümleri. Sosyal medya yönetimi dijital pazarlama kapsamında anlatıldı; video prodüksiyon gibi doğrulanmamış hizmetler eklenmedi.

En kritik düzeltme: preloader bitmeden tüm sayfa içeriğini render etmeyen koşul kaldırıldı. İçerik artık ilk HTML yanıtında mevcut; preloader görsel animasyonu korunuyor. JavaScript kapalıyken preloader’ın içeriği örtmesini engelleyen noscript stili eklendi. Renkler, logo, font aileleri ve mevcut section tasarımları korundu. Hizmet detaylarına aynı tasarım diliyle açıklayıcı içerik ve görünür breadcrumb eklendi.

## 2. Oluşturulan Dosyalar

- `lib/seo.ts`: canonical domain, ortak metadata, WebPage schema ve gerçek ISO tarih kontrolü.
- `lib/service-guides.ts`: mevcut dört hizmet için açıklamalar, hedef kitle, süreç ve SSS.
- `components/seo/JsonLd.tsx`: `<` karakterini Unicode ile kaçıran JSON-LD çıktısı.
- `components/seo/Breadcrumbs.tsx`: görünür sayfa yolu ve BreadcrumbList; liste sayfalarında mevcut menü hiyerarşisini tarif eden schema.
- `components/seo/ServiceGuide.tsx`: Server Component olarak açıklayıcı hizmet içeriği ve ilgili hizmet linkleri.
- `app/(site)/not-found.tsx`: hizmet/blog/proje bulunamadığında marka dilindeki 404 içeriği.
- `app/global-not-found.tsx`: çoklu root layout için eşleşmeyen URL’leri yakalayan global 404.
- `app/og/route.tsx`: mevcut logo ve renkleriyle 1200×630 PNG paylaşım görseli.
- `app/llms.txt/route.ts`: yayınlanmış gerçek hizmetlerden üretilen bilgi dizini.
- `scripts/check-seo.mjs`: production HTTP yanıtlarını doğrulayan tekrar çalıştırılabilir SEO kontrolü.
- `SEO-REPORT.md`: bu rapor.

## 3. Değiştirilen Dosyalar

| Alan | Dosyalar | Değişiklik |
| --- | --- | --- |
| Site layout ve ana sayfa | `app/(site)/layout.tsx`, `app/(site)/page.tsx` | metadataBase, title template, doğrulanmış kod için env desteği, güvenli kurum/WebSite/WebPage schema, Speed Insights |
| Liste/iletişim sayfaları | `app/(site)/about/page.tsx`, `app/(site)/services/page.tsx`, `app/(site)/projects/page.tsx`, `app/(site)/blog/page.tsx`, `app/(site)/contact/layout.tsx` | benzersiz metadata/canonical/OG/Twitter ve BreadcrumbList; hizmet listesinde gerçek detay linkleri |
| Detay sayfaları | `app/(site)/hizmetler/[slug]/page.tsx`, `app/(site)/blog/[slug]/page.tsx`, `app/(site)/projects/[slug]/page.tsx` | sayfaya özgü metadata, Service/Article/WebPage ve breadcrumb; bulunamayan içerik için notFound |
| Tarama | `app/robots.ts`, `app/sitemap.ts` | host, gerçek URL’ler, 300 saniye yenileme, sahte lastModified tarihlerinin kaldırılması |
| Ana içerik ve section’lar | `components/Hero.tsx`, `components/AboutSection.tsx`, `components/StackedServices.tsx`, `components/SelectedWorks.tsx`, `components/ProcessSection.tsx`, `components/Services.tsx` | tek H1, dekoratif başlıkların semantik düzeltmesi, çalışan CTA linkleri, kullanılmayan import temizliği |
| Hizmet ve yazı render | `components/ServiceTemplate.tsx`, `components/BlogPostView.tsx`, `components/RichText.tsx` | breadcrumb/Server Component slot’ları, H2/H3 ve ul/li yapısı, erişilebilir CTA |
| Görseller | `components/BlogList.tsx`, `components/BlogSnippet.tsx`, `components/TeamSection.tsx`, `components/Testimonials.tsx`, `components/ContactView.tsx` | responsive sizes; alt metinleri; görüş kontrol düğmeleri ve iletişim formu etiketleri |
| Ortak layout | `layout/ClientLayout.tsx`, `layout/Footer.tsx`, `layout/Navbar.tsx` | içerik SSR’da mevcut; nested main kaldırıldı; düğme/input erişilebilir adları, heading yapısı, responsive görseller |
| Animasyonlar | `components/Preloader.tsx`, `components/Magnetic.tsx`, `components/SmoothScroll.tsx` | dekoratif preloader başlığı, tür güvenliği, event/tween ve animation-frame temizliği |
| İçerik tipi ve editör | `lib/types.ts`, `components/admin/schemas.ts` | isteğe bağlı gerçek datePublished/dateModified ISO alanları |
| Varsayılan içerik | `lib/defaults.ts` | SEO süre/sıralama vaatleri ve dayanağı olmayan bazı yüzde ifadeleri yumuşatıldı |
| Yapılandırma | `.env.example`, `next.config.ts`, `package.json`, `package-lock.json` | GOOGLE_SITE_VERIFICATION örneği; globalNotFound; Speed Insights 2.0.0 ve test:seo komutu |

## 4. Teknik SEO

- Canonical domain: `https://www.entekdigital.com`. Tüm sitemap sayfaları kendisine canonical verir; alt sayfalar artık ana sayfayı canonical olarak devralmaz. Next.js ana sayfa canonical’ını sondaki slash olmadan yazabilir; bu aynı kök URL’dir.
- Robots: mevcut wildcard allow ve `/private/`, `/admin` engelleri korundu. AI botlarına özel yeni izin/engel eklenmedi. Sitemap ve host www domain’e bağlı.
- Sitemap: kontrolde 18 gerçek URL; admin/test/noindex URL’leri yok. Her build’de yeni tarih yazılmaz. Blog lastModified yalnızca gerçek ISO tarih alanlarından gelir; eksikse atlanır.
- Metadata: tüm indekslenebilir sayfalarda benzersiz title, description, canonical, OG title/description/url/image, Twitter summary_large_image.
- Schema: tutarlı Entek Digital adı ve kimliği; Organization/ProfessionalService, WebSite, WebPage, Service, Article, BreadcrumbList. Uydurma adres, şehir merkezi koordinatları, çalışma saatleri kaldırıldı. Telefon, puan, ödül ve müşteri sayısı eklenmedi. Doğrulanmamış sosyal profiller schema’ya taşınmadı.
- Admin’in mevcut noindex/nofollow metadata’sı korundu. Bilinmeyen genel ve detay URL’leri 404 ve noindex döndürüyor.
- Varsayılan trailingSlash davranışı korundu; `/services/` → `/services` 308 olarak doğrulandı.
- Canlı non-www HTTP kontrolü 307 ile www domain’e yönleniyor. Vercel zaten domain seviyesinde yönlendirdiği için uygulamaya ikinci bir domain redirect eklenmedi. **Vercel domain ayarında bu yönlendirme 301/308 kalıcı hale getirilmeli.** HTTP→HTTPS davranışı deploy sonrası ayrıca kontrol edilmeli.
- Mevcut `public/googlec6f3609bc3b74ee4.html` doğrulama dosyası korundu ve HTTP 200 doğrulandı. HTML dosya adı meta verification kodu değildir; hatalı hardcoded meta kaldırıldı. Gerçek meta token varsa `GOOGLE_SITE_VERIFICATION` üzerinden kullanılabilir.

## 5. GEO/AEO

Mevcut dört hizmette “nedir?”, “kimler için?”, “süreç nasıl ilerler?”, açıklayıcı SSS ve bağlama uygun ilgili hizmet linkleri var. SEO/Google Ads ve hazır/özel yazılım farkları tarafsız biçimde anlatılır. Ana sayfadaki görünür tanım marka, hizmetler ve Karaman bölgesini açıklıyor. Ana içerik ilk HTML yanıtında bulunuyor; botlara farklı içerik sunulmuyor.

`/llms.txt` aynı yayınlanmış hizmet kaynaklarından üretilir; sıralama faktörü veya indeksleme garantisi olarak değerlendirilmez. FAQ içerikleri kullanıcı faydası içindir; FAQ rich result veya yapay zekâ yanıtında görünme garantisi verilmez. Mevcut bloga Article, yazar/publisher ve gerçek tarih alanları desteği eklendi; yeni yazılar otomatik yayınlanmadı. Portföyün mevcut problem/çözüm/sonuç/teknoloji/galeri alanları korundu; eksik sonuçlar uydurulmadı.

## 6. Performans

`next/image` kullanılan önemli görsellere layout’a uygun sizes eklendi; küçük görüş avatarları için 64/80 px belirtiliyor. Mevcut asset’ler, boyut/aspect-ratio yapıları ve fontlar korunuyor. `next/font/google` ile Instrument Sans/Syne zaten mevcut; değiştirilmedi. Gereksiz animasyon frame ve event/tween yaşam süreleri düzeltildi. Statik hizmet açıklamaları Server Component’ten geliyor.

Statik `ServiceTemplate` ve `StackedServices` bileşenlerinden gereksiz use client kaldırıldı; etkileşimli Magnetic ve animasyon bileşenleri korunuyor. Vercel Analytics korunuyor; GA/GTM veya ikinci trafik analizi kurulmadı. Tek yeni dependency `@vercel/speed-insights` 2.0.0; mevcut Next.js/React peer sürümleriyle uyumlu. Vercel dashboard’da Speed Insights etkinleştirilmeli.

LCP/INP/CLS hedeflerine ulaşıldığı iddia edilmiyor; canlı mobil/desktop ve gerçek kullanıcı ölçümü gerekli. Preloader animasyonu ve mevcut büyük PNG orijinalleri korunuyor; özellikle yaklaşık 2.56 MiB sosyal görseli ve üçüncü parti Tawk sohbet script’i canlı performans ölçümünde değerlendirilmeli. Yeni manifest eklenmedi; mevcut ikonlar korundu. CSP veya büyük güvenlik refactor’u uygulanmadı.

## 7. Test Sonuçları

- `npm run build`: başarılı, Next.js 16.2.4 production build.
- `npx tsc --noEmit`: başarılı.
- `npm run lint`: başarılı, 0 hata / 0 uyarı.
- `npm run test:seo`: başarılı; production sunucusunda 18 URL ve 18 dahili link hedefi HTTP 200. Her sayfada benzersiz title/description, doğru canonical/OG URL, tek H1 ve main, parse edilebilir JSON-LD.
- Dört bilinmeyen URL: hem bot hem normal browser isteğinde HTTP 404 ve noindex.
- Robots, sitemap, admin noindex, slash 308, OG PNG 1200×630, llms.txt ve Search Console HTML dosyası: başarılı.
- Tarayıcı kontrolü: ana sayfa ve web tasarım sayfası render edildi; ana sayfa console error/warning listesi boş. Paylaşım görseli incelendi. Mobil hizmet sayfasında viewport ile document scroll width eşleşti; yatay taşma görülmedi. Bu kontrol kapsamlı görsel regresyon veya Lighthouse testi değildir.

Tekrar çalıştırmak için iki terminal:

```powershell
npm run build
npm run start -- --port 3100
```

```powershell
npm run test:seo
```

Deploy sonrası farklı origin ile aynı test çalıştırılabilir:

```powershell
$env:SEO_TEST_ORIGIN = "https://www.entekdigital.com"
npm run test:seo
```

## 8. Deploy Sonrası Kontrol

- [Ana sayfa](https://www.entekdigital.com/)
- [Robots](https://www.entekdigital.com/robots.txt)
- [Sitemap](https://www.entekdigital.com/sitemap.xml)
- [Web Tasarım](https://www.entekdigital.com/hizmetler/web-tasarim)
- [Özel Yazılım](https://www.entekdigital.com/hizmetler/ozel-yazilim)
- [Dijital Pazarlama](https://www.entekdigital.com/hizmetler/dijital-pazarlama)
- [SEO](https://www.entekdigital.com/hizmetler/seo-optimizasyonu)
- [Hizmetler](https://www.entekdigital.com/services)
- [Hakkımızda](https://www.entekdigital.com/about)
- [İletişim](https://www.entekdigital.com/contact)
- [Blog](https://www.entekdigital.com/blog)
- [Projeler](https://www.entekdigital.com/projects)
- [Paylaşım görseli](https://www.entekdigital.com/og)
- [llms.txt](https://www.entekdigital.com/llms.txt)
- [Doğrulama dosyası](https://www.entekdigital.com/googlec6f3609bc3b74ee4.html)

Sitemap’teki dört blog ve dört proje detayını da kontrol edin. Non-www, HTTP, slash, bilinmeyen URL ve admin davranışlarını production’da yeniden doğrulayın. Yeni örnek `/web-tasarim`, `/seo` yolları oluşturulmadı; mevcut `/hizmetler/...` yapısı korunuyor.

## 9. Manuel Yapılacaklar

1. Vercel deployment’ını gerçekleştirin; domain redirect’ini 301/308 kalıcı yapın. Analytics ve Speed Insights’i dashboard’da kontrol edin.
2. Search Console’da Domain veya URL Prefix property oluşturun; ownership doğrulayın, `/sitemap.xml` gönderin. Page Indexing, Core Web Vitals, HTTPS ve Enhancements raporlarını inceleyin. Önemli hizmetlerde URL Inspection ve gerektiğinde Request Indexing kullanın.
3. [Google Rich Results Test](https://search.google.com/test/rich-results) ve [Schema Validator](https://validator.schema.org/) ile canlı URL’leri doğrulayın. Her schema türünün Google rich result görünümü olmadığı için sıfır uygun rich result tek başına JSON-LD hatası değildir.
4. [PageSpeed Insights](https://pagespeed.web.dev/) üzerinde mobil ve desktop ölçün; LCP < 2.5 s, INP < 200 ms, CLS < 0.1 hedeflerini canlı verilerle değerlendirin.
5. Google Business Profile’da işletme adı, site URL’si, doğrulanmış telefon/adres, gerçek kategoriler ve hizmetler tutarlı olsun. Gerçek görseller ekleyin, müşterilerden organik yorum alın.
6. Yerel haber siteleri, Karaman iş rehberleri, uygun sektör dizinleri, iş ortakları, gerçek vaka çalışmaları ve yerel etkinliklerden doğal marka mention/backlink kazanımı planlayın.
7. Yeni sayfa açmadan önce e-ticaret, sosyal medya, grafik tasarım ve video prodüksiyonun gerçek kapsamını işletme ile netleştirin.

Başlangıç içerik planı (otomatik yayınlanmadı):

1. Karaman’da Web Sitesi Yaptırırken Nelere Dikkat Edilmeli?
2. Web Tasarım Fiyatlarını Neler Belirler?
3. Next.js ile Kurumsal Web Sitesinin Avantajları
4. SEO Nedir ve İşletmeler İçin Neden Önemlidir?
5. Google’da İşletmem Neden Çıkmıyor?
6. Yerel SEO Nedir?
7. Google Haritalarda Görünürlük Nasıl Artırılır?
8. Sosyal Medya Yönetimi Neleri Kapsar?
9. Instagram İçerik Stratejisi Nasıl Oluşturulur?
10. E-Ticaret Sitesi Kurarken Nelere Dikkat Edilmeli?

## 10. Kalan Riskler / TODO

- TODO: kullanıcıdan doğrulanmış işletme adresi, telefon, e-posta, çalışma saatleri ve resmi sosyal profil bilgileri alınmalı. Schema’ya eklenmeyen bu bilgiler mevcut iletişim UI’sında işletme tarafından kontrol edilmeli.
- Mevcut 150+/200+ gibi sayaçlar, deneyim yılı, örnek müşteri yorumları ve portföy markaları bu çalışma öncesinden geliyor. Tasarımı ve içeriği rastgele silmemek için korundu; doğruluğu/yayın izni işletme tarafından teyit edilmeli. Bunlar structured data’ya aktarılmadı.
- Mevcut Firestore içerikleri yerel fallback değişiklikleriyle otomatik güncellenmez. Admin’de kayıtlı eski yüzde/sıralama ifadeleri, örnek içerikler ve blog tarihleri ayrıca editoryal olarak gözden geçirilmeli. Güvenilir datePublished/dateModified bilinmiyorsa boş bırakılmalı.
- `globalNotFound` Next.js 16.2.4’te belgelenmiş experimental özelliktir; ayrı root layout’lar için kullanıldı. Next.js yükseltmelerinde genel ve detay 404 testleri tekrar çalıştırılmalı.
- Dependency kurulumu sırasında npm audit 13 bulgu (1 düşük, 1 orta, 10 yüksek, 1 kritik) bildirdi. Bu çalışma kapsamına dependency güvenlik yükseltmesi alınmadı; ayrı değerlendirme gerekli. Otomatik/breaking audit fix uygulanmadı.
- Canlı canonical/redirect, Search Console indeksleme, rich results ve saha Core Web Vitals sonuçları deployment sonrasında doğrulanmalı; yerel testler bunların yerine geçmez.
