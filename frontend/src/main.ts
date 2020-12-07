import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 


const base = axios.create({
  baseURL: "http://localhost:4000"
});
Vue.use(VueSweetalert2);
Vue.prototype.$http = base;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");