<template>
  <div ref="poppane" class="tw-poppane" :class="['x' + placement]">
    <slot></slot>
  </div>
</template>

<script>
  import { delegate, delegateOff } from '@tw/utils/event'
  import { addClass, removeClass, setTempStyle, toggleSpecialTransitionClass } from '@tw/utils/dom'
  import { placement } from '@tw/utils/placement'

  export default {
    isTwPoppane: true,
    name: 'twPoppane',
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
      noArrow: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
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
      someParent (callback, ...agrs) {
        let value = false
        let parent = this.switchEl.parentNode

        while (parent) {
          if (parent.twPoppane) {
            value = callback(parent.twPoppane, ...agrs)
            if (value) break

            parent = parent.twPoppane.switchEl.parentNode
          } else {
            parent = parent.parentNode
          }
        }

        return value
      },
      isParentSwitchElement (eventTarget) {
        return this.someParent((parentPoppane, eventTarget) => {
          if (parentPoppane.switchEl.contains(eventTarget)) {
            return true
          }

          return false
        }, eventTarget)
      },
      isChildSwitchElement (eventTarget) {
        let value = false
        let parent = this.switchEl.parentNode

        while (parent) {
          if (parent.twPoppane) {
            if (value) break

            parent = parent.twPoppane.switchEl.parentNode
          } else {
            parent = parent.parentNode
          }
        }

        return value
      },
      setParent (hasOpenChildPoppane) {
        const vm = this
        this.someParent((parentPoppane, hasOpenChildPoppane) => {
          parentPoppane.hasOpenChildPoppane = hasOpenChildPoppane
          if (!hasOpenChildPoppane && (!vm.isSwitchElement(vm.eventTarget) || vm.isParentSwitchElement(vm.eventTarget) || !vm.switchEl.contains(vm.eventTarget))) {
            parentPoppane.closePoppane()
          }
          return true
        }, hasOpenChildPoppane)
      },
      openPoppane () {
        toggleSpecialTransitionClass(this.$el, 'xopen', {type: 'add'})
        addClass(this.switchEl, 'xopen')
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
        removeClass(this.switchEl, 'xopen')
        this.open = false
        this.setParent(false)
        document.removeEventListener('click', this.closePoppane)
      },
      togglePoppane (switchEl, event) {
        this.switchEl = switchEl
        this.eventTarget = event.target

        this.created || document.body.appendChild(this.popLayer)

        const poppaneEl = this.$el
        const positionEl = this.positionElement === 'auto' ? switchEl : this.positionElement
        let placementStyle

        // 计算位置坐标
        if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          setTempStyle(poppaneEl, 'visibility', 'hidden !important', () => {
            addClass(poppaneEl, 'xopen')
            placementStyle = placement(poppaneEl, positionEl, this.relatedMinWidth)[this.placement]
            removeClass(poppaneEl, 'xopen')
          })
        }

        for (const name in placementStyle) {
          this.$el.style[name] = placementStyle[name]
        }

        if (/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          this.closePoppane()
        } else {
          this.openPoppane()
          document.addEventListener(event.type, this.closePoppane)
        }
      },
      handleSwitchStyle () {
        const switchEls = document.querySelectorAll(this.switch)

        switchEls.forEach(element => {
          if (!this.noArrow) {
            const arrow = document.createElement('i')
            arrow.setAttribute('class', 'tw-arrow ' + ({a: 'xdown', t: 'xdown', r: 'xright', b: 'xdown', l: 'xleft'})[this.placement.substring(0, 1)])
            element.appendChild(arrow)
            addClass(element, 'x' + this.placement)
          } else {
            addClass(element, 'xnoarrow')
          }
        })
      }
    },
    created () {
      delegate(document, 'click.' + this._uid, this.switch, this.togglePoppane, true)
    },
    mounted () {
      const popLayer = document.createElement('div')
      popLayer.setAttribute('class', 'tw-poplayer')
      popLayer.appendChild(this.$el)
      this.popLayer = popLayer
      this.$el.twPoppane = this
      this.handleSwitchStyle()
    },
    beforeDestroy () {
      delegateOff(document, 'click.' + this._uid, true)
      this.created && document.body.removeChild(this.popLayer)
    },
    watch: {
      switchEl (value, oldvalue) {
        oldvalue && delete oldvalue.twSwitch
        value.twSwitch = this
      }
    }
  }
</script>
