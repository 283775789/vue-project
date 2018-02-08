<template>
  <div class="tw-collapse">
    <slot>collapse self.</slot>
  </div>
</template>

<script>
import { delegate, delegateOff } from '@tw/utils/event'
import { toggleTransitionClass } from '@tw/utils/dom'

export default {
  name: 'twCollapse',
  props: {
    switch: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleCollapse () {
      toggleTransitionClass(this.$el, 'xopen', 'xtoggling', 'height')
    }
  },
  created () {
    // 委托document代理切换开关(switch)的click事件
    delegate(document, 'click.' + this._uid, this.switch, this.toggleCollapse)
  },
  beforeDestroy () {
    // 注销document代理切换开关(switch)的click事件
    delegateOff(document, 'click.' + this._uid)
  }
}
</script>
