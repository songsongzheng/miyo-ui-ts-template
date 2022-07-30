import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router/index';
// import store from './store/index';
import store, { key } from './store/index';

import 'element-plus/dist/index.css';

createApp(App).use(router).use(store, key).use(ElementPlus).mount('#app');
