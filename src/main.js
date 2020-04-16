import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//importamos el componente tab 
import {Tabs, Tab} from 'vue-tabs-component';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
//importamos vue-cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
