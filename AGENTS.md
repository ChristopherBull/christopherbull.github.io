# AGENTS.md — christopherbull.github.io

Personal website built with Jekyll (Minimal Mistakes remote theme), hosted on GitHub Pages.

## Quick start

```bash
mise install                    # install Node 24 + Ruby 3.3.9
mise run install-deps           # npm ci + bundle install
mise run serve                  # local server → http://localhost:4000/ (binds 0.0.0.0 for devcontainer)
```

Dev Container (`.devcontainer/devcontainer.json`) is the recommended environment.

## Code quality

| Command | Tool | Notes |
|---|---|---|
| `npm run lint` | markdownlint-cli2 | MD013 (line length) disabled in `.markdownlint-cli2.jsonc` |
| `npm run spell` | cspell | Custom dictionaries in `.cspell.json` |
| `npx commitlint --edit` | commitlint | Enforces Conventional Commits via Husky commit-msg hook |

Run `lint` then `spell` before committing.

## Architecture notes

- **Node.js is tooling-only.** Do not use Node to build/serve the site — that's Jekyll's job.
- **`_config.yml` excludes** `docs/`, `DEVELOPMENT.md`, `.trunk`, `.qlty` from Jekyll processing.
- **Navigation** defined in `_data/navigation.yml`.
- **SEO** uses Schema.org microdata in HTML templates (not JSON-LD). See `docs/seo-microdata.md`.
- **Lighthouse CI** runs in CI only, configured via `.lighthouserc.js`.
- **Content pages** live under `research/`, `teaching/`, `profile/`, `about/`, `software/`.
