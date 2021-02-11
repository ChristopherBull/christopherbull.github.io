module.exports = {
  ci: {
    collect: {
      // Specify URLs to avoid LHCI reporting an error only seen in CI/localhost
      // ('canonical==off' does not appear to prevent the error):
      // "Document does not have a valid `rel=canonical` Relative URL (/)"
      url: ['http://localhost/'],
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
