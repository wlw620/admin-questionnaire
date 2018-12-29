const fs = require('fs');
const path = require('path');

module.exports = (router) => {
  router.get('/index', async (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(path.resolve('./dist', 'index.html'));
  });
};
