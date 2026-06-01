# Brand Kit Studio Instructions

## Working Style

- Keep this project local-first unless the owner explicitly approves deployment.
- Explain changes in plain English and separate local preview work from anything live.
- Prefer small, reversible changes over broad rewrites.

## Brand System

- Treat `docs/brand/BRAND_GUIDE.md` as the source of truth for Brand Kit Studio brand strategy, voice, visual style, colors, typography, logos, and asset usage.
- New UI, copy, images, social assets, and marketing pages should reference the brand files and design tokens by default.
- Do not invent unrelated colors, fonts, logos, illustration styles, or brand claims unless the owner explicitly asks for a new direction.
- If the brand system and existing code disagree, call out the mismatch before making broad visual changes.

## Project Structure

- Keep the app in this folder.
- Keep project docs under `docs/`.
- Keep brand docs under `docs/brand/`.
- Keep project-bound brand assets under `public/brand/`.

## QA

- Run `npm run check` before marking code edits complete.
- When UI changes are made, run the local app and check desktop plus mobile-sized layouts.
- Do not add external services, API keys, paid providers, or live export destinations without owner approval.
