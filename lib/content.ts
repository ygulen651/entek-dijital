// Sitenin sunucu tarafında içerik okuduğu tek yer.
// Firestore'daki settings/general dokümanı yoksa (henüz içerik yüklenmemişse) varsayılan içerikler gösterilir;
// varsa Firestore tek doğruluk kaynağıdır.

import { unstable_cache } from "next/cache";
import { collection, doc, getDoc, getDocs, Timestamp } from "firebase/firestore/lite";
import { COLLECTIONS, getDb, isFirebaseConfigured, SETTINGS_DOC } from "./firebase";
import {
  defaultBlogPosts,
  defaultProjects,
  defaultServices,
  defaultSettings,
  defaultTeam,
  defaultTestimonials,
} from "./defaults";
import type { BaseDoc, BlogPost, Project, Service, SiteSettings, TeamMember, Testimonial } from "./types";

export const CONTENT_TAG = "content";
const REVALIDATE_SECONDS = 300;

// Firestore Timestamp'lerini client component'lere geçirilebilir sayılara çevirir.
function toPlain(value: unknown): unknown {
  if (value instanceof Timestamp) return value.toMillis();
  if (Array.isArray(value)) return value.map(toPlain);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, toPlain(v)]));
  }
  return value;
}

function sortByOrder<T extends BaseDoc>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

interface ContentSnapshot {
  settings: Partial<SiteSettings>;
  blog: BlogPost[];
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  team: TeamMember[];
}

const defaults: ContentSnapshot = {
  settings: defaultSettings,
  blog: defaultBlogPosts,
  projects: defaultProjects,
  services: defaultServices,
  testimonials: defaultTestimonials,
  team: defaultTeam,
};

async function readCollection<T extends BaseDoc>(name: string): Promise<T[]> {
  const snap = await getDocs(collection(getDb(), name));
  const items = snap.docs.map((d) => ({ ...(toPlain(d.data()) as object), id: d.id }) as T);
  return sortByOrder(items.filter((item) => item.published !== false));
}

const loadContent = unstable_cache(
  async (): Promise<ContentSnapshot> => {
    if (!isFirebaseConfigured) return defaults;
    try {
      const settingsSnap = await getDoc(doc(getDb(), COLLECTIONS.settings, SETTINGS_DOC));
      if (!settingsSnap.exists()) return defaults;

      const [blog, projects, services, testimonials, team] = await Promise.all([
        readCollection<BlogPost>(COLLECTIONS.blog),
        readCollection<Project>(COLLECTIONS.projects),
        readCollection<Service>(COLLECTIONS.services),
        readCollection<Testimonial>(COLLECTIONS.testimonials),
        readCollection<TeamMember>(COLLECTIONS.team),
      ]);

      return {
        settings: toPlain(settingsSnap.data()) as Partial<SiteSettings>,
        blog,
        projects,
        services,
        testimonials,
        team,
      };
    } catch (error) {
      console.error("Firestore içerikleri okunamadı, varsayılanlar kullanılıyor:", error);
      return defaults;
    }
  },
  ["site-content"],
  { tags: [CONTENT_TAG], revalidate: REVALIDATE_SECONDS }
);

// Varsayılanlarla birleştirme önbelleğin dışında yapılır; böylece sonradan eklenen alanlar
// eski önbellek kayıtlarında bile boş gelmez.
export async function getSettings(): Promise<SiteSettings> {
  const stored = (await loadContent()).settings;
  const merged = { ...defaultSettings } as SiteSettings;
  for (const [key, value] of Object.entries(stored)) {
    if (value !== undefined && value !== null) {
      (merged as unknown as Record<string, unknown>)[key] = value;
    }
  }
  return merged;
}

export async function getBlogPosts() {
  return (await loadContent()).blog;
}

export async function getBlogPost(slug: string) {
  return (await getBlogPosts()).find((p) => p.slug === slug) ?? null;
}

export async function getProjects() {
  return (await loadContent()).projects;
}

export async function getProject(slug: string) {
  return (await getProjects()).find((p) => p.slug === slug) ?? null;
}

export async function getServices() {
  return (await loadContent()).services;
}

export async function getService(slug: string) {
  return (await getServices()).find((s) => s.slug === slug) ?? null;
}

export async function getTestimonials() {
  return (await loadContent()).testimonials;
}

export async function getTeam() {
  return (await loadContent()).team;
}
