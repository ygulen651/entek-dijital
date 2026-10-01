import type { MetadataRoute } from 'next';
import { siteConfig, isoDate } from '@/lib/seo';
import { getBlogPosts, getProjects, getServices } from '@/lib/content';

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const [services, projects, posts] = await Promise.all([getServices(), getProjects(), getBlogPosts()]);

  const staticPages: MetadataRoute.Sitemap = [
    { path: '', changeFrequency: 'monthly' as const, priority: 1 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/projects', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.5 },
  ].map(({ path, ...rest }) => ({ url: `${baseUrl}${path || "/"}`, ...rest }));

  return [
    ...staticPages,
    ...services.filter(s => s.slug && s.published !== false).map((s) => ({
      url: `${baseUrl}/hizmetler/${s.slug}`,
      
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...projects.filter(p => p.slug && p.published !== false).map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...posts.filter(p => p.slug && p.published !== false).map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: isoDate(p.dateModified) || isoDate(p.datePublished),
      
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
