export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-overlay1">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl italic text-text md:text-5xl">{title}</h2>
      <div className="mt-4 h-px w-16 bg-blue/60" />
    </div>
  );
}
