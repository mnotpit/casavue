import { createApp } from "vue";
import initStore from "./data/storeInit";
import App from "./App.vue";

const pjstore = initStore;

createApp(App).use(pjstore).mount("#pjapp");
