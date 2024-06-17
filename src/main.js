import './assets/css/setFont.style.css';
import './assets/css/resets.Plus.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './utils/router';
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

app.use(router);

app.mount('#app');
