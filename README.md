# Christopher Bull's Personal Website

![Tests](https://github.com/ChristopherBull/christopherbull.github.io/workflows/Tests/badge.svg) ![Lighthouse](https://github.com/ChristopherBull/christopherbull.github.io/workflows/Lighthouse/badge.svg)

This is my professional and personal profile website, built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

You can visit the live site at: [https://christopherbull.github.io/](https://christopherbull.github.io/)

## Local Development

### Setup

Install [Mise](https://mise.jdx.dev/) and run the setup command to automatically configure the environment and install all dependencies:

```bash
mise run setup
```

> [!NOTE]
> This command handles the installation of correct Ruby and Node.js versions, npm dependencies, and Ruby gems (configured to install in `vendor/bundle`). On Debian-based systems, it will also prompt to install `build-essential` if needed.

### Running

Once configured, you can build and serve the website locally:

```bash
bundle exec jekyll serve
```

The server address will be output in the terminal, typically at `http://127.0.0.1:4000/`.

---

For more detailed information on toolchain management, code quality, and accessibility standards, please refer to [DEVELOPMENT.md](DEVELOPMENT.md).
