import Service from '../../utils/service';
import conf from '../../config/common';
const host = conf.host;

export default {
  getMainData(params) {
    return Service({
      url: host + 'mentee/activityList',
      data: params
    });
  },
  editActivity(params) { // 编辑/删除课外活动
    return Service({
      method: 'post',
      url: host + 'mentee/editActivity',
      data: params
    });
  }
}
