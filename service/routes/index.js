const router = require('koa-router')();
const homeController = require('./home');

homeController(router); // 首页路由

module.exports = (() => {
  return router.routes();
})();
