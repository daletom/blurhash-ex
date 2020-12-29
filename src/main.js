import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueBlurHash from "vue-blurhash";
import AsyncComputed from 'vue-async-computed'
import 'vue-blurhash/dist/vue-blurhash.css'

Vue.config.productionTip = false;
Vue.use(VueBlurHash);
Vue.use(AsyncComputed);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
