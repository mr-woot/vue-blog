import Vue from 'vue';
import Notifications from 'vue-notification';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';
import 'vue-awesome/icons/spinner';
import 'vue-awesome/icons/user-circle';
import Icon from 'vue-awesome/components/Icon';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.component('icon', Icon)
Vue.use(VueLoaders);
Vue.use(BootstrapVue)
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
