import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About | Tam Hadreen",
  description:
    "Tam Hadreen is a fitout and renovation studio built on straightforward planning, honest communication, and considered craft.",
};

const values = [
  {
    title: "Considered design",
    description: "Every layout and material choice starts with how the space will actually be used, not just how it will photograph.",
  },
  {
    title: "Honest communication",
    description: "Clear timelines, transparent budgets, and regular updates so there are no surprises along the way.",
  },
  {
    title: "Careful craft",
    description: "We work with trusted trades who take the same care in the details that we do in the design.",
  },
];

const team = [
  { name: "Noa Levi", role: "Founder & Principal Designer" },
  { name: "Yossi Cohen", role: "Head of Construction" },
  { name: "Maya Peretz", role: "Project Manager" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              About Tam Hadreen
            </p>
            <h1 className="mt-3 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
              A fitout studio built around how people actually live and work
            </h1>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              Tam Hadreen started as a small renovation crew working on
              kitchens and bathrooms across the Tel Aviv area. Over the years
              we&apos;ve grown into a full fitout studio, but the way we work
              hasn&apos;t changed: listen carefully, plan properly, and build
              things that last.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Today we take on projects ranging from single-room refreshes to
              full home renovations and commercial fitouts, always with the
              same focus on considered design and careful craft.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about.svg"
              alt="Tam Hadreen studio workspace"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-sand/40 py-20">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind every project"
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Our team" title="The people behind Tam Hadreen" align="center" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-terracotta/15 font-display text-2xl text-terracotta-dark">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-display text-lg text-charcoal">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal/60">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
