module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4000/'],
      startServerCommand: 'bundle exec jekyll serve',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
