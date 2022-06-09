import { defineAsyncComponent } from "vue";

// async component will force this to be it's own bundle when bundling with Vite 
export const CodePlayground = defineAsyncComponent({
  loader: async () => import("./components/CodePlayground.vue") /** webpackChunkName: "PCircularProgress" */
});
// but the default export should be the plugin
export { playground as default } from "./plugin";