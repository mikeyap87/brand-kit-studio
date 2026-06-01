# Brand Kit Studio DESIGN.md

Status: Project design source of truth.

Use with `docs/brand/BRAND_GUIDE.md`, `docs/brand/VISUAL_SYSTEM.md`, and `src/brand-tokens.css`.

## Purpose

Brand Kit Studio is a local-first brand lab for turning rough ideas, project packets, screenshots, and logo approvals into a complete brand source of truth that can live inside a Codex project.

## Brand Snapshot

- Brand/project: Brand Kit Studio
- Direction: Studio-grade operator
- Audience: Founders and operators starting or cleaning up Codex projects
- Promise: Turn messy idea inputs into a brand source of truth Codex can keep using.
- Traits: precise, useful, premium, grounded

## Design Tokens

```yaml
brand:
  name: "Brand Kit Studio"
  direction: "Studio-grade operator"
color:
  background: "#f8f8f5"
  surface: "#ffffff"
  text: "#141412"
  muted: "#66665f"
  border: "#d8d8cf"
  primary: "#22577a"
  primary_hover: "#102a37"
  accent: "#ff6b4a"
  secondary: "#e8a71c"
radius:
  sm: 4px
  md: 8px
shadow:
  soft: "0 18px 50px rgb(20 20 18 / 9%)"
font:
  heading: "Inter Tight, Inter, system-ui, sans-serif"
  body: "Inter, system-ui, sans-serif"
```

## UI Rules

- Keep the app workflow clear: intake, preview, logo approval, export/install.
- Prioritize visible state: generated, required, blocked, approved, installed, or draft.
- Use compact, high-contrast controls because this is an operator tool, not a marketing page.
- Keep previews large enough to make real visual decisions.
- Avoid decorative UI that competes with generated brand boards or approved logo assets.

## Logo And Asset Rules

- Preserve approved raster logos as source references when a generated kit includes them.
- Do not stretch, squash, redraw, or replace approved logo art with generic initials.
- Social profile assets should be mark-first and legible at small sizes.
- Use exact-size social exports as starter templates, not as final launch approval.

## Do

- Generate `DESIGN.md` in every installed/exported kit.
- Run Auto Design Scout before logo generation and export so directions are informed by project-appropriate design patterns.
- Export CSS variables, JSON tokens, and a Tailwind v4 helper where possible.
- Keep direct install local, previewed, and reversible.
- Call out when a generated brand is still a draft.

## Do Not

- Do not imply generated logos are trademark-cleared or final launch assets.
- Do not hide manual approval gates when identity decisions matter.
- Do not scan public websites or use paid providers without explicit owner approval.
- Do not invent proof, traction, or claims inside generated brand docs.
