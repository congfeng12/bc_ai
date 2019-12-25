// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入axios
import axios from 'axios';
//引入QS
import qs from 'qs';
//导入全局属性组建
import global from './GlobalAttributes.vue';

Vue.config.productionTip = false
Vue.use(ElementUI);
//注册axios
Vue.prototype.$Axios = axios;
//注册qs
Vue.prototype.$qs = qs;
//注册全局属性组件
Vue.prototype.$Global = global;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
