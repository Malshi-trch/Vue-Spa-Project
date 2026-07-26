import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router'; // Make sure the path matches where your router file lives
import './style.css';

const app = createApp(App);

// Crucial step: Register the router plugin
app.use(router);

app.mount('#app');