// Source - https://stackoverflow.com/a
// Posted by josipat, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-23, License - CC BY-SA 4.0

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
