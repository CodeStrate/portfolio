import { SkillBadge } from "@/components/ui/SkillBadge";
import { profile, education, skills } from "@/lib/content";

export const metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  return (
    <div className="page-shell inner-page">
      <div className="inner-hero"><p className="section-kicker">THE PERSON / BEHIND THE SYSTEMS</p><h1>Curious by nature.<br /><em>Practical by design.</em></h1><p>{profile.summary}</p></div>
      <div className="about-layout">
        <section className="about-story"><p className="section-kicker">01 / HOW I WORK</p><h2>From a model<br />to a useful thing.</h2><p>I work across the space between research and product: shaping data, building agent workflows, testing retrieval, and packaging the result so it can be used and improved.</p><p>The projects here are a record of that process. Some are published tools, some are deployed interfaces, and some are still experiments in progress.</p></section>
        <section className="education-panel"><p className="section-kicker">02 / EDUCATION</p><h2>{education.institution}</h2><p>{education.degree}</p><div><span>{education.dateRange}</span><span>{education.location}</span></div></section>
      </div>
      <section className="skills-section"><div className="section-heading-row"><div><p className="section-kicker">03 / TOOLKIT</p><h2>The <em>building blocks.</em></h2></div><p>A mix of model work, backend systems, and the tools that connect them.</p></div><div className="skills-grid">{skills.map((group) => <div className="skill-panel" key={group.category}><h3>{group.category}</h3><div>{group.skills.map((skill) => <SkillBadge key={skill} label={skill} accent={group.accent} />)}</div></div>)}</div></section>
    </div>
  );
}
