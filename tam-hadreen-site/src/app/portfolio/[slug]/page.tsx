import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Tam Hadreen`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="py-12 sm:py-16">
        <Container>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            &larr; Back to portfolio
          </Link>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
                {project.category}
              </p>
              <h1 className="mt-2 font-display text-3xl text-charcoal sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-charcoal/60">
                {project.location} &middot; {project.year}
              </p>
            </div>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl text-charcoal">
                About this project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/70">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-charcoal">
                Scope of work
              </h2>
              <ul className="mt-4 space-y-2">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-charcoal/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <CTASection
        title="Have a similar project in mind?"
        description="We'd love to hear about it. Get in touch and we'll talk through the details."
      />
    </>
  );
}
