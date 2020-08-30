import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles';
import {routes} from './routes';

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueRouter);
const  router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
