# Christopher Bull's Personal Website

![Tests](https://github.com/ChristopherBull/christopherbull.github.io/workflows/Tests/badge.svg) ![Lighthouse](https://github.com/ChristopherBull/christopherbull.github.io/workflows/Lighthouse/badge.svg)

This website serves as a professional (and personal) profile:\
[https://christopherbull.github.io/](https://christopherbull.github.io/)

## GitHub Pages (Jekyll)

This site uses Jekyll, provided by [GitHub pages](https://pages.github.com/). A minimal website requires a `_config.yml` and `index.md` file. Pre-existing Jekyll themes can be used - [choose a theme](https://pages.github.com/themes/) and follow their instructions on how to customise the `_config.yml` file correctly.

Jekyll automatically converts valid Markdown files into HTML pages 🚀

### Testing locally

1\) Prerequisites: Install [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/).

1a\) It is optional, though recommended, to [configure Bundler's install path](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/#configure-bundler-install-path) to use the project's subdirectory: `bundle config set --local path 'vendor/bundle'`

2\) Now install the dependencies: `bundle install` (or `bundle update` to update an existing `Gemfile.lock` file)

Note: A `Gemfile` is already included in this repository, but a minimal working example only needs to [include these lines](https://github.com/github/pages-gem):

```Gemfile
source 'https://rubygems.org'
gem "github-pages", group: :jekyll_plugins
```

3\) The environment is now ready. Now build and serve (run) the website:

* `bundle exec jekyll build`
* `bundle exec jekyll serve`

The server address will likely be mounted at `http://127.0.0.1:4000/`, but the terminal will output the correct address during the 'serve' command.
