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
