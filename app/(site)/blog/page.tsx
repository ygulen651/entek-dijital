import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import BlogList from "@/components/BlogList";
import { getBlogPosts } from "@/lib/content";

export const metadata = pageMetadata("Web Tasarım, SEO ve Dijital Pazarlama Blogu", "Web tasarım, SEO, dijital reklam ve yazılım üzerine yazılar ve işletmeler için açıklayıcı rehberler.", "/blog");

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <><Breadcrumbs visible={false} items={[{ name: "Ana Sayfa", href: "/" }, { name: "Blog", href: "/blog" }]} /><BlogList posts={posts} /></>;
}
