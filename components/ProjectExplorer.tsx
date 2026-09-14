"use client";

import { useState } from "react";
import type { ProjectEntry } from "@/lib/content";
import { ProjectCard } from "@/components/ui/ProjectCard";

const categories = ["All", "AI systems", "Developer tools", "Data & search"] as const;

export function ProjectExplorer({ projects }: { projects: ProjectEntry[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const visible = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <div className="project-explorer">
      <div className="filter-bar" aria-label="Filter projects by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}<span>{item === "All" ? projects.length : projects.filter((project) => project.category === item).length}</span>
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">Showing {visible.length} {visible.length === 1 ? "project" : "projects"}</p>
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />
        ))}
      </div>
    </div>
  );
}
