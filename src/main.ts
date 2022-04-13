import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/assets/base.css";

import App from "./App.vue";
import router from "./router";

import {
  BIconPlus,
  BIconDash,
  BIconHouse,
  BIconCart,
} from "bootstrap-icons-vue";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

app.component("BIconPlus", BIconPlus);
app.component("BIconDash", BIconDash);
app.component("BIconHouse", BIconHouse);
app.component("BIconCart", BIconCart);

app.mount("#app");
