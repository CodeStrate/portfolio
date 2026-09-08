import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/content";

export const metadata = {
  title: `Contact — ${profile.name}`,
};

const CONTACT_LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/CodeStrate", href: profile.links.github },
  { label: "LinkedIn", value: "linkedin.com/in/hardikcs", href: profile.links.linkedin },
  { label: "LeetCode", value: "leetcode.com/u/CodeStrate", href: profile.links.leetcode },
  { label: "Hugging Face", value: "huggingface.co/codestrate", href: profile.links.huggingface },
];

export default function ContactPage() {
  return (
    <Container className="py-24">
      <SectionHeading eyebrow="Get in Touch" title="Contact" />
      <p className="max-w-xl text-base leading-relaxed text-overlay2">
        Open to interesting AI/ML engineering work, freelance collaborations, and conversations
        about LLMs, agents, and fine-tuning. Reach out through any of the channels below.
      </p>
      <div className="mt-12 divide-y divide-surface0 border-t border-surface0">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="group flex items-center justify-between py-5 transition-colors hover:text-blue"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-overlay1 group-hover:text-blue">
              {link.label}
            </span>
            <span className="text-text group-hover:text-blue">{link.value} &rarr;</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
