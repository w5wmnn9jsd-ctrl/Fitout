import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/projects";

const stats = [
  { label: "Projects completed", value: "120+" },
  { label: "Years of experience", value: "12" },
  { label: "Client satisfaction", value: "98%" },
];

const services = [
  {
    title: "Kitchen fitouts",
    description: "From single-wall refreshes to full strip-out rebuilds with custom joinery.",
  },
  {
    title: "Full home renovation",
    description: "End-to-end renovation management, from planning through to final finishes.",
  },
  {
    title: "Office & retail fitout",
    description: "Commercial fitouts that balance brand, function, and budget.",
  },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              Fitout &amp; Renovation Studio
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Interiors built with care, from strip-out to final finish.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal/70">
              Tam Hadreen is a fitout and renovation studio helping homeowners
              and businesses turn tired spaces into warm, considered rooms
              that work harder for the people who use them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
              >
                View our work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Get a quote
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-charcoal/60">{stat.label}</dt>
                  <dd className="mt-1 font-display text-2xl text-charcoal sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/hero.svg"
              alt="Warm, modern living room fitout by Tam Hadreen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              preload
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-sand/40 py-20">
        <Container>
          <SectionHeading
            eyebrow="Featured work"
            title="A selection of recent projects"
            description="From kitchens to full commercial fitouts, every project starts with how the space will actually be used."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
            >
              View the full portfolio &rarr;
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Fitout services for homes and businesses"
            description="Whichever stage your project is at, we can help — from early design through to final handover."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-lg text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
            >
              See all services &rarr;
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
