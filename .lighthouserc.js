module.exports = {
  ci: {
    collect: {
      staticDistDir: './_site',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Cannot check http2 on local Http server through Lighthouse CI
        'uses-http2': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
