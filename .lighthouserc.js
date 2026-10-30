module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4000/'],
      // Serve the already-built `_site` with a compressing static server. GitHub
      // Pages gzip/brotli-compresses text assets, but `jekyll serve` does not, which
      // skews the audits (document latency, render-blocking, LCP, TTI).
      // Requires `jekyll build` to have run first (the workflow does this).
      startServerCommand:
        'npx serve --no-clipboard --no-port-switching --listen 4000 _site',
      startServerReadyPattern: 'Accepting connections',
      settings: {
        // Skip Progressive Web App audit in final report
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        // Skip audits in the Lighthouse report
        // Cannot check these tests on local Http server through Lighthouse CI
        skipAudits: ['canonical', 'uses-http2', 'uses-long-cache-ttl'],
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // Default recommended is 0.9, but the theme has unavoidable limitations
        'categories:performance': ['warn', { minScore: 0.8 }],
        // Remove assertions from CI/CLI output (in addition to main report)
        // Cannot check these tests on local Http server through Lighthouse CI
        canonical: 'off',
        'uses-http2': 'off',
        'uses-long-cache-ttl': 'off',
        // Newer insight equivalent of `uses-long-cache-ttl`: the local server does not send GitHub Pages' cache headers. (The theme also loads Font Awesome from jsDelivr `@latest`, which only gets a 7-day TTL.)
        'cache-insight': 'off',
        // Cannot fix due to theme limitations on GitHub Pages
        'non-composited-animations': 'off',
        'unminified-css': 'off',
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
        'uses-text-compression': 'off',
        // Skipping for now - Strict CSP  (using the hashes technique due to this being a static site). Also may break site if theme updates script tags.
        // https://web.dev/strict-csp/ : "hashes for sourced scripts are not well-supported across browsers" (yet)
        'csp-xss': 'off',
        // Disable/Warn for rules limited by current Jekyll Theme.
        // back/forward cache tests report "Not Actionable" -- limited by Jekyll Theme, so disabling.
        // https://developer.chrome.com/docs/lighthouse/performance/bf-cache/
        'bf-cache': 'off',
        'document-latency-insight': ['warn', { minScore: 0.9 }],
        'font-display-insight': ['warn', { minScore: 0.9 }],
        'image-delivery-insight': ['warn', { minScore: 0.9 }],
        'network-dependency-tree-insight': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
