// Firebase yapılandırılmadığında veya koleksiyon boş olduğunda kullanılan varsayılan içerikler.
// Admin panelindeki "Varsayılan içerikleri yükle" butonu da bu verileri Firestore'a aktarır.

import type { BlogPost, Project, Service, SiteSettings, TeamMember, Testimonial } from "./types";

const INSTAGRAM_URL =
  "https://www.instagram.com/entek.digital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const defaultSettings: SiteSettings = {
  siteTitle: "Karaman Dijital Ajans | ENTEK DIGITAL - Web Tasarım & SEO",
  siteDescription:
    "Karaman'da yüksek performanslı web tasarımı, SEO optimizasyonu ve modern dijital çözümler sunan öncü bir dijital ajansız. Karaman yazılım ve reklam çözümleri için bize ulaşın.",
  keywords: [
    "karaman dijital ajans",
    "karaman web tasarım",
    "karaman yazılım",
    "karaman reklam ajansı",
    "karaman seo",
    "entek digital karaman",
  ],
  emails: ["info@entekdigital.com", "destek@entekdigital.com"],
  phone: "+90 (530) 418 07 70",
  addressLines: ["Merkez, Karaman, Türkiye", "70000 Karaman"],
  locationLabel: "KARAMAN, TR",
  instagram: INSTAGRAM_URL,
  linkedin: "https://www.linkedin.com/company/entekdigital",
  twitter: "",
  facebook: "",
  behance: "",
  marqueeItems: [
    "WEB TASARIM",
    "SOSYAL MEDYA",
    "DİJİTAL REKLAM",
    "MARKA KİMLİĞİ",
    "SEO OPTİMİZASYON",
    "İÇERİK PAZARLAMA",
  ],
  footerInstagramImages: [
    "/sosyal/entek 3_.png",
    "/sosyal/entek 7.png",
    "/sosyal/entek 10.png",
    "/sosyal/tabaela. tasarımı_.png",
  ],
};

export const defaultProjects: Project[] = [
  {
    id: "luxe-co-kurumsal-kimlik",
    slug: "luxe-co-kurumsal-kimlik",
    title: "Luxe Co. için kurumsal kimlik yenileme.",
    client: "Luxe Co.",
    category: "Markalama",
    image: "/works/01.png",
    tags: ["MARKALAMA", "MOCKUP"],
    order: 1,
  },
  {
    id: "shopy-e-ticaret",
    slug: "shopy-e-ticaret",
    title: "Shopy için e-ticaret platform tasarımı",
    client: "Shopy",
    category: "Web Tasarım",
    image: "/works/02.png",
    tags: [],
    order: 2,
  },
  {
    id: "fitpro-mobil-uygulama",
    slug: "fitpro-mobil-uygulama",
    title: "FitPro ajansı için mobil uygulama tasarımı",
    client: "FitPro",
    category: "Mobil",
    image: "/works/03.png",
    tags: [],
    order: 3,
  },
  {
    id: "flexwear-reklam-kampanyasi",
    slug: "flexwear-reklam-kampanyasi",
    title: "FlexWear için dijital reklam kampanyası",
    client: "FlexWear",
    category: "Dijital Pazarlama",
    image: "/works/04.png",
    tags: [],
    order: 4,
  },
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "olivia-bennett",
    text: "Entek, projemizin her aşamasında olağanüstü bir hizmet sundu. Ekipleri son derece duyarlı, profesyonel ve gerçek sonuçlar sunmaya odaklanmış durumda.",
    name: "Olivia Bennett",
    role: "Kreatif Direktör, PureVibes",
    avatar: "/team/01.png",
    order: 1,
  },
  {
    id: "marcus-johnson",
    text: "Bu ekiple çalışmak mutlak bir zevkti. Vizyonumuzu mükemmel bir şekilde anladılar ve hassasiyetle, yaratıcılıkla hayata geçirdiler.",
    name: "Marcus Johnson",
    role: "CEO, TechFlow",
    avatar: "/team/02.png",
    order: 2,
  },
  {
    id: "sarah-jenkins",
    text: "Getirdikleri detay seviyesi ve bağlılık eşsizdir. Her türlü dijital dönüşüm ihtiyacı için şiddetle tavsiye ediyorum.",
    name: "Sarah Jenkins",
    role: "Pazarlama Müdürü, Elevate",
    avatar: "/team/03.png",
    order: 3,
  },
];

export const defaultTeam: TeamMember[] = [];

