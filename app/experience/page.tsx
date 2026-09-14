import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experience, profile } from "@/lib/content";

export const metadata = {
  title: `Experience — ${profile.name}`,
};

export default function ExperiencePage() {
  return (
    <div className="page-shell inner-page">
      <div className="inner-hero"><p className="section-kicker">EXPERIENCE / A RUNNING LOG</p><h1>Where I&apos;ve <em>shipped.</em></h1><p>Building production AI systems, data pipelines, and the tooling around them.</p></div>
      <div className="experience-list">{experience.map((entry, index) => <ExperienceCard key={entry.company} entry={entry} index={index} />)}</div>
    </div>
  );
}
