import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio | Tam Hadreen",
  description:
    "Browse recent fitout and renovation projects by Tam Hadreen, spanning kitchens, homes, offices, retail, and hospitality spaces.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent fitout & renovation projects"
            description="Every space is different. Explore a selection of our recent work across residential, kitchen, office, retail, and hospitality fitouts."
          />
          <div className="mt-10">
            <PortfolioGrid />
          </div>
        </Container>
      </section>
      <CTASection
        title="Like what you see?"
        description="Share a few details about your project and we'll help you plan the next step."
      />
    </>
  );
}
