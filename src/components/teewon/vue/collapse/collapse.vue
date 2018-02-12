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
        const vm = this
        toggleSpecialTransitionClass(vm.$el, 'xopen', {
          transitionClass: 'xtoggling',
          heightAuto: true,
          endCallback (toggle) {
            toggle === 'add' ? vm.$emit('show') : vm.$emit('hide')
          }
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
