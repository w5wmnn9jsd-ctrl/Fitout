import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services | Tam Hadreen",
  description:
    "Fitout and renovation services from Tam Hadreen, including kitchens, full home renovation, office and retail fitout, and design consultation.",
};

const services = [
  {
    title: "Kitchen fitouts",
    description:
      "From single-wall refreshes to full strip-out rebuilds, we design and build kitchens around how you actually cook and live.",
    includes: [
      "Layout & cabinetry design",
      "Strip-out & demolition",
      "Electrical & plumbing coordination",
      "Stone, timber & tile finishes",
    ],
  },
  {
    title: "Full home renovation",
    description:
      "End-to-end renovation management for whole homes, coordinating every trade so the project stays on time and on budget.",
    includes: [
      "Project planning & scheduling",
      "Trade coordination",
      "Structural & layout changes",
      "Finishes & styling",
    ],
  },
  {
    title: "Office & retail fitout",
    description:
      "Commercial fitouts that balance brand, function, and budget, for offices, reception areas, and retail spaces.",
    includes: [
      "Space planning",
      "Custom joinery & signage integration",
      "Lighting design",
      "Compliance & handover",
    ],
  },
  {
    title: "Bathroom refits",
    description:
      "Full bathroom refits with a focus on waterproofing, storage, and a calm, spa-like finish.",
    includes: [
      "Waterproofing & tiling",
      "Fixtures & fittings",
      "Ventilation upgrades",
      "Storage design",
    ],
  },
  {
    title: "Design consultation",
    description:
      "Not ready to build yet? We offer standalone design consultations to help you plan layout, materials, and budget.",
    includes: [
      "Site assessment",
      "Concept design",
      "Material & finish selection",
      "Budget planning",
    ],
  },
  {
    title: "Outdoor & hospitality fitout",
    description:
      "Durable, weather-ready fitouts for rooftops, terraces, and hospitality spaces designed for year-round use.",
    includes: [
      "Decking & shade structures",
      "Weatherproof furniture",
      "Planting design",
      "Lighting",
    ],
  },
];

const process = [
  { step: "01", title: "Consultation", description: "We visit your space, listen to your goals, and talk through budget and timeline." },
  { step: "02", title: "Design", description: "We develop a layout and material palette, refining it together until it feels right." },
  { step: "03", title: "Build", description: "Our trades carry out the fitout, with regular updates so you always know where things stand." },
  { step: "04", title: "Handover", description: "We walk the finished space with you and take care of any final details before sign-off." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Fitout services for every kind of space"
            description="Whichever stage your project is at, we can help — from early design through to final handover."
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <ul className="mt-4 space-y-1.5">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-charcoal/60"
                    >
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-terracotta" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand/40 py-20">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A straightforward process, start to finish"
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <span className="font-display text-3xl text-terracotta">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
            >
              See the results in our portfolio &rarr;
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
