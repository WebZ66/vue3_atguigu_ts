import SvgIcon from './SvgIcon/index.vue'
import type { App, VNode, ComponentPublicInstance } from 'vue'

interface GlobalComponentType {
  SvgIcon: string
}
const globalComponent: any = { SvgIcon }
export default {
  //自定义插件，可以是对象也可以是函数形式，但都必须实现install方法
  install(app: App) {
    //注册全局组件
    Object.keys(globalComponent).forEach((key) => {
      app.component(key, globalComponent[key])
    })
  }
}
