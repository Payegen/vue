import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import InfoList from './components/InfoList.vue'
import Store from './store/index'
const app = createApp(App)
app.use(ElementPlus)
app.use(Store)
app.component("InfoList",InfoList)

app.mount('#app')
