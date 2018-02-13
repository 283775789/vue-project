<template>
  <div ref="poppane" class="tw-poppane" :style="placementStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { delegate, delegateOff } from '@tw/utils/event'
  import { addClass, removeClass, setTempStyle, toggleSpecialTransitionClass } from '@tw/utils/dom'
  import { placement } from '@tw/utils/placement'
  // import { hasAncestor } from '@tw/utils/utils'
  import popper from '@tw/mixins/popper'

  export default {
    name: 'twPoppane',
    mixins: [popper],
    props: {
      switch: {
        type: String,
        required: true
      },
      switchEvent: {
        type: String,
        default: 'click'
      },
      placement: {
        type: String,
        default: 'auto'
      },
      relatedMinWidth: {
        type: String,
        default: '100%',
        validator (value) {
          return /^\d+(\.\d{1,5})?%$/.test(value)
        }
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        placementStyle: null,
        switchEl: null,
        popLayer: null,
        created: false,
        open: false,
        hasOpenChildPoppane: false
      }
    },
    methods: {
      setParent (hasOpenChildPoppane) {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.isTwPoppane) {
            parent.hasOpenChildPoppane = hasOpenChildPoppane
            break
          }

          parent = parent.$parent
        }
      },
      openPoppane () {
        toggleSpecialTransitionClass(this.$el, 'xopen', {type: 'add'})
      },
      closePoppane (event) {
        if (event) {
          if (this.hasOpenChildPoppane) return
          if (this.switchEl.contains(event.target)) return
          if (this.$el.contains(event.target) && event.target.isTwSwitch) {
            return
          }
          document.removeEventListener(event.type, this.closePoppane)
        }

        toggleSpecialTransitionClass(this.$el, 'xopen', {type: 'remove'})
        this.open = false

        let parent = this.$parent
        while (parent) {
          if (parent.$options.isTwPoppane) {
            parent.hasOpenChildPoppane = false
            break
          }

          parent = parent.$parent
        }
      },
      togglePoppane (switchEl, event) {
        this.open = !this.open
        this.switchEl = switchEl

        this.setParent(this.open)

        !this.created && document.body.appendChild(this.popLayer)

        const poppaneEl = this.$el
        // 计算位置坐标
        if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          setTempStyle(poppaneEl, 'visibility', 'hidden !important', () => {
            addClass(poppaneEl, 'xopen')
            this.placementStyle = placement(poppaneEl, switchEl, this.relatedMinWidth)[this.placement]
            removeClass(poppaneEl, 'xopen')
          })
        }

        this.$nextTick(() => {
          if (this.open) {
            this.openPoppane()
            document.addEventListener(event.type, this.closePoppane)
          } else {
            this.closePoppane()
            document.removeEventListener(event.type, this.closePoppane)
          }
        })
      }
    },
    created () {
      if (this.switchEvent === 'click') {
        delegate(document, 'click.' + this._uid, this.switch, this.togglePoppane, true)
      } else {
        delegate(document, 'mouseover.' + this._uid, this.switch, this.togglePoppane, true)
      }
    },
    beforeDestroy () {
      delegateOff(document, 'click.' + this._uid, true)
    }
  }
</script>
