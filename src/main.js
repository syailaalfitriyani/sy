import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://rwbcdxajhdayccybeoav.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NDIwODg3MywiZXhwIjoxOTU5Nzg0ODczfQ.36zy5xhq3HXagWI-IxyYBCw_a0HjL9EHzLKR04sf6e4",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
