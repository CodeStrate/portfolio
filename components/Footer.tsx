import { profile } from "@/lib/content";

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "LeetCode", href: profile.links.leetcode },
  { label: "Hugging Face", href: profile.links.huggingface },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Footer() {
  return (
    <footer className="border-t border-surface0/50 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-overlay0">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="text-overlay1 transition-colors hover:text-blue"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
