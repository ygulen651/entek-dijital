import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SelectedWorks from "@/components/SelectedWorks";
import { pageMetadata } from "@/lib/seo";
import { getProjects } from "@/lib/content";

export const metadata = pageMetadata("Projeler ve Dijital Çalışmalar", "Entek Digital portföyündeki tasarım, web geliştirme ve dijital pazarlama çalışmalarını inceleyin.", "/projects");

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="pt-20">
      <Breadcrumbs visible={false} items={[{ name: "Ana Sayfa", href: "/" }, { name: "Projeler", href: "/projects" }]} />
      <SelectedWorks projects={projects} showAllLink={false} pageHeading />
    </main>
  );
}
