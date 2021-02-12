module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4000/'],
      startServerCommand: 'bundle exec jekyll serve',
      settings: {
        // Cannot check these tests on local Http server through Lighthouse CI
        skipAudits: ['canonical', 'uses-http2', 'uses-long-cache-ttl'],
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
