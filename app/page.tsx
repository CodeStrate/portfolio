import Link from "next/link";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { SystemsConsole } from "@/components/SystemsConsole";
import { profile, projects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero-section" id="top">
        <div className="page-shell">
          <div className="hero-kicker"><span className="status-dot" /> AI / ML ENGINEER <span className="hero-location">GURUGRAM, INDIA · AVAILABLE REMOTELY</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-intro">Hi, I&apos;m Hardik Sharma.</p>
              <h1>Building AI<br />that <em>works.</em></h1>
              <p className="hero-description">I turn models into useful systems: retrieval that finds the right answer, agents that handle real files, and tools that make shipping easier.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
                <a className="button-link" href={`mailto:${profile.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <SystemsConsole />
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>BUILD / EVALUATE / SHIP</span></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Areas of work">
        <div className="page-shell signal-inner"><span>01 / AGENTIC WORKFLOWS</span><span>02 / MODEL EVALUATION</span><span>03 / SEARCH & RETRIEVAL</span><span>04 / DEVELOPER TOOLS</span></div>
      </section>

      <section className="work-section page-shell" id="work">
        <div className="section-heading-row">
          <div><p className="section-kicker">01 / SELECTED WORK</p><h2>Things I&apos;ve <em>built.</em></h2></div>
          <p>Public code, working demos, and model artifacts. Pick a lane and take a closer look.</p>
        </div>
        <ProjectExplorer projects={projects.slice(0, 6)} />
        <div className="more-work"><Link href="/projects">Explore all {projects.length} projects <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="approach-section">
        <div className="page-shell approach-grid">
          <div><p className="section-kicker">02 / APPROACH</p><h2>Curiosity is good.<br /><em>Proof is better.</em></h2></div>
          <div className="approach-copy"><p>I like the messy middle between a promising model and a dependable product. That means testing failure modes, making outputs inspectable, and building tools around the people who use them.</p><div className="approach-links"><Link href="/experience">Experience <span aria-hidden="true">↗</span></Link><Link href="/about">More about me <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>

      <section className="contact-banner page-shell" id="contact">
        <p className="section-kicker">03 / GET IN TOUCH</p>
        <h2>Have a hard problem?<br /><em>Let&apos;s build.</em></h2>
        <a href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
      </section>
    </>
  );
}
