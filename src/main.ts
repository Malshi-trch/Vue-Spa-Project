import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Fixed: Imported without curly braces to match 'export default router'
import "./style.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
