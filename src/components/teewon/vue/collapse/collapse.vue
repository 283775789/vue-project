<template>
  <div class="tw-collapse">
    <slot>collapse self.</slot>
  </div>
</template>

<script>
  import { delegate, delegateOff } from '@tw/utils/event'
  import { toggleSpecialTransitionClass } from '@tw/utils/dom'

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
        toggleSpecialTransitionClass(this.$el, 'xopen', 'xtoggling', ['height'], (toggle) => {
          toggle === 'add' ? this.$emit('show') : this.$emit('hide')
        })
      }
    },
    created () {
      delegate(document, 'click.' + this._uid, this.switch, this.toggleCollapse)
    },
    beforeDestroy () {
      delegateOff(document, 'click.' + this._uid)
    }
  }
</script>
