# Entek Digital — Vercel ortam değişkenleri

Yereldeki gerçek Firebase Web değerlerinden `.env.vercel.local` dosyası hazırlandı. Bu dosya Git tarafından ignore edilir. Vercel'e girilecek altı değişkenin gerçek değerleri bu dosyada bulunur.

Vercel projesi → Settings → Environment Variables bölümüne aşağıdaki değişkenleri ekleyin. Production için etkinleştirin; preview ortamının da aynı Firebase projesini kullanmasını istiyorsanız Preview için de etkinleştirin.

| Değişken | Firebase Web yapılandırma alanı |
| --- | --- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `apiKey` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `authDomain` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `projectId` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `storageBucket` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `appId` |

İsteğe bağlı: `GOOGLE_SITE_VERIFICATION`, Search Console'un HTML meta tag yönteminde verdiği gerçek `content` değeridir. Yerel yapılandırmada bu token yok; uydurma bir değer eklemeyin. Mevcut HTML doğrulama dosyası ayrı bir doğrulama yöntemi olarak projede korunuyor.

Bu uygulama Firebase Web SDK kullanıyor. Firebase admin servis hesabı/private key, Sanity değişkenleri, GA/GTM ID ve Vercel token bu kodun gerektirdiği ortam değişkenleri değildir. `SEO_TEST_ORIGIN` yalnızca test script'i içindir.

Değerler Firebase Console → Project settings → General → Web uygulaması → SDK setup/configuration bölümünden de alınabilir. NEXT_PUBLIC değişkenleri frontend build'ine dahil edilir; değiştirdikten sonra yeni deployment gerekir.

- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Firebase Web kurulumu](https://firebase.google.com/docs/web/setup)

Vercel build ayarları: Framework Next.js, Root Directory proje kökü (`./`), Install Command `npm ci`, Build Command `npm run build`, Output Directory Next.js varsayılanı.

Firebase Console tarafında Authentication e-posta/şifre girişi, Firestore kuralları ve admin kaydı mevcut README'deki kurulumla eşleşmelidir. Storage ile görsel yükleme kullanılacaksa Storage ve kuralları da etkin olmalıdır. Ortam değişkenlerini eklemek Firebase kurallarını otomatik yayınlamaz.

## GitHub silme işleminin durumu

Kullanıcının açık seçimi üzerine `ygulen651/entek-dijital` deposunun `main` dalındaki 87 dosya `b440427` commit'iyle kaldırıldı. Git geçmişi korunuyor; yerel çalışan proje silinmedi. Silmeden önceki remote commit: `127e7ad6fb87a7b6ddd970b8a8843a93174deb51`.

Silme işleminin ardından Vercel build'i package.json/Next.js bulunamadığı için başarısız oldu. Bu belgeyle birlikte gelen geri yükleme commit'i güncel uygulama dosyalarını depo köküne geri getirir; package.json Next.js 16.2.4 bağımlılığını içerir. Yerel .env dosyaları ve Firebase servis hesabı anahtarı GitHub'a dahil edilmez. Vercel'de Root Directory proje kökü olmalı ve deployment yeni geri yükleme commit'ini kullanmalıdır.
