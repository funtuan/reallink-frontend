import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-TW'

import '@/assets/scss/element-variables.scss';

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.use(ElementUI)

import VConsole from 'vconsole'
var vConsole = new VConsole();
console.log(vConsole.version);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
