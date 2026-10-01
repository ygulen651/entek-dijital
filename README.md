# Entek Digital Web Sitesi

Next.js (App Router) + Firebase. Sitenin tüm içeriği `/admin` adresindeki yönetim panelinden yönetilir.

## Geliştirme

```bash
npm install
npm run dev
```

## Yönetim paneli (`/admin`)

Panelden yönetilenler:

| Bölüm | Firestore koleksiyonu | Sitede |
| --- | --- | --- |
| Mesajlar | `messages` | İletişim formundan gelenler |
| Aboneler | `subscribers` | Footer bülten formu (CSV dışa aktarım) |
| Blog | `blog` | `/blog`, `/blog/[slug]`, ana sayfa |
| Projeler | `projects` | `/projects`, `/projects/[slug]`, ana sayfa |
| Hizmetler | `services` | `/hizmetler/[slug]`, menü ve footer linkleri |
| Yorumlar | `testimonials` | Ana sayfa, hakkımızda |
| Ekip | `team` | Ana sayfa, hakkımızda |
| Site Ayarları | `settings/general` | SEO, iletişim bilgileri, sosyal medya, kayan yazılar, footer görselleri |

Firebase yapılandırılmamışsa veya `settings/general` dokümanı yoksa site `lib/defaults.ts` içindeki varsayılan içerikleri gösterir.
Panelde yapılan her değişiklik sitenin önbelleğini anında temizler.

## Firebase kurulumu

1. [Firebase konsolunda](https://console.firebase.google.com) bir proje oluşturun ve bir **Web uygulaması** ekleyin.
2. `.env.example` dosyasını `.env.local` olarak kopyalayıp web uygulamasının yapılandırma değerlerini girin.
   Aynı değişkenleri Vercel > Project Settings > Environment Variables'a da ekleyin.
3. **Authentication** > Sign-in method > **E-posta/Şifre**'yi açın, Users sekmesinden yönetici kullanıcıyı oluşturun.
4. **Firestore Database** oluşturun. Rules sekmesine `firestore.rules` dosyasının içeriğini yapıştırıp yayınlayın.
5. Firestore'da `admins` adında bir koleksiyon oluşturun; doküman kimliği yöneticinin e-posta adresi (küçük harf) olsun
   (alan eklemek gerekmez, örn. `aktif: true`).
6. (İsteğe bağlı, görsel yükleme için) **Storage**'ı açın ve Rules sekmesine `storage.rules` içeriğini yapıştırın.
   Storage açılmazsa panelde görsel bağlantısı (URL) yapıştırarak da görsel eklenebilir.
7. `/admin` adresinden giriş yapın ve Genel Bakış ekranındaki **Mevcut içerikleri aktar** butonuna basın.
   Bu, sitede şu an görünen içerikleri veritabanına kopyalar; bundan sonra her şey panelden düzenlenir.

Firebase CLI kullanıyorsanız kurallar `firebase deploy --only firestore:rules,storage` ile de yayınlanabilir.
