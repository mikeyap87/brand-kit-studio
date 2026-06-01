# Brand Kit Studio Automation Flow

## Best Flow

1. Open Brand Kit Studio.
2. Use Portfolio Brand Brain to pick a recommended project, then click `Start brand kit`.
3. Brand Kit Studio reads the project docs, existing brand files, missing assets, and local preview hints, then creates and imports the Brand Intake Packet automatically.
4. If the packet includes a running local preview URL, Brand Kit Studio captures the project frame automatically.
5. The Full Automation AI Brain generates three larger, comparable redesign choices so the owner can select a direction without manually assembling the preview.
6. Brand Kit Studio automatically runs Design Scout logic from the project context and shows the reference lane, reference query, and design principles.
7. Compare the generated brand directions on the actual app/site frame.
8. Generate logo board images with `gpt-image-2`, choose the strongest direction, then generate a four-logo-variant image if needed.
9. Approve a board logo, approve a logo variant, or explicitly skip logo approval for now.
10. Generate the final approved logo asset.
11. Use the Full Test Readiness panel to see any missing steps before install.
12. Preview the install. Brand Kit Studio auto-detects the target folder from the packet/local preview when possible.
13. Install the approved kit, or export the zip if you want a portable package.

This keeps automation high while preserving an approval gate before the project identity is locked.

## Portfolio Brand Brain

Brand Kit Studio automatically scans the configured workspace root through `/api/portfolio-brand-opportunities`. By default that root is `~/Documents/Codex/Workspace` on macOS, and it can be overridden with `WORKSPACE_ROOT` in `.env.local`. The scan ranks projects by missing brand guides, `DESIGN.md`, logo/favicon assets, brand tokens, public-facing need, and strategic project priority. The goal is to recommend where the owner should run Brand Kit Studio next instead of making the owner manually inspect every project.

The Portfolio Brand Brain can now create a project intake packet directly through `/api/project-brand-intake?projectPath=...`. That endpoint reads the target project's README, `docs/PROJECT.md`, `AGENTS.md`, existing `DESIGN.md`, and existing brand guide if present. It returns a full Brand Kit Studio JSON packet with category-aware directions, missing-asset risks, project path, and local preview URL when the Workspace registry exposes one.

For ProfitPilot-style projects, the Full Automation AI Brain uses a proof-first trading command-center archetype. That keeps paper proof, live blockers, emergency-stop posture, risk caps, and no-guaranteed-profit language central instead of generating generic consumer AI or crypto-hype branding.

## Project Chat Prompt

```text
Create a Brand Kit Studio intake packet for this project.

Read the project docs, app copy, existing UI, README, docs/PROJECT.md, AGENTS.md, screenshots/assets if present, and summarize everything Brand Kit Studio needs.

Return valid JSON only, with this shape:
{
  "projectName": "",
  "brandName": "",
  "sourceUrl": "",
  "productDescription": "",
  "audience": "",
  "problem": "",
  "desiredFeeling": "",
  "existingBrandClues": [],
  "whatShouldNotChange": [],
  "competitorsOrReferences": [],
  "voiceTone": [],
  "visualDirectionClues": [],
  "requiredAssets": [],
  "brandRisks": [],
  "recommendedDirections": [
    {
      "label": "",
      "headline": "",
      "copy": "",
      "promise": "",
      "traits": [],
      "colors": [["Color name", "#000000"]],
      "fonts": { "heading": "", "body": "" },
      "voice": []
    }
  ],
  "bestRecommendedDirection": "",
  "whyThisDirection": ""
}

Keep it honest. Do not invent proof, traction, partnerships, claims, or brand approvals that are not visible in the project. Give 3 distinct brand directions when the project identity is not already locked.
```

## Install Prompt

After choosing a direction, use the Direct Install controls or export the zip and use the generated handoff prompt in the target project chat. The install should be local and reversible first.

Codex should:

- Add the root `DESIGN.md` implementation guide.
- Add the `docs/brand/` files.
- Add `docs/brand/DESIGN_SCOUT.md` so future work can see the reference lane and design-principle logic.
- Add brand assets under `public/brand/` or the project equivalent.
- Add or merge brand tokens into the existing style system, using `src/styles/brand-tailwind-v4.css` when the project uses Tailwind v4.
- Update `AGENTS.md` and `docs/PROJECT.md` to point future work at `DESIGN.md`, the brand guide, and the tokens.
- Avoid overwriting existing brand assets without checking conflicts.

The Direct Install button is limited to folders inside the configured workspace root. It previews create/update/unchanged files before writing, and existing files are backed up under `.brand-kit-studio-backups/` before updates. If auto-detect fails, paste the target folder manually.

The Full Test Readiness panel is the safest path for a complete test. It should show packet import, project preview, target folder, logo board prompts, logo variants, logo approval, install preview, and final install status so the owner can see what is still blocking the test.

## Local Preview Capture

The capture button only accepts local preview URLs such as `http://127.0.0.1:5231/`, `http://localhost:3000/`, or `http://[::1]:5173/`. It does not capture public websites yet. That keeps the first automation loop focused on local Codex projects and avoids turning the tool into an unreviewed web scanner.

## Auto Design Scout

The Auto Design Scout infers a reference lane from the project packet, such as consumer AI, operator SaaS, marketplace trust, editorial luxury, learning product, or premium local service. It then records the reference query, pattern guidance, and implementation principles in the UI, `DESIGN.md`, logo prompts, and `docs/brand/DESIGN_SCOUT.md`.

The app now includes `/api/design-scout`, a provider bridge route for live reference enrichment. By default it uses the built-in scout. Set `DESIGN_SCOUT_PROVIDER=designmd-cli` and `DESIGNMD_API_KEY` in `.env.local` to search DESIGNmd automatically. When a LazyWeb/design-reference HTTP bridge exists, `DESIGN_SCOUT_HTTP_URL` and optional `DESIGN_SCOUT_HTTP_TOKEN` can enrich the same panel and generated docs. This keeps the owner workflow automatic: no manual pasted references are required.

## Approval Gate

Do not auto-install the first generated direction when the brand stakes are high. For projects such as Velvet Mesh / Romance Publishing Empire, compare at least three lanes first because the strategic choice changes the product's future:

- Publishing company / imprint
- Operator system / empire dashboard
- Brand house / umbrella company

Pick one or combine directions before exporting the final kit.

## Logo Approval Gate

Logo exploration is treated as a brand decision, not a decoration. Generate separate standardized board images per direction first, then generate four distinct logo variants for the selected direction. Later buttons stay locked while generation is running. Direct install is blocked until a variant is approved or the owner explicitly chooses to skip logo approval temporarily.

When an approved raster logo exists, preserve it as the visual source of truth. The installed project may still need a follow-up crop/vectorization pass for favicon, app chrome, and social avatars, but that pass must derive from the approved image without stretching, squashing, or substituting a generic starter SVG.

The app uses OpenAI image generation with `gpt-image-2` when `OPENAI_API_KEY` is configured in `.env.local`. It records the approval decision in `docs/brand/LOGO_APPROVAL.md`, exports the generated images, includes exact-size social SVG assets, and keeps manual PNG/JPG/WebP attachment as a fallback.
