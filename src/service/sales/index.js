import Service from '../../utils/service';
import conf from '../../config/common';
const host = conf.host;

export default {
  getDashboardData() {
    return Service({
      method: 'get',
      url: host + 'sales/dashboard'
    })
  },
  getAddcustomerData() {
    return Service({
      method: 'get',
      url: host + 'sales/addcustomer'
    })
  },
  addcustomer(params) {
    return Service({
      method: 'post',
      url: host + 'sales/addcustomer',
      data: params
    })
  },
  getViewcustomerData() {
    return Service({
      method: 'get',
      url: host + 'sales/viewcustomer'
    })
  },
  getEditcustomerData() {
    return Service({
      method: 'get',
      url: host + 'sales/editcustomer/'
    })
  },

}
