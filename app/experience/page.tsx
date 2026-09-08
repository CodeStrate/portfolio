import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experience, profile } from "@/lib/content";

export const metadata = {
  title: `Experience — ${profile.name}`,
};

export default function ExperiencePage() {
  return (
    <Container className="py-24">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div>
        {experience.map((entry) => (
          <ExperienceCard key={entry.company} entry={entry} />
        ))}
      </div>
    </Container>
  );
}
