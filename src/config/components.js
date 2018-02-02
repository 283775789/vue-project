// 注册通用的全局组件
import Vue from 'vue'
import Footer from '@tw/vue/footer/footer'
import Menu from '@tw/vue/menu/menu'
import Popmenu from '@tw/vue/popmenu/popmenu'

const components = [
  Footer,
  Menu,
  Popmenu
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
