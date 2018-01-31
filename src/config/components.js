// 注册通用的全局组件
import Vue from 'vue'
import Footer from '@tv/footer/footer'
import Menu from '@tv/menu/menu'
import Dropdown from '@tv/dropdown/dropdown'

const components = [
  Footer,
  Menu,
  Dropdown
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
