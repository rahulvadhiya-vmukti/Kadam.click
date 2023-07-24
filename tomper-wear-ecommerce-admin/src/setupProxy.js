const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:5000/', // Replace with the correct URL of your backend server
      changeOrigin: true,
    })
  );
};
