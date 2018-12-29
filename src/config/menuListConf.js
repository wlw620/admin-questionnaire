  import Cookies from 'js-cookie';

  // 其他
  import {
    otherList,
    otherRole
  } from './other';


  /**
   * 角色所对应的展示menu配置
   */
  let roleMap = Object.assign({},
    otherRole
  );

  roleMap['*'] = [];
  Object.keys(roleMap).forEach((key) => {
    if (roleMap[key]) {
      roleMap['*'] = roleMap['*'].concat(roleMap[key]);
    }
  });

  /**
   * 所有menu配置
   */
  let menuList = []
  menuList = menuList.concat(
    otherList
  );

  let roleType = "";
  let filterFn = (item) => {
    if (roleMap[roleType]) {
      return roleMap[roleType].indexOf(item.name) > -1;
    }
  }

  export default (type) => {
    roleType = type;
    console.log("CUSTOMER TYPE:::" + type);
    return menuList.filter(filterFn);
  };
