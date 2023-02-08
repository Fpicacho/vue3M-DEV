import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import VueI18n from "./language/index.js";

import "amfe-flexible";
import "vant/lib/index.css";
import "@/assets/css/main.less";

const app = createApp(App);

app.use(createPinia().use(piniaPluginPersistedstate));
app.use(router);
app.use(VueI18n);

app.mount("#app");
