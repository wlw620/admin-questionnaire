import Service from '../../utils/service';
import conf from '../../config/common';
const host = conf.host;

export default {
  getMainData(params) {
    return Service({
      url: host + 'mentee/essays',
      data: params
    });
  },
  getEssayhistory(params) {
    return Service({
      url: host + 'mentee/essayhistory',
      data: params
    });
  },
  addProject(params) {
    // type `类型：ps, supplement, transfer, summerschool, others`
    // topic `大类：ps的话就是Idea1, Idea2 ...; supplement, transfer和summerschool的话就是学校名字; others就自己填一个词`
    // title `标题`
    // description `描述`
    return Service({
      method: 'post',
      url: host + 'mentee/addproject',
      data: params
    });
  },

  removeProject(){
    // {pid: 文书id}
    return Service({
      method: 'post',
      url: host + 'mentee/removeproject',
      data: params
    });
  }
}
