import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import InfoList from './components/InfoList.vue'

const app = createApp(App)
app.use(ElementPlus)

app.component("InfoList",InfoList)

app.mount('#app')
