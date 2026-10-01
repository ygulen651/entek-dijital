// Firestore'da tutulan içerik tiplerinin ortak tanımları.

export interface BaseDoc {
  id: string;
  order?: number;
  published?: boolean;
}

export interface BlogPost extends BaseDoc {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}

export interface Project extends BaseDoc {
  slug: string;
  title: string;
  client?: string;
  category?: string;
  image: string;
  tags: string[];
  summary?: string;
  problem?: string;
  solution?: string;
  result?: string;
  technologies?: string[];
  gallery?: string[];
  url?: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface Service extends BaseDoc {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: ServiceBenefit[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export interface Testimonial extends BaseDoc {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TeamMember extends BaseDoc {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  keywords: string[];
  emails: string[];
  phone: string;
  addressLines: string[];
  locationLabel: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  behance: string;
  marqueeItems: string[];
  footerInstagramImages: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  read?: boolean;
  createdAt: number;
}

export interface Subscriber {
  id: string;
  email: string;
  createdAt: number;
}
