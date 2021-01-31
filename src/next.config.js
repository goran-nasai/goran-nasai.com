const path = require('path');

module.exports = {
  trailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/web': { page: '/web' }
    };

    return paths;
  }
};