// 注册通用的全局组件
import Vue from 'vue'
import PoppaneBase from '@/examples/demo/poppane-base'
import ButtonBase from '@/examples/demo/button-base'

const components = [
  PoppaneBase,
  ButtonBase
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
