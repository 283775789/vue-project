// 注册通用的全局组件
import Vue from 'vue'
import PoppaneBase from '@/examples/demo/poppane-base'
import ButtonBase from '@/examples/demo/button-base'
import DesignGuid from '@/examples/demo/design-guid'

const components = [
  PoppaneBase,
  ButtonBase,
  DesignGuid
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
