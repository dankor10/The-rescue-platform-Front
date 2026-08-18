import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import Vuetify from "./plugins/vuetify";




createApp(App).use(router).mount('#app');



loadFonts()

createApp(App)
  .use(Vuetify)
  .use(router)
  .mount('#app')
