<template>
  <div class="tw-collapse">
    <slot>collapse self.</slot>
  </div>
</template>

<script>
import { delegate, delegateOff } from '@utils/event'
import { addClass, removeClass, toggleSpecialTransitionClass } from '@utils/dom'

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
      switchEl: null
    }
  },
  methods: {
    openCollapse () {
      const vm = this
      toggleSpecialTransitionClass(this.$el, 'xopen', {
        type: 'add',
        transitionClass: 'xtoggling',
        heightAuto: true,
        endCallback () {
          vm.$emit('shown')
        }
      })
      addClass(this.switchEl, 'xopen')
    },
    closeCollapse () {
      const vm = this
      toggleSpecialTransitionClass(this.$el, 'xopen', {
        type: 'remove',
        transitionClass: 'xtoggling',
        heightAuto: true,
        endCallback () {
          vm.$emit('hidden')
        }
      })
      removeClass(this.switchEl, 'xopen')
    },
    toggleCollapse (switchEl) {
      this.switchEl = switchEl

      if (/\bxopen\b/.test(this.$el.getAttribute('class'))) {
        this.$emit('hide')
        this.closeCollapse()
      } else {
        this.$emit('show')
        this.openCollapse()
      }
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

<style lang="scss">
  @import "collapse.scss";
</style>
