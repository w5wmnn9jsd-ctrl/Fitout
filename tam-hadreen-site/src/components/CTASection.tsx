import Link from "next/link";
import Container from "./Container";

export default function CTASection({
  title = "Ready to start your fitout?",
  description = "Tell us about your space and we'll get back to you with next steps within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-charcoal py-20 text-cream">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-cream/70">{description}</p>
        <Link
          href="/contact"
          className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Get in touch
        </Link>
      </Container>
    </section>
  );
}
