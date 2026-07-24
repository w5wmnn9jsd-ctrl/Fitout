import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Tam Hadreen",
  description:
    "Get in touch with Tam Hadreen to talk through your fitout or renovation project.",
};

const details = [
  { label: "Studio", value: "Tel Aviv, Israel" },
  { label: "Email", value: "hello@tamhadreen.com", href: "mailto:hello@tamhadreen.com" },
  { label: "Phone", value: "+972 00 000 0000", href: "tel:+972000000000" },
  { label: "Hours", value: "Sun–Thu, 9:00–18:00" },
];

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your project"
          description="Share a few details about your space and goals, and we'll get back to you within one business day."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg text-charcoal">
                Get in touch directly
              </h3>
              <dl className="mt-4 space-y-3">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-xs uppercase tracking-wide text-charcoal/50">
                      {detail.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-charcoal">
                      {detail.href ? (
                        <a href={detail.href} className="hover:text-terracotta">
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl bg-sand/50 p-6">
              <h3 className="font-display text-lg text-charcoal">
                Not sure where to start?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                Book a design consultation and we&apos;ll help you scope the
                project, from budget to timeline, before any work begins.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
