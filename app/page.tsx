import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import ShaderBackground from "@/components/shader/ShaderBackgroundLoader";
import { profile, projects } from "@/lib/content";

export default function Home() {
  const selectedProjects = projects.slice(0, 2);

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <ShaderBackground />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-base/10 to-base" />
        <Container>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-overlay1">
            {profile.title}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl italic leading-tight text-text md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-overlay2 md:text-lg">
            {profile.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-blue px-6 py-2.5 text-sm font-medium text-crust transition-opacity hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-surface2 px-6 py-2.5 text-sm font-medium text-text transition-colors hover:border-blue/50 hover:text-blue"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Selected Work" title="Recent Projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/projects" className="text-sm text-blue hover:underline">
              View all projects &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
