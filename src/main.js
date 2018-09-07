// -------------------- 引入库及应用配置 --------------------
import Vue from 'vue'
import config from '@/config'
import VueI18n from 'vue-i18n'
import lang from '@/i18n'
import '@/config/element-ui'
import '@directives'
import '@comps'
import '@/config/api'
import '@/config/demo-components.js'
import App from '@/App'
import router from '@/config/router'

// -------------------- 解决ios click bug --------------------
var attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

// -------------------- 国际化 --------------------
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: config.locale,
  messages: lang
})

window.i18n = i18n

// -------------------- 创建Vue应用根实例 --------------------
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
