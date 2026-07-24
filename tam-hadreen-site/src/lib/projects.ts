export type ProjectCategory =
  | "Residential"
  | "Kitchen"
  | "Office"
  | "Retail"
  | "Hospitality";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  image: string;
  summary: string;
  description: string;
  scope: string[];
}

export const projects: Project[] = [
  {
    slug: "kitchen-fitout",
    title: "Warm Modern Kitchen Fitout",
    category: "Kitchen",
    location: "Ramat Gan",
    year: "2025",
    image: "/images/gallery/kitchen-fitout.svg",
    summary: "A full kitchen strip-out and rebuild with custom joinery and warm terracotta accents.",
    description:
      "This full kitchen renovation replaced a dated galley layout with an open, sociable cooking space. We rebuilt the cabinetry run from scratch, ran new electrics and plumbing, and finished the space with a warm terracotta and oak palette that ties into the rest of the home.",
    scope: ["Strip-out & demolition", "Electrical & plumbing rework", "Custom cabinetry", "Stone benchtops", "Lighting design"],
  },
  {
    slug: "living-room-renovation",
    title: "Living Room Renovation",
    category: "Residential",
    location: "Herzliya",
    year: "2024",
    image: "/images/gallery/living-room-renovation.svg",
    summary: "Reworked living space with sage tones, natural textures, and improved natural light.",
    description:
      "A tired living room was opened up and re-planned around a large west-facing window. We introduced a sage and oak palette, layered lighting, and durable natural-fibre finishes suited to a young family.",
    scope: ["Layout redesign", "Flooring replacement", "Custom joinery", "Soft furnishings sourcing"],
  },
  {
    slug: "home-office-studio",
    title: "Home Office Studio",
    category: "Office",
    location: "Tel Aviv",
    year: "2025",
    image: "/images/gallery/home-office-studio.svg",
    summary: "A calm, focused home-working studio built into an underused spare room.",
    description:
      "We converted an unused spare bedroom into a dedicated home office with built-in desking, acoustic treatment, and a slate-blue palette designed to keep the space calm and focused through long working days.",
    scope: ["Built-in desk & storage", "Acoustic treatment", "Electrical & data points", "Lighting design"],
  },
  {
    slug: "bathroom-refit",
    title: "Bathroom Refit",
    category: "Residential",
    location: "Ramat Gan",
    year: "2024",
    image: "/images/gallery/bathroom-refit.svg",
    summary: "Full bathroom refit with a fresh, spa-like feel and improved storage.",
    description:
      "A cramped, dated bathroom was fully stripped back and refitted with a walk-in shower, floating vanity, and a soft green and stone palette that gives the room a calm, spa-like feel.",
    scope: ["Waterproofing", "Tiling", "Fixtures & fittings", "Ventilation upgrade"],
  },
  {
    slug: "master-bedroom",
    title: "Master Bedroom Suite",
    category: "Residential",
    location: "Kfar Saba",
    year: "2023",
    image: "/images/gallery/master-bedroom.svg",
    summary: "A restful master suite with built-in wardrobes and warm, layered lighting.",
    description:
      "This master bedroom fitout focused on storage and calm. We built a full-height wardrobe wall, added a reading nook by the window, and layered warm lighting to create a genuinely restful retreat.",
    scope: ["Built-in wardrobes", "Lighting design", "Flooring", "Window treatments"],
  },
  {
    slug: "boutique-retail",
    title: "Boutique Retail Fitout",
    category: "Retail",
    location: "Jaffa",
    year: "2025",
    image: "/images/gallery/boutique-retail.svg",
    summary: "A characterful boutique fitout with custom display joinery and statement lighting.",
    description:
      "For this independent boutique we designed and built custom display cabinetry, a striking pendant lighting scheme, and a warm, tactile material palette that helps the brand stand out on a busy street.",
    scope: ["Shopfront works", "Custom display joinery", "Lighting design", "Flooring"],
  },
  {
    slug: "reception-lobby",
    title: "Reception & Lobby Fitout",
    category: "Office",
    location: "Tel Aviv",
    year: "2024",
    image: "/images/gallery/reception-lobby.svg",
    summary: "A confident, welcoming reception fitout for a growing tech company.",
    description:
      "A first-impression project: we redesigned the reception and lobby for a fast-growing company, combining a custom reception desk, a considered material palette, and planting to create a warm but professional welcome.",
    scope: ["Reception desk build", "Feature lighting", "Signage & branding integration", "Planting & finishing touches"],
  },
  {
    slug: "rooftop-lounge",
    title: "Rooftop Lounge",
    category: "Hospitality",
    location: "Tel Aviv",
    year: "2023",
    image: "/images/gallery/rooftop-lounge.svg",
    summary: "An outdoor rooftop lounge fitout built for year-round use.",
    description:
      "We fitted out a bare rooftop into a comfortable, durable lounge space with weather-resistant seating, planting, and shade, designed to be used and enjoyed across all four seasons.",
    scope: ["Outdoor decking", "Weatherproof furniture build", "Planting design", "Shade structure"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categories: ProjectCategory[] = [
  "Residential",
  "Kitchen",
  "Office",
  "Retail",
  "Hospitality",
];
