let fs = require('fs');
let path = require('path');

findSync(path.resolve(__dirname, '../src/pages/'));
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(filePath) {
  let result = [];

  function finder(p) {
    let files = fs.readdirSync(p);
    let menus =  [];
    files.forEach((name) => {
      console.log("==>>" + name);
      let menuItem = {
        link: '"/'+ name + '"',
        title: '信息总览',
        name: 'dashboard'
      }
    });

  }
  finder(filePath);
  return result;
}
