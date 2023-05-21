import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import globalComponent from '@/components/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/style/index.scss'
//svg的配置代码
import 'virtual:svg-icons-register'

//引入路由
import router from './router'

import store from '@/store/index'

const app = createApp(App)

app.use(globalComponent)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
