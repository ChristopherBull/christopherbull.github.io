module.exports = {
  ci: {
    collect: {
      staticDistDir: './_site',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Cannot check these tests on local Http server through Lighthouse CI
        'uses-http2': 'off',
        'uses-long-cache-ttl': 'off',
        'canonical': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
