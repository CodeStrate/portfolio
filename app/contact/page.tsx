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
    <div className="page-shell inner-page contact-page">
      <div className="inner-hero"><p className="section-kicker">CONTACT / OPEN CHANNEL</p><h1>Let&apos;s make<br /><em>something useful.</em></h1><p>Open to AI/ML engineering roles, collaborations, and thoughtful conversations about models, agents, and retrieval.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a></div>
      <div className="contact-links"><p className="section-kicker">FIND ME ELSEWHERE</p>{CONTACT_LINKS.filter((link) => link.label !== "Email").map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"><span>{link.label}</span><span>{link.value}</span><span aria-hidden="true">↗</span></a>)}</div>
    </div>
  );
}
