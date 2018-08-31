/**
 * 行为: 注册所有vue指令
 */

import Vue from 'vue'
import Anchor from '@directives/anchor/anchor'

const directives = [
  Anchor
]

directives.forEach(function (directive) {
  Vue.directive(directive.name, directive.hooks)
})
