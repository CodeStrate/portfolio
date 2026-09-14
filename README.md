# Hardik Sharma — Portfolio

A static Next.js portfolio for AI systems, model evaluation, retrieval, and developer tools. Project summaries and links are maintained in [`lib/content.ts`](lib/content.ts). The homepage shows six selected projects; `/projects/` shows the full archive with client-side filters and expandable details.

## Local development

```bash
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` before publishing. `next.config.ts` uses `output: "export"`, so the production artifact is the `out/` directory. The project does not need a Node.js process at runtime.

## Hosting on UNO Q

Build on a development machine, then copy **only** `out/` to a versioned directory on `/mnt/aistuff/`. Serve it with a small static web server or reverse proxy. Keep `node_modules/`, `.next/`, and the source checkout off the board's eMMC; they are build-time assets and are not needed to serve the site.

For a local smoke test, from this repository:

```bash
python3 -m http.server 8765 --directory out
```

The September 2026 export is about 1.5 MB. A localhost-only Python static-server benchmark on UNO Q used about 18–19 MB RSS over 100 requests. That is a measurement of Python's simple server, not a production web-server sizing guarantee. Build on another machine to avoid competing with the board's agentic job-search loop for RAM and CPU.

## Content notes

Keep project claims tied to the linked public repository, model card, or demo. PixiDB is explicitly marked as early-stage until its public documentation matures. No live GitHub API calls are made by the site, so the portfolio keeps working if GitHub is temporarily unavailable.
