import Service from '../../utils/service';
import conf from '../../config/common';
const host = conf.host;

export default {
  getMainData(params) {
    return Service({
      url: host + 'mentee/addschool',
      data: params
    });
  },
  addSchool(params) {
    return Service({
      method: 'post',
      url: host + 'mentee/addschool',
      data: params
    });
  },
  removeSchool(params) {
    return Service({
      method: 'post',
      url: host + 'mentee/deleteschool',
      data: params
    });
  },
}
