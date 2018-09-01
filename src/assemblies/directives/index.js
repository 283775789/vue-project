/**
 * 行为: 注册所有vue指令
 */

import Vue from 'vue'
import Lift from '@directives/lift/lift'

const directives = [
  Lift
]

directives.forEach(function (directive) {
  Vue.directive(directive.name, directive.hooks)
})
