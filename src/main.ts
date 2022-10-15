import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import utils from './utils';
import './assets/main.css';

const app = createApp(App);
app.config.globalProperties['$utils'] = utils;
app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount('#app');
