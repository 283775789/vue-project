// 引入样式
import '@css/main.scss'

// 引入库及应用配置
import Vue from 'vue'
import axios from 'axios'
import App from '@/app'
import router from '@/config/router'
import '@/config/components'
import '@/examples/demo/demo-components.js'

import { Button, ColorPicker } from 'element-ui'

Vue.use(Button)
Vue.use(ColorPicker)

Vue.prototype.axios = axios
window.Vue = Vue

// 解决ios click bug
var attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

// 创建Vue应用根实例
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
