import { pageMetadata, pageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import RichText from "@/components/RichText";
import { getProject } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  return pageMetadata(project.title, project.summary || `${project.title} — Entek Digital proje detayları.`, `/projects/${project.slug}`, project.image || "/og");
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const caseSections = [
    { title: "Problem", text: project.problem },
    { title: "Çözüm", text: project.solution },
    { title: "Sonuç", text: project.result },
  ].filter((section) => section.text);

  return (
    <main className="bg-white min-h-screen pb-32">
      <section className="pt-40 pb-20 px-6 bg-surface">
        <div className="container mx-auto max-w-5xl space-y-8">
          <JsonLd data={pageSchema(project.title, project.summary || project.title, `/projects/${project.slug}`)} />
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Projeler", href: "/projects" }, { name: project.title, href: `/projects/${project.slug}` }]} />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} /> TÜM ÇALIŞMALAR
          </Link>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-primary-neon uppercase tracking-[0.2em]">
              {project.category && <span>{project.category}</span>}
              {project.client && <span className="text-black/40">{project.client}</span>}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-black leading-tight tracking-tighter">
              {project.title}
            </h1>
            {project.summary && <p className="text-xl text-black/60 font-sans max-w-3xl">{project.summary}</p>}
          </div>
        </div>
      </section>

      {project.image && (
        <section className="container mx-auto max-w-5xl px-6 -mt-12">
          <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 1024px" className="object-cover" priority />
          </div>
        </section>
      )}

      <section className="container mx-auto max-w-3xl px-6 pt-20 space-y-16">
        {caseSections.map((section) => (
          <div key={section.title} className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-black tracking-tight">{section.title}</h2>
            <RichText text={section.text!} />
          </div>
        ))}

        {project.technologies && project.technologies.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold text-black tracking-tight">Kullanılan Teknolojiler</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full border border-black/10 text-sm font-bold uppercase tracking-wide">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-primary-neon transition-all"
          >
            Projeyi Ziyaret Et <ArrowUpRight size={18} />
          </a>
        )}
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="container mx-auto max-w-5xl px-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-black/5">
              <Image src={src} alt={`${project.title} görsel ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 1024px" className="object-cover" />
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
