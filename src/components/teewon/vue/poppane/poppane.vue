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
      placement: {
        type: String,
        default: 'auto'
      },
      positionElement: {
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
        eventTarget: null,
        created: false,
        open: false,
        hasOpenChildPoppane: false
      }
    },
    methods: {
      isSwitchElement (el) {
        let parent = el

        do {
          if (parent.twSwitch) {
            return true
          }
          parent = parent.parentNode
        } while (parent)

        return false
      },
      isParentSwitchElement (eventTarget) {
        let value = false
        let parent = this.switchEl.parentNode

        while (parent) {
          if (parent.twPoppane) {
            if (parent.twPoppane.switchEl.contains(eventTarget)) {
              value = true
              break
            }
            parent = parent.twPoppane.switchEl.parentNode
          } else {
            parent = parent.parentNode
          }
        }

        return value
      },
      setParent (hasOpenChildPoppane) {
        let parent = this.switchEl.parentNode

        while (parent) {
          if (parent.twPoppane) {
            parent.twPoppane.hasOpenChildPoppane = hasOpenChildPoppane

            if (!hasOpenChildPoppane && (!this.isSwitchElement(this.eventTarget) || this.isParentSwitchElement(this.eventTarget))) {
              parent.twPoppane.closePoppane()
            }

            break
          }

          parent = parent.parentNode
        }
      },
      openPoppane () {
        toggleSpecialTransitionClass(this.$el, 'xopen', {type: 'add'})
        this.open = true
        this.setParent(true)
      },
      closePoppane (event) {
        if (event) {
          this.eventTarget = event.target

          if (this.hasOpenChildPoppane) return
          if (this.switchEl.contains(event.target)) return
          if (this.$el.contains(event.target) && this.isSwitchElement(event.target)) return
        }

        toggleSpecialTransitionClass(this.$el, 'xopen', {type: 'remove'})
        this.open = false
        this.setParent(false)
        document.removeEventListener('click', this.closePoppane)
      },
      togglePoppane (switchEl, event) {
        this.switchEl = switchEl
        this.eventTarget = event.target

        !this.created && document.body.appendChild(this.popLayer)
        const poppaneEl = this.$el
        const positionEl = this.positionElement === 'auto' ? switchEl : this.positionElement

        // 计算位置坐标
        if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          setTempStyle(poppaneEl, 'visibility', 'hidden !important', () => {
            addClass(poppaneEl, 'xopen')
            this.placementStyle = placement(poppaneEl, positionEl, this.relatedMinWidth)[this.placement]
            removeClass(poppaneEl, 'xopen')
          })
        }

        this.$nextTick(() => {
          if (/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
            this.closePoppane()
          } else {
            this.openPoppane()
            document.addEventListener(event.type, this.closePoppane)
          }
        })
      }
    },
    created () {
      delegate(document, 'click.' + this._uid, this.switch, this.togglePoppane, true)
    },
    beforeDestroy () {
      delegateOff(document, 'click.' + this._uid, true)
    }
  }
</script>
