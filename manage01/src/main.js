import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/element-variables.scss';
Vue.config.productionTip = false
Vue.use(ElementUI);

import axios from 'axios'
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
