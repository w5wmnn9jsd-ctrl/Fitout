import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-charcoal">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-charcoal">{project.title}</h3>
        <p className="mt-1 text-sm text-charcoal/60">
          {project.location} &middot; {project.year}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
