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
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p>&copy; {new Date().getFullYear()} {profile.name} <span>· Built to be explored.</span></p>
        <div className="footer-links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