export const defaultServices: Service[] = [
  {
    id: "web-tasarim",
    slug: "web-tasarim",
    order: 1,
    title: "Web Tasarım",
    subtitle: "Dijital Varlığınızı Güçlendirin",
    description:
      "Kullanıcı deneyimi odaklı, estetik ve performans canavarı web siteleri tasarlıyoruz. Sadece bir site değil, bir satış makinesi inşa ediyoruz.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Modern Kullanıcı Deneyimi",
      "Mobil Uyumlu Tasarım",
      "Hız Optimizasyonu",
      "SEO Uyumlu Altyapı",
      "Yönetim Paneli",
      "SSL Güvenlik",
    ],
    benefits: [
      {
        title: "Stratejik Tasarım",
        desc: "Hedef kitlenizi analiz ediyor ve onları müşteriye dönüştürecek stratejik arayüzler tasarlıyoruz.",
      },
      {
        title: "Teknik Mükemmellik",
        desc: "Google Core Web Vitals standartlarında, en hızlı teknolojilerle (Next.js, React) sitenizi kodluyoruz.",
      },
    ],
    seoTitle: "Karaman Web Tasarım | Modern ve Mobil Uyumlu Web Siteleri",
    seoDescription:
      "Karaman'da işletmenizi öne çıkaracak, hız odaklı ve modern web tasarım çözümleri. Karaman web tasarım ve yazılım hizmetleri için Entek Digital yanınızda.",
    keywords: ["karaman web tasarım", "karaman web sitesi yapımı", "karaman yazılım", "karaman dijital ajans"],
  },
  {
    id: "ozel-yazilim",
    slug: "ozel-yazilim",
    order: 2,
    title: "Özel Yazılım",
    subtitle: "İşinizi Dijitalleştirin",
    description:
      "Hazır çözümler işinize uymuyorsa, işinize uyan özel yazılımlar geliştiriyoruz. CRM, ERP ve özel otomasyon sistemleri ile verimliliğinizi artırın.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Özel CRM / ERP Sistemleri",
      "API Entegrasyonları",
      "SaaS Geliştirme",
      "Mobil Uygulamalar",
      "Bulut Tabanlı Çözümler",
      "Veri Analitiği",
    ],
    benefits: [
      {
        title: "Tam Kontrol",
        desc: "Tüm süreçlerinizi tek bir noktadan yönetebileceğiniz, size özel ve esnek bir altyapı sunuyoruz.",
      },
      {
        title: "Ölçeklenebilirlik",
        desc: "İşiniz büyüdükçe sizinle birlikte büyüyen, geleceğe hazır teknolojik mimariler kuruyoruz.",
      },
    ],
    seoTitle: "Karaman Özel Yazılım | İhtiyacınıza Özel Yazılım Çözümleri",
    seoDescription:
      "İş süreçlerinizi dijitalleştiren, yüksek performanslı ve ölçeklenebilir özel yazılım çözümleri. Karaman yazılım firması Entek Digital.",
    keywords: ["karaman özel yazılım", "karaman yazılım geliştirme", "karaman uygulama geliştirme", "crm yazılımı karaman"],
  },
  {
    id: "dijital-pazarlama",
    slug: "dijital-pazarlama",
    order: 3,
    title: "Dijital Pazarlama",
    subtitle: "Büyüme Odaklı Stratejiler",
    description:
      "Markanızı dijital dünyanın her köşesinde duyuruyoruz. Veri analizi ve yaratıcı içeriklerle ROI (Yatırım Getirisi) odaklı kampanyalar yönetiyoruz.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Sosyal Medya Yönetimi",
      "Google Ads (PPC)",
      "Meta Reklamları",
      "İçerik Pazarlaması",
      "E-posta Pazarlama",
      "Marka Kimliği",
    ],
    benefits: [
      {
        title: "Doğru Hedefleme",
        desc: "Bütçenizi boşa harcamadan, hizmetinizle gerçekten ilgilenen kişilere ulaşmanızı sağlıyoruz.",
      },
      {
        title: "Yaratıcı İçerik",
        desc: "Sıkıcı reklamlardan kaçınıyor, hedef kitlenizle bağ kuracak özgün ve dikkat çekici içerikler üretiyoruz.",
      },
    ],
    seoTitle: "Karaman Dijital Pazarlama | Sosyal Medya ve Reklam Yönetimi",
    seoDescription:
      "Markanızı dijitalde büyütüyoruz. Karaman sosyal medya yönetimi, Google Ads ve Meta reklamları ile doğru hedef kitleye ulaşın.",
    keywords: ["karaman dijital pazarlama", "karaman sosyal medya yönetimi", "karaman reklam ajansı", "google ads karaman"],
  },
  {
    id: "seo-optimizasyonu",
    slug: "seo-optimizasyonu",
    order: 4,
    title: "SEO Çözümleri",
    subtitle: "Görünürlüğünüzü Artırın",
    description:
      "Teknik SEO, içerik iyileştirmeleri ve yerel arama odaklı çalışmalarla web sitenizin anlaşılmasını ve organik görünürlüğünü geliştiriyoruz.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Anahtar Kelime Analizi",
      "Teknik SEO Denetimi",
      "İçerik Stratejisi",
      "Backlink Yönetimi",
      "Yerel SEO (Karaman)",
      "Performans Takibi",
    ],
    benefits: [
      {
        title: "Sürdürülebilir Trafik",
        desc: "Reklam maliyetlerinizi düşürerek, organik aramalardan sürekli ve ücretsiz trafik çekmenizi sağlıyoruz.",
      },
      {
        title: "Dönüşüm Odaklılık",
        desc: "Sadece hit değil, satış getirecek doğru anahtar kelimelerle sitenizi optimize ediyoruz.",
      },
    ],
    seoTitle: "Karaman SEO Ajansı & Google SEO Hizmeti",
    seoDescription:
      "Teknik SEO, içerik SEO ve yerel SEO ile Karaman’daki işletmeniz için sürdürülebilir organik görünürlük çalışmaları.",
    keywords: ["karaman seo", "karaman arama motoru optimizasyonu", "karaman dijital pazarlama", "seo danışmanlığı karaman"],
  },
];

