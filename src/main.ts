import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/style/reset.css';
import ElementPlus from 'element-plus';
import { ArrowRight } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';



const app = createApp(App);

app.component(
    'ArrowRight',
    {
        ArrowRight 
    }
)
app.use(ElementPlus);

app.use(router).mount('#Toyue-App');