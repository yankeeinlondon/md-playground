import { createApp } from "vue";
import App from "./App.vue";
App.name = "Example";

export const app = createApp(App);
app.mount("#app");

