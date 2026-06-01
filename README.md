# Brand Kit Studio

Brand Kit Studio is a local-first brand system generator for project workspaces.

It helps turn rough product context into a reusable brand package with brand docs, design tokens, logo and social assets, and project rules that can live directly inside a real repository.

- Local-first by default: project inputs, preview capture, and install flow stay on your machine.
- Optional OpenAI image layer: logo-board and asset generation only run when you configure `OPENAI_API_KEY` and choose those actions.
- Built for implementation, not just inspiration: the output is meant to be installed into working projects, not left as a disconnected moodboard.

## Project Status

This repository is an early open-source local app for brand-system generation. It is strongest for founder-led product work, design-system cleanup, and repeatable repo setup. It is not a hosted multi-user design suite or a generic public website crawler.

## Why This Project Exists

Many small product teams and open-source projects suffer from the same problem: brand choices, design rules, and asset decisions are scattered across chats, screenshots, one-off prompts, and untracked files. Brand Kit Studio tries to make that work reproducible.

The goal is to create a practical bridge between project context and implementation-ready outputs so that future UI, content, and launch work can start from one clear source of truth.

## Quick Start

Requirements:

- Node.js 18 or newer

Run the local app:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5233/
```

Run the lightweight code check:

```bash
npm run check
```

## Core Workflow

Use the `Copy intake prompt` button, run that prompt inside the project chat you want to brand, then paste the JSON packet back into Brand Kit Studio. The app auto-imports complete packets, fills the brief, generates selectable brand directions from that project context, and automatically captures the project frame when the packet includes a running local preview URL.

More detail lives in `docs/AUTOMATION.md`.

## Direct Install

After choosing a direction, use the Full Test Readiness panel as the preflight checklist, preview the install, then click `Install approved kit`. Brand Kit Studio auto-detects the target project folder from the packet/local preview when possible; otherwise paste a folder from your configured workspace root. The installer writes brand docs, tokens, logo/social assets, and brand rules locally, merges references into `AGENTS.md` and `docs/PROJECT.md`, and backs up existing files before updating them.

## Visual Decision Mode

The Preview column shows three brand direction options with applied mini mockups. Use the `App`, `Website`, and `Logo kit` toggles to see the selected direction applied to different surfaces before exporting.

Drop a PNG/JPG screenshot from the target project into the intake uploader to use it as the actual preview frame. Brand Kit Studio will overlay each brand direction on that screenshot so the choice is closer to the real app or website.

For local projects, include a running `localhost` or `127.0.0.1` preview URL in the packet, or paste one into the source field and click `Capture local URL`. Brand Kit Studio captures that local screen, uses it in all three option cards plus the selected applied preview, and keeps public website capture blocked until a later approval-gated provider step exists.

## Logo Approval

Before direct install, Brand Kit Studio can generate standardized logo board images for every direction with `gpt-image-2`. If one board already contains the right logo, click `Use board logo` and generate the final logo directly from that board reference. If the board is close but not final, generate a four-variant image for the chosen direction. It defaults to high-quality image generation, keeps prompts collapsed unless needed, enlarges generated boards for review, supports full-screen image inspection, and locks later buttons while generation is running so the workflow cannot jump ahead.

After approving A/B/C/D, click `Generate final logo` to create the standalone approved logo asset. Manual PNG/JPG/WebP attachment remains available as a fallback.

The export also includes exact-size social assets for LinkedIn, YouTube, X, Facebook, Instagram, and profile/avatar use. Profile images are mark/icon-first because small round avatars should not contain long text; when an approved final logo image exists, the social exports embed that approved logo instead of falling back to generated initials.

## Saved Profiles

Use `Save profile` in the logo approval area to preserve the current brief, directions, generated images, revision notes, and logo decision. Once a profile is selected or restored, the same button becomes `Update profile` and overwrites that working draft instead of creating duplicates. Profiles are stored locally under `data/profiles/`, can be restored from the same panel, and can be deleted when they are no longer useful.

## Trust Boundary

- The app is local-first.
- Local preview capture only accepts `localhost`, `127.0.0.1`, or `::1`.
- Public website capture is intentionally blocked in the current version.
- OpenAI is used only for image-generation actions after local configuration.
- Direct install is limited to folders inside the configured workspace root.

## OpenAI Image Setup

Create `.env.local` from `.env.example`, add `OPENAI_API_KEY`, then restart the dev server. The default image model is `gpt-image-2` and the default quality is `high`.

Optional: configure `DESIGN_SCOUT_PROVIDER`, `DESIGN_SCOUT_HTTP_URL`, and `DESIGN_SCOUT_HTTP_TOKEN` to enrich Auto Design Scout through a live LazyWeb/internal design-transformation HTTP bridge. Leave those empty to use the built-in scout.

Optional: set `WORKSPACE_ROOT` when your project workspace lives somewhere other than `~/Documents/Codex/Workspace`.

## Current Limits

- Image generation uses OpenAI only after `OPENAI_API_KEY` is configured locally.
- Generated logo images are still concept assets until the owner approves them.
- Uploaded files are recorded as local references only; their full contents are not extracted yet.
- Visual previews are generated in-browser from the imported packet and selected direction. Imported PNG/JPG screenshots or captured local preview URLs can be used as real target frames for the applied preview.
- The export is a project-ready starting point that still needs owner review before final brand approval.
- Direct install is local-only and limited to project folders inside the configured workspace root.

## Brand System

The project brand source of truth lives in `docs/brand/BRAND_GUIDE.md`.

## Open Source

If you want to help improve the project, start with `CONTRIBUTING.md`. For private vulnerability reports, use `SECURITY.md`. Contributor behavior expectations live in `CODE_OF_CONDUCT.md`.
