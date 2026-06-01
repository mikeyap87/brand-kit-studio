# Brand Kit Studio Asset Manifest

| Asset | File/Path | Status | Use | Notes |
| --- | --- | --- | --- | --- |
| Design concept | docs/design/brand-kit-studio-concept.png | created | Implementation reference | Generated with built-in image generation |
| DESIGN.md export | DESIGN.md | generated on export/install | AI implementation guide | Compact source for coding agents and future design passes |
| Brand guide | docs/brand/BRAND_GUIDE.md | created | Source of truth | Draft foundation |
| Visual system | docs/brand/VISUAL_SYSTEM.md | created | UI guidance | Draft foundation |
| Design scout guide | docs/brand/DESIGN_SCOUT.md | generated on export/install | Reference logic | Auto-selected reference lane and implementation principles |
| Voice guide | docs/brand/VOICE_AND_MESSAGING.md | created | Copy guidance | Draft foundation |
| App tokens | src/styles.css | created | UI implementation | CSS custom properties at root |
| Tailwind v4 theme helper | src/styles/brand-tailwind-v4.css | generated on export/install | Tailwind implementation | Mirrors exported brand tokens for Tailwind v4 projects |
| Automation guide | docs/AUTOMATION.md | created | Repeatable workflow | Includes project-chat packet prompt |
| Visual Decision Mode | Preview UI | created | Brand selection | App, Website, and Logo kit applied previews |
| Real-frame option cards | Preview UI | created | Brand selection | Shows all three directions on the same captured project frame |
| Logo approval workflow | Preview UI and docs/brand/LOGO_APPROVAL.md | created | Logo approval | Separate board prompts, four-variant prompt, revision notes, approval gate |
| Direct install | POST /api/install-preview and POST /api/install-brand-kit | created locally | Project install | Workspace-only target validation with backups before updates |
| Target screenshot frame | Imported image object URL | created locally | Real project preview | Not persisted in export; file metadata is recorded |
| Local URL capture | POST /api/capture-local-url | created locally | Real project preview | Only accepts localhost, 127.0.0.1, or ::1 targets |
| Exported logo assets | Generated in zip | created on export | Export package | Browser-generated SVG |
| Exported social assets | Generated in zip | created on export | Export package | Browser-generated SVG |
| Exported intake packet | Generated in zip | created on export | Automation package | Includes markdown and JSON packet files |
