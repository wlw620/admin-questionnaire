import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en')
  }
})
