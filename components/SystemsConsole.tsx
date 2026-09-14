"use client";

import { useState } from "react";

const stages = [
  { id: "01", label: "Build", detail: "Agents, retrieval systems, and tools designed around real workflows.", signal: "input → system" },
  { id: "02", label: "Evaluate", detail: "Benchmarks and trace-driven checks that make failure modes visible.", signal: "test → evidence" },
  { id: "03", label: "Ship", detail: "Models and products packaged so other people can actually use them.", signal: "artifact → user" },
] as const;

export function SystemsConsole() {
  const [active, setActive] = useState(0);
  return (
    <div className="systems-console" aria-label="Explore how I work">
      <div className="console-header"><span><i /> SYSTEMS / IN MOTION</span><span>HS—01</span></div>
      <div className="console-display">
        <div className="console-rings" aria-hidden="true"><span /><span /><span /></div>
        <div className="console-active-number" aria-hidden="true">{stages[active].id}</div>
        <p className="console-signal">{stages[active].signal}</p>
      </div>
      <div className="console-stages" role="group" aria-label="Workflow stage">
        {stages.map((stage, index) => (
          <button type="button" key={stage.id} onClick={() => setActive(index)} aria-pressed={active === index}>
            <span>{stage.id}</span>{stage.label}
          </button>
        ))}
      </div>
      <p className="console-detail" aria-live="polite">{stages[active].detail}</p>
    </div>
  );
}
