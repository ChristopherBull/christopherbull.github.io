# Development

This document provides guidance for developing and maintaining this site. These practices ensure consistency and serve as reference material.

## Toolchain Management

This project uses [Mise](https://mise.jdx.dev/) to manage versions of Node.js and Ruby consistently.

- **Ruby** is used for building and serving the Jekyll website.
- **Node.js** is used exclusively for development environment tooling (e.g., linting, spellchecking, and git hooks).

After cloning the repository or changing branches, ensure you have the correct toolchain versions and project dependencies installed by running:
`mise run setup`

This single command will:

1. Download and install the correct versions of Node.js and Ruby (if missing).
2. Install npm dependencies (`npm ci`).
3. Install Ruby gems (`bundle install`).

> [!NOTE]
> **Manual Bundler Configuration**:
> If you are configuring your environment manually without Mise, it is recommended to [configure Bundler's install path](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/#configure-bundler-install-path) to use the project's subdirectory:
> `bundle config set --local path 'vendor/bundle'`

### Maintaining Dependencies

While `mise run setup` handles the initial installation, you may occasionally need to update dependencies manually.

<!-- markdownlint-disable MD028 -->

> [!TIP]
> **Update Bundler**:
> Run `bundle update --bundler` to update the pinned version of Bundler in `Gemfile.lock`.

> [!TIP]
> **Update Ruby Gems**:
> Run `bundle update --all` to update all gems to their latest compatible versions.

## Code Quality & Formatting

This project uses automated tools to maintain code quality and ensure consistency across the site.

### Git Hooks (Husky)

Husky is configured to enforce the [Conventional Commits](https://www.conventionalcommits.org/) standard using `commitlint`. This ensures a consistent and readable commit history. Note that Husky does not automatically run linting or spell checking.

### Markdown Linting

Markdown files are linted using `markdownlint-cli2` to ensure consistent formatting. The configuration rules are defined in `.markdownlint-cli2.jsonc`.

- Run linting manually: `npm run lint`

### Spell Checking

Spelling is checked across Markdown files using `cspell`.

- Run spell check manually: `npm run spell`

If you are adding new names, projects, acronyms, or specific technical terms, you may need to add them to the custom dictionaries in `.cspell.json` so they are not flagged as errors during commits.

## Accessibility (a11y) Best Practices

Ensuring the website is accessible to everyone is a priority. Please adhere to basic Web Content Accessibility Guidelines (WCAG) when creating or updating Markdown content:

- **Alternative Text**: Always provide descriptive `alt` text for images. This supports screen reader users and displays when images fail to load.
- **Semantic Structure**: Use proper heading hierarchy (e.g., `#` for H1, `##` for H2, `###` for H3). Do not skip heading levels, as this breaks the logical document outline for assistive technologies.
- **Descriptive Links**: Avoid generic link text such as "click here" or "read more". Ensure link text clearly describes the destination or action.
- **Visual Contrast**: Ensure sufficient color contrast between text and background elements.

## SEO & Structured Data

This site uses **Schema.org microdata** to provide semantic markup that helps search engines understand and index content more effectively.

See [SEO & Microdata Guidelines](docs/seo-microdata.md) for detailed documentation on:

- Techniques and formats
- Current implementations
- Guidelines for adding new schemas
- Examples and best practices
