# Brand Kit Studio

## What This Is

Brand Kit Studio is a local-first app for creating project-ready brand packages from rough ideas, notes, source URLs, uploaded files, screenshots, documents, PDFs, or images.

## Who It Serves

It serves founders, operators, designers, and coding-agent workflows that need a comprehensive brand foundation without manually assembling every guide, token, and asset list. It is especially useful for people who spin up many product ideas and want one repeatable source of truth before shipping UI, copy, or launch assets.

## Problem It Solves

New projects often start with scattered ideas and inconsistent design decisions. Brand Kit Studio creates one exportable source of truth so future Codex work can reference the same brand guide, visual system, voice rules, assets, and design tokens.

## Core Features

- Intake panel for project name, source URL, audience, notes, and uploaded reference files.
- Copyable Brand Intake Packet prompt for running inside any target project chat.
- Packet import that fills the app from JSON or markdown project context.
- Brand direction selector with three starting directions.
- Generated direction option board for comparing lanes before export.
- Visual Decision Mode with applied `App`, `Website`, and `Logo kit` previews for the selected direction.
- Auto Design Scout that infers reference lanes from project context and records best-practice principles before logo generation/export.
- Live Design Scout bridge endpoint that can enrich the built-in scout through DESIGNmd CLI search or a configured LazyWeb/internal design-transformation HTTP provider.
- Portfolio Brand Brain that scans Workspace projects and ranks which apps need brand guides, DESIGN.md, logos, tokens, or design-transformation/design-scout attention first.
- One-click project auto-intake from Portfolio Brand Brain: selected projects are read locally, turned into a full Brand Intake Packet, imported into the studio, and assigned their target project folder automatically.
- Full Automation AI Brain preview gallery that turns the auto-intake into three larger, comparable redesign choices so the owner can select a direction before logo generation or install.
- Real-frame option cards that show every generated direction applied to the same captured project screen.
- Logo approval workflow with `gpt-image-2` direction-board generation, four-variant selected-direction generation, revision notes, final logo generation, and an approve/skip gate before direct install.
- Direct board-logo approval for the case where a generated direction board already contains the preferred logo and variants are unnecessary.
- Guided logo review UX with high-contrast previews, high-quality image generation by default, collapsed prompt details, next-step button highlighting, and full-screen generated-image review.
- Saved profiles that preserve the current brief, generated images, revision notes, and logo decision for later restore, update existing working drafts by default, and support deleting stale profiles.
- Step-safe logo generation states that keep later actions locked until the current generation step finishes.
- Exact-size social asset exports for LinkedIn, YouTube, X, Facebook, Instagram, and profile/avatar usage, embedding the approved logo image when one exists and warning future implementation work to preserve its proportions instead of replacing it with generic starter marks.
- DESIGN.md export for AI coding agents, with brand snapshot, tokens, typography, logo rules, component rules, voice rules, and do/don't guidance.
- Tailwind v4 theme helper export alongside CSS variables and token JSON.
- Manual logo asset attachment for concept sheets and final PNG/JPG/WebP logo images.
- Target screenshot import for applying a selected brand direction over an actual project screen frame.
- Local URL capture for pulling a running `localhost` or `127.0.0.1` app into the preview frame automatically.
- Live preview of positioning, palette, typography, logo mark, Open Graph art, social profile art, and messaging, with secondary brand details collapsed after the main review flow.
- Local zip export with `DESIGN.md`, brand docs, design tokens, logo/social SVG assets, and an AGENTS brand rule.
- Direct local install with preview, Workspace-only target validation, file backups, and `DESIGN.md` / brand references merged into `AGENTS.md` / `docs/PROJECT.md`.
- Full Test Readiness panel that shows packet import, project preview, target folder, logo prompts, logo approval, install preview, and install completion status.
- Copyable Codex handoff prompt for installing an exported brand kit into a project.

## Current Architecture

- Static browser app.
- Node standard-library local server.
- Local `.env.local` support for OpenAI image generation.
- No external dependencies.
- Browser-only zip creation using uncompressed ZIP output.
- JSON/markdown intake-packet parsing in the browser.
- Browser-local logo prompt and approval-state generation.
- OpenAI image-generation route for `gpt-image-2` board, variant, and final logo assets.
- Browser-generated SVG social asset templates for exact platform dimensions; approved generated logos are embedded into logo and social exports as local image references.
- Generated `DESIGN.md` plus CSS variables, JSON tokens, and Tailwind v4 theme helper files.
- Built-in design-reference lane classifier for consumer AI, operator SaaS, marketplace trust, editorial luxury, learning products, and premium local services.
- `/api/design-scout` bridge route with `designmd-cli`, generic HTTP provider, and graceful fallback when no live provider is configured.
- `/api/portfolio-brand-opportunities` route that scans the local Workspace for missing brand/design assets and returns prioritized recommendations.
- `/api/project-brand-intake` route that converts a selected Workspace project into a Brand Kit Studio packet using local docs, existing brand files, local preview hints, category-aware direction logic, and missing-asset risks.
- Category-specific automation logic for proof-first trading command centers such as ProfitPilot, keeping paper proof, live blockers, and risk gates central to the brand direction.
- Local profile storage under `data/profiles/` for restoring brand kit sessions without committing generated assets.
- Binary-safe local install for attached logo image assets.
- Object URL preview frames for imported PNG/JPG/WebP screenshots.
- Local screenshot API route using headless Chrome for localhost-only capture.
- Local install API route for previewing and writing brand files into approved Workspace project folders.
- Configurable `WORKSPACE_ROOT`, defaulting to `~/Documents/Codex/Workspace` on macOS, so public users are not locked to one machine path.
- Fixed local port: `5233`.

## Setup

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5233/
```

## Checks

```bash
npm run check
```

## Important Decisions

- The app is local-first; OpenAI image generation runs only when `OPENAI_API_KEY` is configured.
- V1 records uploaded file names/types/sizes, but does not extract full file contents.
- V1 exports draft brand packages that need owner approval before being treated as final.
- Visual Decision Mode can use imported screenshots or local preview URL captures as actual project frames.
- Direct install requires approved logo selection or an explicit temporary skip.
- Attached logo images are local files and still need final owner review before becoming launch assets.
- Saved profiles are local working state, not final brand approval.
- Full test readiness is a local preflight panel, not a production deployment gate.
- Later AI extraction, website scanning, live design-reference provider calls, raster image generation, or direct project installation should stay approval-gated.

## Brand System

The project brand source of truth lives in `DESIGN.md` and `docs/brand/BRAND_GUIDE.md`. Future design, copy, image, and UI work should use those guides and the project brand tokens unless the owner asks for a different direction.

## Next Priorities

1. Add richer file and screenshot extraction.
2. Add optional one-click autopilot that generates logo board images immediately after a redesign direction is selected.
3. Add DESIGN.md import/parsing so pasted design specs can populate Brand Kit Studio fields.
4. Add AI-assisted brand direction generation behind explicit provider settings.
5. Add richer raster social/banner generation after logo approval.
6. Add optional public website capture behind an approval-gated provider/safety step.
