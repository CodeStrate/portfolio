import { ProjectExplorer } from "@/components/ProjectExplorer";
import { projects, profile } from "@/lib/content";

export const metadata = {
  title: `Projects — ${profile.name}`,
};

export default function ProjectsPage() {
  return (
    <div className="page-shell projects-page">
      <div className="section-heading-row">
        <div><p className="section-kicker">THE ARCHIVE / {String(projects.length).padStart(2, "0")} PROJECTS</p><h1>Work in <em>the open.</em></h1></div>
        <p>Tools, agents, models, and experiments. Every card links to code or a published artifact.</p>
      </div>
      <ProjectExplorer projects={projects} />
      <div className="projects-followup">For more experiments and code, visit <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>.</div>
    </div>
  );
}
