module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4000/'],
      startServerCommand: 'bundle exec jekyll serve',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
