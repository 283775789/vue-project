// 引入element-ui控件
import Vue from 'vue'
import {
  Select,
  Option,
  OptionGroup,
  Button,
  ColorPicker
} from 'element-ui'

Vue.prototype.$ELEMENT = {size: 'small'}

Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ColorPicker)
