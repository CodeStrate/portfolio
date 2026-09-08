import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { profile, education, skills } from "@/lib/content";

export const metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  return (
    <Container className="py-24">
      <SectionHeading eyebrow="About" title="Background" />
      <p className="max-w-2xl text-base leading-relaxed text-overlay2 md:text-lg">
        {profile.summary}
      </p>

      <div className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-overlay1">Education</h3>
        <div className="mt-4 border-b border-surface0 pb-8">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h4 className="text-lg font-semibold text-text">{education.institution}</h4>
            <span className="font-mono text-xs text-overlay1">{education.dateRange}</span>
          </div>
          <p className="mt-1 text-sm text-overlay2">{education.degree}</p>
          <p className="font-mono text-xs text-overlay0">{education.location}</p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-overlay1">Skills</h3>
        <div className="mt-4 space-y-8">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="mb-3 text-sm text-text">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} accent={group.accent} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
