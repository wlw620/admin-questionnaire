import Service from '../../utils/service';
import conf from '../../config/common';
const host = conf.host;

export default {
  getLoginState(params) {
    return Service({
      url: host,
      data: params
    });
  },
  login(params) {
    return Service({
      method: 'post',
      url: host + 'login',
      data: params
    });
  },
  getWechatloginUrl() {
    return Service({
      method: 'get',
      url: host + 'wechatlogin'
    });
  },
  logout(){
    return Service({
      method: 'post',
      url: host + 'logout'
    });
  }
}
