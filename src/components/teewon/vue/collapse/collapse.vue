<template>
  <div v-show="visible" class="tw-collapse">
    <slot>collapse self.</slot>
  </div>
</template>

<script>
import {delegate, off} from '@tw/utils/event'

export default {
  name: 'twCollapse',
  props: {
    switch: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggleCollapse () {
      this.visible = !this.visible
    }
  },
  created () {
    const toggle = this.toggleCollapse.bind(this)
    delegate(document, 'click.' + this._uid, this.switch, this.toggleCollapse)
  },
  beforeDestroy () {
    off(document, 'click.' + this._uid)
  }
}
</script>
