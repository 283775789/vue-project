// 注册通用的全局组件
import Vue from 'vue'
import Footer from '@tw/vue/footer/footer'
import Menu from '@tw/vue/menu/menu'
import Poppane from '@tw/vue/poppane/poppane'
import Collapse from '@tw/vue/collapse/collapse'

const components = [
  Footer,
  Menu,
  Poppane,
  Collapse
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
