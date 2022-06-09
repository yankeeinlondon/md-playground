import { createApp } from "vue";
import App from "../example/src/App.vue";
App.name = "Example";

export const app = createApp(App);
app.mount("#app");

