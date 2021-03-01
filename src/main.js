import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//importo librería idiomas
import i18next from '@/locales/i18next'


createApp(App).use(i18next).use(store).use(router).mount('#app')
