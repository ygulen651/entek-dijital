// Admin panelindeki her içerik türünün form alanları.
// Yeni bir alan eklemek için ilgili listeye bir satır eklemek yeterlidir.

import { COLLECTIONS } from "@/lib/firebase";

export type FieldType =
  | "text"
  | "textarea"
  | "richtext"
  | "slug"
  | "url"
  | "image"
  | "images"
  | "list"
  | "pairs"
  | "number"
  | "boolean";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  help?: string;
  // slug alanı hangi alandan üretilecek
  source?: string;
}

export interface CollectionDef {
  key: string;
  collection: string;
  title: string;
  singular: string;
  // listede başlık ve alt bilgi olarak gösterilecek alanlar
  titleField: string;
  subtitleField?: string;
  imageField?: string;
  // sitede hangi yolda görüntülendiği (slug ile)
  publicPath?: string;
  fields: FieldDef[];
}

const orderField: FieldDef = {
  name: "order",
  label: "Sıra",
  type: "number",
  help: "Küçük sayı önce gösterilir.",
};

const publishedField: FieldDef = {
  name: "published",
  label: "Sitede yayınla",
  type: "boolean",
};

export const collectionDefs: Record<string, CollectionDef> = {
  blog: {
    key: "blog",
    collection: COLLECTIONS.blog,
    title: "Blog Yazıları",
    singular: "Yazı",
    titleField: "title",
    subtitleField: "date",
    imageField: "image",
    publicPath: "/blog",
    fields: [
      { name: "title", label: "Başlık", type: "text", required: true },
      { name: "slug", label: "URL (slug)", type: "slug", source: "title", required: true },
      { name: "category", label: "Kategori", type: "text" },
      { name: "date", label: "Tarih", type: "text", help: "Örn: 24 Nisan 2024" },
      { name: "author", label: "Yazar", type: "text" },
      { name: "datePublished", label: "Doğrulanmış yayın tarihi (ISO)", type: "text", help: "Gerçek yayın tarihi: YYYY-MM-DD. Bilinmiyorsa boş bırakın." },
      { name: "dateModified", label: "Son içerik güncellemesi (ISO)", type: "text", help: "Gerçek güncelleme tarihi: YYYY-MM-DD. Bilinmiyorsa boş bırakın." },
      { name: "image", label: "Kapak görseli", type: "image" },
      { name: "excerpt", label: "Özet", type: "textarea" },
      {
        name: "content",
        label: "İçerik",
        type: "richtext",
        required: true,
        help: "Ara başlık için satırı **Başlık** şeklinde, madde için satırı - ile başlatın.",
      },
      orderField,
      publishedField,
    ],
  },
  projects: {
    key: "projects",
    collection: COLLECTIONS.projects,
    title: "Projeler",
    singular: "Proje",
    titleField: "title",
    subtitleField: "category",
    imageField: "image",
    publicPath: "/projects",
    fields: [
      { name: "title", label: "Başlık", type: "text", required: true },
      { name: "slug", label: "URL (slug)", type: "slug", source: "title", required: true },
      { name: "client", label: "Müşteri", type: "text" },
      { name: "category", label: "Kategori", type: "text" },
      { name: "image", label: "Kapak görseli", type: "image" },
      { name: "tags", label: "Etiketler", type: "list", help: "Her satıra bir etiket." },
      { name: "summary", label: "Kısa açıklama", type: "textarea" },
      { name: "problem", label: "Problem", type: "richtext" },
      { name: "solution", label: "Çözüm", type: "richtext" },
      { name: "result", label: "Sonuç", type: "richtext" },
      { name: "technologies", label: "Kullanılan teknolojiler", type: "list", help: "Her satıra bir teknoloji." },
      { name: "gallery", label: "Galeri görselleri", type: "images" },
      { name: "url", label: "Canlı site bağlantısı", type: "url" },
      orderField,
      publishedField,
    ],
  },
  services: {
    key: "services",
    collection: COLLECTIONS.services,
    title: "Hizmetler",
    singular: "Hizmet",
    titleField: "title",
    subtitleField: "subtitle",
    imageField: "image",
    publicPath: "/hizmetler",
    fields: [
      { name: "title", label: "Başlık", type: "text", required: true },
      { name: "slug", label: "URL (slug)", type: "slug", source: "title", required: true },
      { name: "subtitle", label: "Üst başlık", type: "text" },
      { name: "description", label: "Açıklama", type: "textarea" },
      { name: "image", label: "Görsel", type: "image" },
      { name: "features", label: "Neler sunuyoruz", type: "list", help: "Her satıra bir madde." },
      {
        name: "benefits",
        label: "Neden biz",
        type: "pairs",
        help: "Her satıra: Başlık | Açıklama",
      },
      { name: "seoTitle", label: "SEO başlığı", type: "text" },
      { name: "seoDescription", label: "SEO açıklaması", type: "textarea" },
      { name: "keywords", label: "SEO anahtar kelimeleri", type: "list", help: "Her satıra bir kelime." },
      orderField,
      publishedField,
    ],
  },
  testimonials: {
    key: "testimonials",
    collection: COLLECTIONS.testimonials,
    title: "Müşteri Yorumları",
    singular: "Yorum",
    titleField: "name",
    subtitleField: "role",
    imageField: "avatar",
    fields: [
      { name: "name", label: "Ad Soyad", type: "text", required: true },
      { name: "role", label: "Ünvan / Firma", type: "text" },
      { name: "avatar", label: "Fotoğraf", type: "image" },
      { name: "text", label: "Yorum", type: "textarea", required: true },
      orderField,
      publishedField,
    ],
  },
  team: {
    key: "team",
    collection: COLLECTIONS.team,
    title: "Ekip",
    singular: "Ekip Üyesi",
    titleField: "name",
    subtitleField: "role",
    imageField: "photo",
    fields: [
      { name: "name", label: "Ad Soyad", type: "text", required: true },
      { name: "role", label: "Görev", type: "text" },
      { name: "photo", label: "Fotoğraf", type: "image" },
      { name: "linkedin", label: "Linkedin", type: "url" },
      { name: "instagram", label: "Instagram", type: "url" },
      orderField,
      publishedField,
    ],
  },
};

export const settingsFields: FieldDef[] = [
  { name: "siteTitle", label: "Site başlığı (SEO)", type: "text", required: true },
  { name: "siteDescription", label: "Site açıklaması (SEO)", type: "textarea" },
  { name: "keywords", label: "Anahtar kelimeler", type: "list", help: "Her satıra bir kelime." },
  { name: "emails", label: "E-posta adresleri", type: "list", help: "Her satıra bir adres. İlki ana adres olarak gösterilir." },
  { name: "phone", label: "Telefon", type: "text" },
  { name: "addressLines", label: "Adres", type: "list", help: "Her satıra bir adres satırı." },
  { name: "locationLabel", label: "Menüdeki konum yazısı", type: "text" },
  { name: "instagram", label: "Instagram", type: "url" },
  { name: "linkedin", label: "Linkedin", type: "url" },
  { name: "twitter", label: "Twitter / X", type: "url" },
  { name: "facebook", label: "Facebook", type: "url" },
  { name: "behance", label: "Behance", type: "url" },
  { name: "marqueeItems", label: "Ana sayfa kayan yazılar", type: "list", help: "Her satıra bir ifade." },
  { name: "footerInstagramImages", label: "Footer Instagram görselleri", type: "images" },
];
