import type { ExperienceEntry } from "@/lib/content";

export function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  return (
    <article className="experience-entry">
      <div className="experience-number">{String(index + 1).padStart(2, "0")} <span /></div>
      <div><div className="experience-topline"><span>{entry.dateRange}</span><span>{entry.location}</span></div><h2>{entry.company}</h2><p className="experience-role">{entry.role}</p><p className="experience-lead">{entry.bullets[0]}</p><details className="experience-details"><summary>More about this role <span aria-hidden="true">＋</span></summary><ul>{entry.bullets.slice(1).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></details></div>
    </article>
  );
}
