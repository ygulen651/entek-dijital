import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/BlogPostView";
import { getBlogPost } from "@/lib/content";
import { pageMetadata, absoluteUrl, siteConfig, isoDate } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  return pageMetadata(post.title, post.excerpt, `/blog/${post.slug}`, post.image || "/og", true);
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", "@id": absoluteUrl(path) + "#article", headline: post.title, description: post.excerpt, url: absoluteUrl(path), mainEntityOfPage: absoluteUrl(path), inLanguage: siteConfig.language, image: absoluteUrl(post.image || "/og"), author: post.author ? { "@type": "Person", name: post.author } : { "@id": siteConfig.url + "/#organization" }, publisher: { "@id": siteConfig.url + "/#organization" }, datePublished: isoDate(post.datePublished), dateModified: isoDate(post.dateModified) }} />
    <BlogPostView post={post} breadcrumbs={<Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: path }]} />} />
  </>;
}
