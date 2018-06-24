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
    defaultOpen: {
      type: Boolean,
      default: false
    },
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
          if (vm.$parent.$options.name === 'twCollapseGroup') {
            vm.$parent.activeCollapse = vm
          }
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

      // 折叠组禁用切换自身功能
      const activeIsMe = this.$parent.$options.name === 'twCollapseGroup' && this === this.$parent.activeCollapse
      if (activeIsMe && this.$parent.disableToggleSelf) return

      if (/\bxopen\b/.test(this.$el.getAttribute('class'))) {
        this.$emit('hide')
        this.closeCollapse()
      } else {
        this.$emit('show')
        this.openCollapse()
      }
    },
    toggle () {
      let elemets = document.querySelectorAll(this.switch)

      for (let i = 0; i < elemets.length; i++) {
        this.toggleCollapse(elemets[i])
      }
    }
  },
  created () {
    delegate(document, 'click.' + this._uid, this.switch, this.toggleCollapse)
  },
  mounted () {
    if (this.defaultOpen) {
      this.toggle()
    }
  },
  beforeDestroy () {
    delegateOff(document, 'click.' + this._uid)
  }
}
</script>

<style lang="scss">
  @import "collapse.scss";
</style>
