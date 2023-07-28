module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4000/'],
      startServerCommand: 'bundle exec jekyll serve',
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
        // Cannot fix due to theme limitations on GitHub Pages
        'non-composited-animations': 'off',
        'unminified-css': 'off',
        'unsized-images': 'off',
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
        'uses-text-compression': 'off',
        // Skipping for now - Strict CSP  (using the hashes technique due to this being a static site). Also may break site if theme updates script tags.
        // https://web.dev/strict-csp/ : "hashes for sourced scripts are not well-supported across browsers" (yet)
        'csp-xss': 'off',
        // back/forward cache tests report "Not Actionable" -- limited by Jekyll Theme, so disabling.
        // https://developer.chrome.com/docs/lighthouse/performance/bf-cache/
        'bf-cache': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
