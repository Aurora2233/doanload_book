import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import utils from './utils';

const app = createApp(App);
app.config.globalProperties['$utils'] = utils;
app.use(createPinia());
app.use(router);

app.mount('#app');
