// 注册通用的全局组件
import Vue from 'vue'
import Footer from '@tw/vue/footer/footer'
import Menu from '@tw/vue/menu/menu'
import MenuItem from '@tw/vue/menu/menu-item'
import Poppane from '@tw/vue/poppane/poppane'
import Collapse from '@tw/vue/collapse/collapse'
import CollapseGroup from '@tw/vue/collapse/collapse-group'

const components = [
  Footer,
  Menu,
  MenuItem,
  Poppane,
  Collapse,
  CollapseGroup
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
