"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "@/lib/projects";

export default function PortfolioGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "bg-charcoal text-cream"
                : "bg-white text-charcoal/70 hover:bg-sand/60"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-charcoal/60">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