export const defaultBlogPosts: BlogPost[] = [
  {
    id: "reklamin-gucu-isletme-buyutme",
    slug: "reklamin-gucu-isletme-buyutme",
    order: 1,
    title: "Dijital Reklamın Gücü: İşletmenizi Nasıl Öne Çıkarırsınız?",
    excerpt:
      "Dijital reklamcılığın yerel işletmeler için önemini ve marka bilinirliğini artırma stratejilerini keşfedin. Karaman pazarındaki fırsatları kaçırmayın.",
    date: "24 Nisan 2024",
    category: "Reklam",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop",
    content: `Gelişen ticaret dünyasında ve sanayide ön plana çıkan şehirlerde, yerel işletmelerin rekabet gücünü koruması artık sadece fiziksel varlıkla mümkün değil. Dijital dünyada doğru reklam stratejileri uygulamak, işletmenizin bölgesel bir marka haline gelmesi için en kritik adımdır.

**Neden Dijital Reklam?**
Geleneksel reklam yöntemleri (tabela, el ilanı vb.) hala bir yere sahip olsa da, hedef kitlenize doğrudan ve ölçülebilir bir şekilde ulaşmanın yolu dijitalden geçiyor. Karaman'daki bir restoranın veya mobilya mağazasının sadece o anda o ürünü arayan kişilere reklam göstermesi, bütçenin ilgili arama talebine odaklanmasını sağlayabilir.

**Yerel Stratejiler:**
- **Google Harita Reklamları:** Bir hizmet arayan (örn: 'Karaman oto servis') kullanıcıların karşısına haritalarda en üstte çıkın.
- **Sosyal Medya Hedefleme:** Belirli bölgelerdeki yaş gruplarına, ilgi alanlarına göre Meta (Instagram/Facebook) reklamları kurgulayın.
- **Yaratıcı İçerik:** Sadece 'satıyoruz' demek yerine, yerel müşterilerinizin ihtiyaçlarına çözüm sunduğunuzu gösteren hikayeler anlatın.

Entek Digital olarak, bölgenin yerel dinamiklerini biliyor ve markanızı doğru kitleyle buluşturmak için veriye dayalı reklam kampanyaları yönetiyoruz.`,
  },
  {
    id: "modern-web-tasarim-trendleri-2025",
    slug: "modern-web-tasarim-trendleri-2025",
    order: 2,
    title: "Modern Web Tasarım Trendleri 2025: Neden Yazılım Önemli?",
    excerpt:
      "2025 yılında web tasarım dünyasını şekillendirecek teknolojiler ve hızlı yazılımın kullanıcı deneyimi üzerindeki kritik etkisi.",
    date: "22 Nisan 2024",
    category: "Web Tasarım",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop",
    content: `Web dünyası 2025'e girerken artık sadece 'güzel görünen' siteler yetmiyor. Modern bir web sitesi, bir yazılım harikası olmalı; hızlı, güvenli ve kullanıcıyla etkileşim kuran bir yapıya sahip olmalıdır.

**2025'in Öne Çıkan Trendleri:**
1. **Bento Grid Layoutlar:** İçeriklerin kutucuklar halinde, düzenli ve modern bir şekilde sunulması.
2. **Micro-Animations:** Kullanıcı fareyi hareket ettirdiğinde veya bir butona tıkladığında gerçekleşen küçük, akıcı animasyonlar.
3. **Dark Mode Odaklı Tasarım:** Premium markaların vazgeçilmezi olan koyu tema tasarımları.

**Yazılımın Önemi:**
Bir web sitesinin tasarımı ne kadar iyi olursa olsun, eğer geç açılıyorsa kullanıcıyı kaybedersiniz. Bu noktada Next.js gibi modern teknolojiler devreye giriyor. Biz, Entek Digital'de sitelerinizi standart platformlar yerine özel kodlayarak, Google'ın en sevdiği hız değerlerini (Core Web Vitals) sağlıyoruz.

İşletmeniz için sadece bir vitrin değil, 7/24 çalışan dijital bir şube inşa ediyoruz.`,
  },
  {
    id: "kapsamli-seo-rehberi-zirveye-ulasin",
    slug: "kapsamli-seo-rehberi-zirveye-ulasin",
    order: 3,
    title: "Kapsamlı SEO Rehberi: Web Sitenizi Google'da Zirveye Taşıyın",
    excerpt:
      "Arama motoru optimizasyonu (SEO) ile yerel aramalarda rakiplerinizin önüne geçmenin teknik ve içerik odaklı yolları. Karaman SEO stratejileri burada.",
    date: "20 Nisan 2024",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    content: `Bir hizmet arayan herkesin ilk durağı Google. Yerel aramalarda görünür olmamak, işletmenizin ilgili müşterilere ulaşmasını zorlaştırabilir.

**SEO'da Başarının 3 Sırrı:**
- **Teknik SEO:** Sitenizin kod yapısının hatasız olması, mobil uyumluluk ve hız. Google'ın sitenizi kolayca tarayabilmesi gerekir.
- **Anahtar Kelime Stratejisi:** Sadece genel değil, bölge odaklı kelimelere (örn: Karaman web tasarım) yatırım yapmak.
- **Kullanıcı Deneyimi:** Ziyaretçinin sitede kalma süresi. Eğer kullanıcı aradığı cevabı buluyorsa, Google sizi ödüllendirir.

**Yerel SEO'nun Gücü:**
Spesifik bölgelerde SEO çalışması yapmak, ulusal çapta rekabet etmekten daha hızlı sonuç verir. Sonuçların süresi sitenin durumuna ve rekabete bağlıdır; belirli bir süre veya sıralama garanti edilemez.

Entek Digital, teknik analizden içerik üretimine kadar tüm SEO süreçlerinizde profesyonel destek sunar.`,
  },
  {
    id: "ozel-yazilim-kurumsal-verimlilik",
    slug: "ozel-yazilim-kurumsal-verimlilik",
    order: 4,
    title: "Özel Yazılım Çözümleri: Kurumsal Verimliliği Artırmanın Yolları",
    excerpt:
      "İş süreçlerinizi otomatize eden özel yazılımların, işletme maliyetlerini düşürme ve rekabet avantajı sağlama üzerindeki etkisi.",
    date: "18 Nisan 2024",
    category: "Yazılım",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    content: `Hazır yazılım paketleri genellikle işletmelerin %80 ihtiyacını karşılar, ancak o kalan %20'lik kısım asıl farkı yaratan yerdir. Kurumsal verimlilik, işletmenize özel geliştirilen yazılımlarla maksimize edilir.

**Neden Özel Yazılım?**
- **İhtiyaca Tam Uyum:** İş süreçleriniz yazılıma değil, yazılım sizin süreçlerinize uyar.
- **Maliyet Tasarrufu:** Manuel yapılan hataları sıfıra indirir ve insan gücünü daha stratejik alanlara kaydırmanıza olanak tanır.
- **Veri Güvenliği:** Standart paketlerdeki güvenlik açıklarından kaçınarak, verilerinizi size özel bir kalede saklarsınız.

**Geleceğin Yazılım Teknolojileri:**
Entek Digital olarak biz; yapay zeka entegrasyonlu CRM sistemleri, bulut tabanlı takip yazılımları ve yüksek güvenlikli özel otomasyonlar geliştiriyoruz. Yazılım bir maliyet değil, işletmenizin geleceğine yapılan en akıllı yatırımdır.`,
  },
];
