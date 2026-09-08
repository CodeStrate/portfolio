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
  name: string;
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
    "AI/ML Engineer with 1.5+ years of production experience shipping LLMs, RAG pipelines, agents, and fine-tuned open-source models across fintech and edtech. Comfortable across the full model lifecycle: dataset construction, LoRA fine-tuning, agentic workflow design, and MLOps observability. Two reasoning-distilled models published to Hugging Face Hub with 2000+ combined downloads.",
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
    name: "hf-publish-mcp",
    stack: "TypeScript, Bun, MCP, Hugging Face Hub, npm",
    date: "Jun 2026",
    description: [
      "Built and published an open-source stdio MCP server for fine-tuners to manage HF Hub repositories, featuring background upload tracking with phase/file-level progress, file integrity verification, surgical model-card edits with dry-run support, and job persistence across server restarts. 700+ cumulative downloads.",
    ],
    links: [{ label: "View on npm", url: "https://www.npmjs.com/package/hf-publish-mcp" }],
  },
  {
    name: "Claude Distilled Fine-Tuned Models",
    stack: "Python, Unsloth, Llama 3.2 1B & 3B, Kaggle T4, Hugging Face",
    date: "May 2026",
    description: [
      "Distilled Claude Opus 4.6/4.7 reasoning traces into Llama 3.2 1B/3B via Unsloth LoRA (r=32/64) on an 8.7K-example dataset; registered thinking tokens as special embeddings before adapter training to enforce clean reasoning boundaries, dropping loss from 2.14 to 1.74 on the 3B run.",
      "Multi-stage training across RTX 3050 (WSL2) and Kaggle T4; resolved tokenizer-embedding mismatch via a two-step GGUF merge. Published 2 models to HF Hub with 2000+ combined downloads.",
    ],
    links: [
      {
        label: "View on HF Hub",
        url: "https://huggingface.co/codestrate/Llama3.2-3B-Claude-Reasoning-Distill",
      },
    ],
  },
  {
    name: "LLM Gauntlet",
    stack: "Next.js, Tailwind CSS, Python, LM Studio, Vercel",
    date: "Apr 2026",
    description: [
      "Designed a structured eval framework benchmarking 15+ local model configs across 7 coding-task types (FIM parsing, async refactoring, race-condition detection, agentic workflow generation) with a multi-criteria scoring rubric, deployed as a live public leaderboard.",
    ],
    links: [{ label: "View live", url: "https://llmarena-ten.vercel.app/" }],
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
