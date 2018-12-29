import Service from '../../utils/service';
import conf from '../../config/common';
const host = conf.host;

export default {
  getDashboardData() {
    return Service({
      url: host + 'sales/dashboard'
    });
  }
}
