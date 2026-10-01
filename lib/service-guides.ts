export interface ServiceGuide { definition: string; audience: string; steps: string[]; faqs: { question: string; answer: string }[]; related: string[]; }

// Only guides for services already present in the repository.
export const serviceGuides: Record<string, ServiceGuide> = {
  "web-tasarim": {
    "definition": "Web tasarım; hizmetlerinizi, ürünlerinizi ve iletişim kanallarınızı erişilebilir bir web sitesinde sunma çalışmasıdır. Görsel tasarım, sayfa yapısı, mobil kullanım ve teknik geliştirme birlikte ele alınır.",
    "audience": "Kurumsal kimliğini internete taşımak veya mevcut sitesini yenilemek isteyen işletmeler için uygundur. Karaman’daki işletmeler için yerel müşterilerin ihtiyaçları da sayfa planına dahil edilir.",
    "steps": [
      "Hedef kitle, site amacı ve gerekli içerikler belirlenir.",
      "Sayfa yapısı ve tasarım yaklaşımı üzerinde anlaşılır.",
      "Mobil uyum, içerik yönetimi ve teknik SEO altyapısı geliştirilir.",
      "Formlar, bağlantılar, cihaz uyumu ve performans kontrol edilerek yayın hazırlanır."
    ],
    "faqs": [
      {
        "question": "Web sitesi yapımı ne kadar sürer?",
        "answer": "Süre; sayfa sayısı, içeriklerin hazır olması ve özel işlevlere göre değişir. İhtiyaçlar değerlendirildikten sonra proje takvimi belirlenir."
      },
      {
        "question": "Web sitesi mobil uyumlu olur mu?",
        "answer": "Mobil uyum hizmet kapsamındadır. Sayfa düzenleri farklı ekranlarda, menüler ve formlar da dokunmatik kullanım açısından kontrol edilir."
      },
      {
        "question": "Web sitesi Google’da çıkar mı?",
        "answer": "SEO uyumlu altyapı tarama ve indeksleme için temel oluşturur. İndeksleme ve sıralama arama motorunun değerlendirmesine bağlıdır; belirli bir sıra garanti edilmez."
      }
    ],
    "related": [
      "seo-optimizasyonu",
      "dijital-pazarlama"
    ]
  },
  "ozel-yazilim": {
    "definition": "Özel yazılım, hazır ürünlerin karşılamadığı iş süreçleri için ihtiyaca göre geliştirilen uygulamadır. CRM, ERP, otomasyon ve API entegrasyonları farklı kullanım alanlarıdır.",
    "audience": "Verileri farklı sistemlerde tutan, tekrarlayan işleri otomatikleştirmek veya uygulamalarını birbirine bağlamak isteyen işletmeler için uygundur. Özel geliştirme ile hazır çözümün maliyet ve bakım farkları ihtiyaç analizinde değerlendirilir.",
    "steps": [
      "İş akışları, kullanıcı rolleri ve veri ihtiyaçları analiz edilir.",
      "Öncelikli işlevler ve entegrasyonlar için kapsam belirlenir.",
      "Uygulama geliştirilir; yetkilendirme ve hata durumları test edilir.",
      "Kullanıma geçiş, dokümantasyon ve bakım kapsamı planlanır."
    ],
    "faqs": [
      {
        "question": "Hazır yazılım mı özel yazılım mı tercih edilmeli?",
        "answer": "Hazır yazılım standart süreçlerde hızlı başlangıç sağlayabilir. Özel yazılım özgün iş akışları için daha esnek olabilir. Karar; kapsam, bütçe ve bakım ihtiyaçlarıyla verilir."
      },
      {
        "question": "Mevcut sistemlerle entegrasyon yapılabilir mi?",
        "answer": "Entegrasyon, sistemlerin API erişimine, veri formatlarına ve izinlerine bağlıdır. Teknik imkanlar analiz aşamasında değerlendirilir."
      },
      {
        "question": "Bakım ve yeni özellikler nasıl planlanır?",
        "answer": "Bakım, güncellemeler ve yeni özelliklerin kapsamı proje anlaşmasında belirlenmelidir. Yeni ihtiyaçlar mevcut mimari ve iş öncelikleriyle değerlendirilir."
      }
    ],
    "related": [
      "web-tasarim"
    ]
  },
  "dijital-pazarlama": {
    "definition": "Dijital pazarlama; bir markanın hedef kitlesine web sitesi, arama motorları, sosyal medya ve reklam kanalları üzerinden ulaşmasını sağlayan çalışmalardır. İçerik, hedefleme ve ölçüm aynı plan içinde ele alınır.",
    "audience": "Marka bilinirliğini geliştirmek, ürün veya hizmetlerini tanıtmak ve kampanyalarını ölçmek isteyen işletmeler için uygundur. Kanal seçimi, kitlenin davranışına ve işletmenin hedeflerine göre yapılır.",
    "steps": [
      "Hedefler, mevcut kanallar ve hedef kitle değerlendirilir.",
      "İçerik, reklam kanalları ve bütçe planı oluşturulur.",
      "Kreatif içerikler ve kampanyalar hazırlanır.",
      "Ölçüm sonuçları incelenerek içerik ve hedefleme geliştirilir."
    ],
    "faqs": [
      {
        "question": "Sosyal medya yönetimi neleri kapsar?",
        "answer": "İçerik planı, kreatif üretim ve yayın sürecinin yönetimi temel başlıklardır. Platformlar, içerik adedi, reklam yönetimi ve raporlama kapsamı teklif aşamasında netleştirilir."
      },
      {
        "question": "Reklam bütçesi hizmet bedeline dahil mi?",
        "answer": "Platformlara ödenen reklam bütçesi ile kampanya yönetim bedeli ayrı kalemler olarak değerlendirilmelidir. Teklifte hangi bedellerin dahil olduğu belirtilir."
      },
      {
        "question": "Hangi reklam kanalı seçilmeli?",
        "answer": "Google Ads aktif arama talebine ulaşmak için, sosyal medya reklamları ise keşif ve bilinirlik için değerlendirilebilir. Seçim ürün, hedef kitle ve ölçülebilir amaçlara göre yapılır."
      }
    ],
    "related": [
      "seo-optimizasyonu",
      "web-tasarim"
    ]
  },
  "seo-optimizasyonu": {
    "definition": "SEO, bir web sitesinin arama motorları tarafından taranmasını ve içeriğinin anlaşılmasını kolaylaştıran teknik ve içerik çalışmalarının bütünüdür. Yerel SEO işletmenin hizmet verdiği bölgedeki ilgili aramalara odaklanır.",
    "audience": "Arama üzerinden ürün veya hizmet arayan kişilere ulaşmak, teknik sorunları gidermek ve içeriklerini geliştirmek isteyen işletmeler için uygundur. Karaman hedeflemesi gerçek hizmet alanı ve kullanıcı ihtiyaçlarıyla ele alınır.",
    "steps": [
      "Tarama, indeksleme, sayfa yapısı ve performans sorunları incelenir.",
      "Arama niyeti ve mevcut içerikler değerlendirilerek öncelikler belirlenir.",
      "Teknik düzeltmeler, içerik iyileştirmeleri ve dahili bağlantılar uygulanır.",
      "Search Console verileriyle indeksleme ve organik görünürlük takip edilir."
    ],
    "faqs": [
      {
        "question": "SEO ne kadar sürede sonuç verir?",
        "answer": "Süre; sitenin mevcut durumuna, rekabete, içerik kalitesine ve değişikliklerin yeniden taranmasına bağlıdır. Sabit süre veya sıralama garantisi verilemez; gelişim ölçüm verileriyle izlenir."
      },
      {
        "question": "SEO ile Google Ads arasındaki fark nedir?",
        "answer": "SEO organik arama görünürlüğünü geliştirmeye odaklanır. Google Ads ücretli reklam gösterimi sağlar ve reklam bütçesi gerektirir. İki kanal farklı amaçlarla birlikte kullanılabilir."
      },
      {
        "question": "Yerel SEO sadece şehir adını eklemek midir?",
        "answer": "Hayır. Tutarlı işletme bilgileri, faydalı hizmet içerikleri, doğru teknik altyapı ve Google Business Profile bilgilerinin doğruluğu birlikte değerlendirilir."
      }
    ],
    "related": [
      "web-tasarim",
      "dijital-pazarlama"
    ]
  }
};
