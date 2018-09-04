/**
 * 行为: 注册所有vue指令
 */

import Vue from 'vue'
import Lift from '@directives/lift/lift'
import Fix from '@directives/fix/fix'

const directives = [
  Lift,
  Fix
]

directives.forEach(function (directive) {
  Vue.directive(directive.name, directive.hooks)
})
