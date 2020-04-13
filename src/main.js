import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//importamos el componente tab 
import {Tabs, Tab} from 'vue-tabs-component';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
