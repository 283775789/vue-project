// 注册通用的全局组件
import Vue from 'vue'
import PoppaneBase from '@/examples/demo/poppane-base'
import ButtonBase from '@/examples/demo/button-base'
import DesignGuid from '@/examples/docs/design'
import DevFlow from '@/examples/docs/dev-flow'

const components = [
  PoppaneBase,
  ButtonBase,
  DesignGuid,
  DevFlow
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
