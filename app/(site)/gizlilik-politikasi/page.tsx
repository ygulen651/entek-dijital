import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "Mobil Uygulama Gizlilik Politikası",
    "Entek Digital mobil uygulamasında hesap, gelir-gider, proje ve yatırım bilgilerinin kullanımı, korunması ve silinmesine ilişkin gizlilik politikası.",
    "/gizlilik-politikasi",
  ),
};

const sections = [
  {
    id: "kapsam",
    title: "1. Kapsam ve uygulama sahibi",
    paragraphs: [
      "Bu gizlilik politikası, Entek Digital mobil uygulamasının hesap, gelir-gider takibi, proje takibi ve yatırım kayıtları özellikleriyle ilgili kişisel veri işleme faaliyetlerini açıklar.",
      "Uygulamanın sahibi ve veri sorumlusu Yusuf Gülen’dir. Gizlilik ve kişisel veri başvuruları için iletişim adresi info@entekdigital.com’dur. Bu metin mobil uygulama içindir; web sitesindeki bülten, iletişim formu ve canlı destek işlemlerini kapsamaz.",
    ],
  },
  {
    id: "veriler",
    title: "2. İşlenen bilgiler ve kullanım amaçları",
    paragraphs: [
      "Ad ve e-posta adresi: Uygulamadaki kullanıcı hesabının tanımlanması ve hesapla ilgili iletişimin yürütülmesi için kullanılır.",
      "Gelir-gider kayıtları: Kullanıcının uygulamaya girdiği gelir ve gider bilgilerinin takibi ve görüntülenmesi için kullanılır.",
      "Proje kayıtları: Kullanıcının uygulamaya girdiği proje bilgilerinin takibi ve yönetimi için kullanılır.",
      "Yatırım kayıtları: Kullanıcının uygulamaya girdiği yatırım bilgilerinin takibi ve görüntülenmesi için kullanılır.",
      "Uygulamada reklam ve bildirim özelliği bulunmamaktadır.",
    ],
  },
  {
    id: "toplama",
    title: "3. Verilerin toplanma yöntemi ve hukuki sebep",
    paragraphs: [
      "Ad, e-posta ve takip kayıtları, kullanıcı tarafından uygulamaya girilen bilgiler üzerinden elektronik ortamda toplanır. Veriler Google’ın Firebase altyapısında saklanır.",
      "Hesap ve takip özelliklerinin sunulması için gerekli bilgiler, 6698 sayılı Kanun’un 5. maddesinin ikinci fıkrasının (c) bendinde yer alan, sözleşmenin kurulması veya ifasıyla doğrudan ilgili ve gerekli olma şartına dayanılarak işlenir. Bir hukuki yükümlülüğün yerine getirilmesi için zorunlu işlemler aynı fıkranın (ç) bendi kapsamında yürütülür. Açık rıza gerektiren ek bir işlem söz konusu olduğunda ayrıca rıza alınması gerekir; bu politikayı okumak veya uygulamayı kullanmak tek başına açık rıza olarak değerlendirilmez.",
    ],
  },
  {
    id: "paylasim",
    title: "4. Hizmet sağlayıcılar ve veri aktarımı",
    paragraphs: [
      "Hesap ve kullanıcı tarafından girilen takip bilgilerinin saklanması amacıyla Google Firebase altyapısından yararlanılır. Bu kapsamda bilgiler, uygulamanın veri saklama hizmetini sunan Firebase altyapısında işlenir.",
      "Firebase hizmetlerinin veri işleme konumları kullanılan ürüne ve proje yapılandırmasına göre değişebilir; veriler Türkiye dışındaki altyapılarda işlenebilir. Yurt dışına veri aktarımında 6698 sayılı Kanun’un 9. maddesindeki şartların sağlanması gerekir. Firebase kullanılması, tek başına bu şartların sağlandığı anlamına gelmez.",
    ],
  },
  {
    id: "saklama",
    title: "5. Saklama, güvenlik ve silme",
    paragraphs: [
      "Hesap bilgileriniz ve takip kayıtlarınız, hesabınız aktif olduğu sürece uygulamanın ilgili özelliklerini sunmak için Firebase altyapısında saklanır. Hesabınızı uygulama içindeki hesap silme işleviyle silebilirsiniz. Hesabın silinmesiyle ilişkili gelir-gider, proje ve yatırım kayıtları da silinir.",
      "Uygulamayı cihazdan kaldırmak, Firebase üzerinde saklanan hesabınızı ve kayıtlarınızı silmez. Verileriniz veya silme işlemiyle ilgili destek için info@entekdigital.com adresine başvurabilirsiniz.",
      "Veri sorumlusu, kişisel verilere hukuka aykırı erişimin ve hukuka aykırı işlemenin önlenmesi ile verilerin korunması için gerekli teknik ve idari tedbirleri almakla yükümlüdür. Hiçbir dijital sistem için mutlak güvenlik garantisi verilemez. Hesap erişim bilgilerinizi üçüncü kişilerle paylaşmayınız.",
    ],
  },
  {
    id: "tercihler",
    title: "6. Hesap ve veri tercihleri",
    paragraphs: [
      "Takip özelliklerine girdiğiniz bilgileri kendi kullanım ihtiyaçlarınıza göre belirleyebilirsiniz. Hizmeti kullanmayı bırakmak ve hesabınızla ilişkili kayıtları kaldırmak için uygulama içindeki hesap silme işlevini kullanabilirsiniz.",
    ],
  },
  {
    id: "haklar",
    title: "7. Kişisel verilerinizle ilgili haklarınız",
    paragraphs: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi isteme, işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme haklarına sahipsiniz.",
      "Ayrıca eksik veya yanlış verilerin düzeltilmesini, kanundaki şartlar çerçevesinde verilerin silinmesini veya yok edilmesini ve bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteyebilirsiniz. Münhasıran otomatik analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz edebilir ve kanuna aykırı işleme nedeniyle zarara uğrarsanız giderilmesini talep edebilirsiniz.",
      "Haklarınızla ilgili başvurularınızı veri sorumlusu Yusuf Gülen’e info@entekdigital.com adresi üzerinden iletebilirsiniz. Başvurunun niteliğine göre kimliğinizi doğrulamak için gerekli bilgiler talep edilebilir; başvurunuza şifre veya gereksiz kişisel belge eklemeyiniz.",
    ],
  },
  {
    id: "degisiklikler",
    title: "8. Politika güncellemeleri",
    paragraphs: [
      "Uygulamanın özelliklerinde veya veri işleme faaliyetlerinde değişiklik olduğunda bu politika güncellenir. Güncel metin bu sayfada yayımlanır ve son güncelleme tarihi belirtilir. Yeni bir veri işleme faaliyeti ayrıca bilgilendirme veya açık rıza gerektiriyorsa ilgili işlemden önce yerine getirilir.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative pt-28 pb-24 md:pt-36">
      <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" }]} />
      <div className="container mx-auto px-6 mt-10 max-w-5xl">
        <header className="border-b border-black/10 pb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-primary-neon mb-4">Entek Digital · Mobil Uygulama</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">Gizlilik Politikası</h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl">Hesap bilgileriniz ve gelir-gider, proje ve yatırım kayıtlarınız hakkında bilgilendirme.</p>
          <p className="mt-4 text-sm text-text-secondary">Son güncelleme: <time dateTime="2026-10-14">14 Ekim 2026</time></p>
        </header>
        <p className="my-8 text-sm text-text-secondary">Gizlilik başvuruları: <a href="mailto:info@entekdigital.com" className="underline underline-offset-4 hover:text-primary-neon">info@entekdigital.com</a> · Veri sorumlusu: Yusuf Gülen</p>
        <nav aria-label="Politika içindekiler" className="rounded-2xl border border-black/10 bg-surface p-6 mb-12">
          <h2 className="font-bold text-lg mb-4">İçindekiler</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}><a href={`#${section.id}`} className="text-sm leading-relaxed hover:text-primary-neon underline underline-offset-4">{section.title}</a></li>
            ))}
          </ul>
        </nav>
        <article className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-baslik`} className="scroll-mt-32">
              <h2 id={`${section.id}-baslik`} className="font-heading text-2xl font-bold mb-4">{section.title}</h2>
              <div className="space-y-4 text-text-secondary leading-8">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>
          ))}
        </article>
        <p className="mt-12 text-sm text-text-secondary">Hizmet sağlayıcı hakkında ayrıntılı bilgi: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary-neon">Firebase Gizlilik ve Güvenlik</a>.</p>
      </div>
    </main>
  );
}
