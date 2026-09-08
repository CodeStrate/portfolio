import type { ExperienceEntry } from "@/lib/content";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="border-b border-surface0 py-8 last:border-none">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-lg font-semibold text-text">{entry.company}</h3>
        <span className="font-mono text-xs text-overlay1">{entry.dateRange}</span>
      </div>
      <div className="mt-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <p className="text-sm text-blue">{entry.role}</p>
        <span className="font-mono text-xs text-overlay0">{entry.location}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-overlay2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-surface2" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
