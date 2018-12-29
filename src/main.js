import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import i18n from './i18n';
import store from './store';
import _ from 'lodash';

Vue.config.productionTip = false;

Vue.prototype._ = _;

Vue.use(iView);

Vue.use(VueLocalStorage)

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
});
