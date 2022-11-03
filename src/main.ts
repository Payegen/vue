import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import InfoList from './components/InfoList.vue'
import Store from './store/index'
import Router  from './router/index'

const app = createApp(App)

app.use(ElementPlus)
app.use(Store)
app.use(Router)
app.component("InfoList",InfoList)

app.mount('#app')
