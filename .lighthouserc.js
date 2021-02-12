module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4000/'],
      startServerCommand: 'bundle exec jekyll serve',
      settings: {
        // Skip Progressive Web App audit in final report
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
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
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
