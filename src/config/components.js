// 注册通用的全局组件
import Vue from 'vue'
import Footer from '@tv/footer/footer'
import Menu from '@tv/menu/menu'
import Poppane from '@tv/poppane/poppane'

const components = [
  Footer,
  Menu,
  Poppane
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
