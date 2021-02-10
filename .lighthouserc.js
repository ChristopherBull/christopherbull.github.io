module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4000/'],
      startServerCommand: 'bundle exec jekyll serve',
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
