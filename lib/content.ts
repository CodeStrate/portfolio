export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
    huggingface: string;
  };
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  category: "AI systems" | "Developer tools" | "Data & search";
  eyebrow: string;
  tagline: string;
  outcome: string;
  tags: string[];
  visual: "hub" | "arena" | "search" | "documents" | "pedagogy" | "data" | "models" | "graph";
  stack: string;
  date: string;
  description: string[];
  links?: ProjectLink[];
}

export type SkillAccent = "blue" | "teal" | "peach" | "mauve" | "green" | "yellow";

export interface SkillGroup {
  category: string;
  accent: SkillAccent;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dateRange: string;
  location: string;
}

export const profile: Profile = {
  name: "Hardik Sharma",
  title: "AI/ML Engineer",
  summary:
    "AI/ML engineer building LLM workflows, retrieval systems, developer tools, and fine-tuned models. I focus on practical deployment, measurable behavior, and interfaces people can use.",
  email: "sharmahardik0256@gmail.com",
  links: {
    github: "https://github.com/CodeStrate",
    linkedin: "https://linkedin.com/in/hardikcs",
    leetcode: "https://leetcode.com/u/CodeStrate/",
    huggingface: "https://huggingface.co/codestrate",
  },
};

export const experience: ExperienceEntry[] = [
  {
    company: "Parsewave",
    role: "Freelance Data Pipeline Engineer & AI Training Data Reviewer",
    dateRange: "May 2026 -- Present",
    location: "Remote",
    bullets: [
      "Built and maintained ETL data pipelines (Python, Pandas) to ingest, clean, and normalize raw multi-source datasets into structured formats ready for downstream LLM training and evaluation.",
      "Worked as an AI training data reviewer, auditing model completions and human-annotated samples against task rubrics for correctness, factuality, and formatting compliance, flagging edge cases for re-annotation.",
      "Implemented automated dataset validation checks (schema, deduplication, PII scrubbing) that cut manual QA review time on incoming batches by ~30%.",
      "Collaborated with the core engineering team to prioritize labeling guidelines and surface systematic annotation errors, improving inter-annotator agreement on subsequent batches.",
    ],
  },
  {
    company: "Qolaba AI",
    role: "Machine Learning Engineer",
    dateRange: "Oct 2025 -- Apr 2026",
    location: "Remote",
    bullets: [
      "Designed a provider-agnostic Document Skills Agent (Agno, Mastra) supporting 4 document formats (PDF/DOCX/XLSX/PPTX) across 3 LLM providers (Claude, Gemini, OpenAI) without code changes; Docker-containerized.",
      "Built a Pedagogical Engine (TypeScript, Mastra) applying NLP-based learning taxonomy classification to raw educational texts, automating curriculum structuring that saved 2-3 content staff ~4 hours of manual tagging per week.",
      "Instrumented prompt-eval and trace pipelines in Comet Opik; built an LLM-as-judge rubric isolating 3 recurring failure modes (citation drift, format breaks, refusal loops) and drove targeted prompt remediation, reducing hallucination rate by 35% on a 500-prompt eval set.",
      "Collaborated on a Neo4j Knowledge Graph with vector embeddings enabling meaning-based retrieval across Education Board textbooks; built automated regression tests catching output degradation across Claude, Gemini, and OpenAI.",
    ],
  },
  {
    company: "VDOIT Technologies",
    role: "Backend & AI/ML Engineer",
    dateRange: "Jan 2025 -- Oct 2025",
    location: "Gurugram, Haryana",
    bullets: [
      "Integrated multimodal Transformers with HomeAssistant for agentic smart home automation; built a natural language intent classification layer that reduced manual user intervention by 40%.",
      "Architected V-Sense, a multi-label NLP + sentiment pipeline (FastAPI, PostgreSQL, Hugging Face) processing 1M+ emails with async batching, caching, auth/rate-limited REST APIs, and horizontal scalability.",
      "Built a document intelligence OCR pipeline with layout-aware Transformers, achieving 95%+ field extraction accuracy at half the processing time of the prior rule-based system.",
      "Built a RAG-powered WhatsApp chatbot (Twilio, Pinecone) indexing 1,000+ policy documents, improving first-contact resolution by 30% for a banking client.",
      "Mentored 4 junior engineers on Transformer fine-tuning, prompt engineering, and LLM agent development; led weekly code reviews and knowledge-sharing sessions.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    id: "hf-publish",
    name: "hf-publish-mcp",
    category: "Developer tools",
    eyebrow: "01 / Developer infrastructure",
    tagline: "The missing publish button for model builders.",
    outcome: "Open-source MCP server · npm package",
    tags: ["TypeScript", "Bun", "MCP", "Hugging Face"],
    visual: "hub",
    stack: "TypeScript, Bun, MCP, Hugging Face Hub, npm",
    date: "2026",
    description: [
      "A local MCP server for model publishers. It uploads checkpoints in the background, tracks file-level progress, checks repository completeness, and edits model cards with a reviewable dry run. Jobs persist across restarts.",
    ],
    links: [
      { label: "Source code", url: "https://github.com/CodeStrate/hf-publish-mcp" },
      { label: "npm package", url: "https://www.npmjs.com/package/hf-publish-mcp" },
    ],
  },
  {
    id: "gauntlet",
    name: "LLM Gauntlet",
    category: "AI systems",
    eyebrow: "02 / Evaluation",
    tagline: "Coding models, tested on actual engineering work.",
    outcome: "7 backend task types · public leaderboard",
    tags: ["React", "TypeScript", "Evaluation", "Local LLMs"],
    visual: "arena",
    stack: "React, TypeScript, Vite, local LLMs",
    date: "2026",
    description: [
      "An evaluation site for open-source coding models, scored on seven backend tasks including race-condition detection, async refactoring, and distributed job scheduling. The public repository contains the UI, scoring components, and leaderboard.",
    ],
    links: [
      { label: "Explore the site", url: "https://llm-gauntlet-blog.vercel.app/" },
      { label: "Source code", url: "https://github.com/CodeStrate/LLM-Gauntlet-BlogSite" },
    ],
  },
  {
    id: "semantic-search",
    name: "Semantic Search Engine",
    category: "Data & search",
    eyebrow: "03 / Retrieval",
    tagline: "Finding the right passage when keywords fall short.",
    outcome: "Hybrid vector + BM25 retrieval · cited results",
    tags: ["Python", "FastAPI", "ChromaDB", "BM25"],
    visual: "search",
    stack: "Python, FastAPI, ChromaDB, BM25",
    date: "2025",
    description: [
      "A document-search API for machinery safety material. It ingests PDFs, builds embeddings, combines vector similarity with BM25 lexical retrieval, and returns source-aware passages through a FastAPI endpoint.",
    ],
    links: [{ label: "Source code", url: "https://github.com/CodeStrate/semantic_search_engine" }],
  },
  {
    id: "document-skills",
    name: "Document Skills Agent",
    category: "AI systems",
    eyebrow: "04 / Agentic workflows",
    tagline: "An assistant that can actually work with files.",
    outcome: "PDF · DOCX · XLSX · PPTX workflows",
    tags: ["Python", "Agno", "Streamlit", "Docker"],
    visual: "documents",
    stack: "Python, Agno, Streamlit, Docker",
    date: "2026",
    description: [
      "A document-processing assistant with specialized skills for reading, creating, and editing Office files and PDFs. It includes model selection, file uploads, downloadable outputs, and a Docker setup.",
    ],
    links: [{ label: "Source code", url: "https://github.com/CodeStrate/Document_Skills_Agent" }],
  },
  {
    id: "pedagogy-agent",
    name: "Pedagogy Agent",
    category: "AI systems",
    eyebrow: "05 / Education AI",
    tagline: "From textbook PDFs to structured teaching material.",
    outcome: "PDF → pedagogical JSON → Excel workbooks",
    tags: ["TypeScript", "Mastra", "Bun", "Docker"],
    visual: "pedagogy",
    stack: "TypeScript, Mastra, Bun, Docker",
    date: "2026",
    description: [
      "Mastra agents structure textbook content into pedagogical JSON. A separate Bun CLI converts the output into per-class Excel workbooks, with a shared workspace and Docker support.",
    ],
    links: [{ label: "Source code", url: "https://github.com/CodeStrate/pedagogy-agent-mastra" }],
  },
  {
    id: "vigilius",
    name: "Vigilius Analyst",
    category: "Data & search",
    eyebrow: "06 / Data agents",
    tagline: "Ask a dataset a question in plain English.",
    outcome: "Natural language → SQL → analysis",
    tags: ["Python", "LangGraph", "SQL", "Streamlit"],
    visual: "data",
    stack: "Python, LangGraph, SQL, Streamlit",
    date: "2025",
    description: [
      "A Streamlit analysis assistant that accepts CSV, Excel, and SQLite data, generates and validates SQL from natural-language questions, and returns results with streaming responses and session history.",
    ],
    links: [{ label: "Source code", url: "https://github.com/CodeStrate/Vigilius_Analyst" }],
  },
  {
    id: "distilled-models",
    name: "Reasoning-Distilled Models",
    category: "AI systems",
    eyebrow: "07 / Model research",
    tagline: "Teaching smaller models to reason more clearly.",
    outcome: "Llama 3.2 1B and 3B · published on Hugging Face",
    tags: ["Python", "Unsloth", "LoRA", "Llama 3.2"],
    visual: "models",
    stack: "Python, Unsloth, LoRA, Hugging Face",
    date: "2026",
    description: [
      "Fine-tuned Llama 3.2 1B and 3B models on distilled reasoning examples using Unsloth and LoRA. The published model cards document the training setup and provide downloadable weights.",
    ],
    links: [
      { label: "3B model", url: "https://huggingface.co/codestrate/Llama3.2-3B-Claude-Reasoning-Distill" },
      { label: "1B model", url: "https://huggingface.co/codestrate/Llama3.2-1B-Claude-Opus-Reasoning-Distill" },
    ],
  },
  {
    id: "pixidb",
    name: "PixiDB",
    category: "Data & search",
    eyebrow: "08 / In progress",
    tagline: "A small local graph database experiment.",
    outcome: "Early-stage Python project",
    tags: ["Python", "Graph data", "In progress"],
    visual: "graph",
    stack: "Python, graph data",
    date: "2026",
    description: [
      "An early-stage local graph database. The public repository has source code and tests; its README is still a stub, so this is a look at ongoing work rather than a finished product.",
    ],
    links: [{ label: "Source code", url: "https://github.com/CodeStrate/pixiDB" }],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "AI & ML",
    accent: "blue",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "NLP",
      "Fine-Tuning (Unsloth, LoRA)",
      "Agentic Workflows (LangGraph, Mastra, Agno)",
      "Transformers",
      "Hugging Face Hub",
      "Vector/Graph DBs (Pinecone, Neo4j)",
    ],
  },
  {
    category: "Languages",
    accent: "teal",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Tools",
    accent: "peach",
    skills: ["PostgreSQL/MySQL", "Docker", "Git", "Linux", "Google Colab/Kaggle", "Postman"],
  },
];

export const education: Education = {
  institution: "Sushant University",
  degree: "B.Tech in Computer Science, AI/ML Specialization",
  dateRange: "Aug 2021 -- May 2025",
  location: "Gurugram, Haryana",
};
