# Contributing to Brand Kit Studio

Thanks for helping improve Brand Kit Studio.

## What To Optimize For

- Keep the app local-first by default.
- Prefer small, reversible changes over broad rewrites.
- Explain user-facing impact clearly in pull requests.
- Update `README.md` or `docs/PROJECT.md` when behavior, setup, or workflow meaning changes.

## Local Setup

```bash
npm run dev
```

Open `http://127.0.0.1:5233/`.

## Checks

```bash
npm run check
```

Run checks before opening a pull request.

## Finding Work

- Read [ROADMAP.md](ROADMAP.md) for current maintainer priorities.
- Look for issues whose titles start with `starter:` if you want a smaller first contribution.
- Look for issues whose titles start with `help wanted:` if you want a broader task that still has a clear maintainer direction.
- If you want to propose a new workflow or provider step, open an issue before building something large.

## Safety Expectations

- Do not commit `.env.local`, generated profile data, or private workspace artifacts.
- Do not add live provider writes, paid provider requirements, or public-website capture flows without documenting the safety boundary first.
- Keep install behavior limited to explicitly approved local folders.

## Pull Request Notes

Please include:

- what changed
- why it matters
- what you verified
- any remaining local-only or approval-gated boundaries
