import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-charcoal text-cream/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-sm font-semibold text-cream">
              TH
            </span>
            <span className="font-display text-xl text-cream">Tam Hadreen</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Fitout and renovation studio crafting warm, considered interiors
            for homes and businesses.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li><Link href="/portfolio" className="hover:text-terracotta">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-terracotta">Services</Link></li>
            <li><Link href="/about" className="hover:text-terracotta">About</Link></li>
            <li><Link href="/contact" className="hover:text-terracotta">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>Kitchen fitouts</li>
            <li>Full home renovation</li>
            <li>Office & retail fitout</li>
            <li>Design consultation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>Tel Aviv, Israel</li>
            <li>
              <a href="mailto:hello@tamhadreen.com" className="hover:text-terracotta">
                hello@tamhadreen.com
              </a>
            </li>
            <li>
              <a href="tel:+972000000000" className="hover:text-terracotta">
                +972 00 000 0000
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Tam Hadreen. All rights reserved.</p>
          <p>Fitout & Renovation Studio</p>
        </Container>
      </div>
    </footer>
  );
}
