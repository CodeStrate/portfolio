import type { ProjectEntry } from "@/lib/content";

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <div className="rounded-lg border border-surface0 bg-mantle/60 p-6 transition-colors hover:border-blue/40">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold text-text">{project.name}</h3>
        <span className="shrink-0 font-mono text-xs text-overlay1">{project.date}</span>
      </div>
      <p className="mt-1 font-mono text-xs text-overlay0">{project.stack}</p>
      <div className="mt-4 space-y-2">
        {project.description.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-overlay2">
            {paragraph}
          </p>
        ))}
      </div>
      {project.links && project.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue underline-offset-4 hover:underline"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
