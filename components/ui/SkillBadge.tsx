import type { SkillAccent } from "@/lib/content";

const ACCENT_CLASSES: Record<SkillAccent, string> = {
  blue: "bg-blue/10 text-blue border-blue/30",
  teal: "bg-teal/10 text-teal border-teal/30",
  peach: "bg-peach/10 text-peach border-peach/30",
  mauve: "bg-mauve/10 text-mauve border-mauve/30",
  green: "bg-green/10 text-green border-green/30",
  yellow: "bg-yellow/10 text-yellow border-yellow/30",
};

export function SkillBadge({ label, accent }: { label: string; accent: SkillAccent }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${ACCENT_CLASSES[accent]}`}
    >
      {label}
    </span>
  );
}
