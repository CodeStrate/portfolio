import type { ProjectEntry } from "@/lib/content";

const visualLabels: Record<ProjectEntry["visual"], string[]> = {
  hub: ["checkpoint.bin", "verify ✓", "publish → hub"],
  arena: ["T1–T7", "Champions T8–T9", "Agentic V2 ↗"],
  search: ["query", "vector + BM25", "sources ↗"],
  documents: ["PDF", "DOCX", "XLSX", "PPTX"],
  pedagogy: ["textbook.pdf", "structured.json", "class.xlsx"],
  data: ["question", "SELECT *", "insight ↗"],
  models: ["dataset", "LoRA", "model hub ↗"],
  graph: ["node A", "edge", "node B"],
};

export function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  return (
    <article className="project-card">
      <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
        <div className="visual-topline">
          <span>H/S · {String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
        </div>
        <div className="visual-orbit visual-orbit-one" />
        <div className="visual-orbit visual-orbit-two" />
        <div className="visual-core"><span>{project.name.slice(0, 2).toUpperCase()}</span></div>
        <div className="visual-flow">
          {visualLabels[project.visual].map((label, labelIndex) => (
            <span key={label}>
              {labelIndex > 0 && <i aria-hidden="true">→</i>}
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{project.eyebrow}</span><span>{project.date}</span></div>
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-outcome">{project.outcome}</p>
        <div className="project-tags" aria-label="Technologies">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <details className="project-details">
          <summary>What I built <span aria-hidden="true">＋</span></summary>
          {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </details>
        <div className="project-links">
          {project.links?.map((link) => (
            <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
