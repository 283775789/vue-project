// 注册通用的全局组件
import Vue from 'vue'
import PoppaneBase from '@/examples/demo/poppane-base'

const components = [
  PoppaneBase
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
