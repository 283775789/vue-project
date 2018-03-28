// 注册通用的全局组件
import Vue from 'vue'
import Footer from '@tw/vue/footer/footer'
import Poppane from '@tw/vue/poppane/poppane'
import Collapse from '@tw/vue/collapse/collapse'
import CollapseGroup from '@tw/vue/collapse/collapse-group'
import List from '@tw/vue/list/list'
import Select from '@tw/vue/select/select'

const components = [
  Footer,
  Poppane,
  Collapse,
  CollapseGroup,
  List,
  Select
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
