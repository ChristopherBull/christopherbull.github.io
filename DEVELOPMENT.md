# Development

This document provides guidance for developing and maintaining this site. These practices ensure consistency and serve as reference material.

## Toolchain Management

This project uses [Mise](https://mise.jdx.dev/) to manage versions of Node.js and Ruby consistently.

- **Ruby** is used for building and serving the Jekyll website.
- **Node.js** is used exclusively for development environment tooling (e.g., linting, spellchecking, and git hooks).

### Setup Options

Mise manages the required versions of Node.js and Ruby, specified in [`.mise.toml`](./.mise.toml). Regardless of your setup method (Dev Containers or local), Mise ensures the correct tool versions are installed and dependencies are properly configured.

#### Dev Containers (Recommended)

The project includes a Dev Container configuration that automatically sets up the complete environment. This is the simplest approach:

1. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in VS Code.
2. Open the repository and select "Reopen in Container" when prompted.
3. The environment will be configured automatically on container creation.

#### Mise (Local Installation)

If you prefer to work locally without containers, install [Mise](https://mise.jdx.dev/). When you enter the project directory, Mise will automatically install the correct versions of Node.js and Ruby, and execute the postinstall hooks to install npm and Ruby gem dependencies.

You can manually trigger the installation by running:

```bash
mise install
```

### Maintaining Dependencies

After initial setup, use the following commands for installing/upgrading tools and dependencies.

> [!NOTE]
> Tools and dependencies are automatically installed if using devcontainers, but they can be manually updated/installed if needed.

Install/upgrade configured tool versions:

```bash
mise install
mise upgrade
```

Install project dependencies from lockfiles:

```bash
mise run install-deps
```

To update only specific dependencies:

- **npm**: `npm update`
- **Ruby gems**: `bundle update --all`
- **Bundler**: `bundle update --bundler`

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
