<template>
  <div class="tw-poplayer">
    <div ref="poppane" class="tw-poppane" :style="placementStyle" @mouseout="togglePoppane">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { delegate, delegateOff } from '@tw/utils/event'
  import { addClass, removeClass, setTempStyle, toggleSpecialTransitionClass } from '@tw/utils/dom'
  import { placement } from '@tw/utils/placement'
  // import { hasAncestor } from '@tw/utils/utils'

  export default {
    name: 'twPoppane',
    props: {
      switch: {
        type: String,
        required: true
      },
      switchEvent: {
        type: String,
        default: 'hover'
      },
      placement: {
        type: String,
        default: 'auto'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        placementStyle: null,
        switchEl: null
      }
    },
    methods: {
      togglePoppane (switchEl, event) {
        const poppaneEl = this.$refs.poppane
        if (event) {
          this.switchEl = switchEl
        } else {
          event = switchEl
          switchEl = this.switchEl
        }

        if (this.switchEvent === 'hover') {
          if ((switchEl.contains(event.target) || this.$el.contains(event.target)) && (switchEl.contains(event.relatedTarget) || this.$el.contains(event.relatedTarget))) return
        }

        // 计算位置坐标
        if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          setTempStyle(poppaneEl, 'visibility', 'hidden !important', () => {
            addClass(poppaneEl, 'xopen')
            this.placementStyle = placement(poppaneEl, switchEl)[this.placement]
            removeClass(poppaneEl, 'xopen')
          })
        }

        this.$nextTick(() => {
          if (poppaneEl.getAttribute('style') === '') {
            debugger
          }
          var handleResize = () => {
            this.placementStyle = placement(poppaneEl, switchEl)[this.placement]
          }

          var addEvents = () => {
            if (this.switchEvent === 'click') {
              document.addEventListener('click', toggleFunction, true)
            }

            window.addEventListener('resize', handleResize)
          }

          var removeEvents = () => {
            if (this.switchEvent === 'click') {
              document.removeEventListener('click', toggleFunction, true)
            }

            window.removeEventListener('resize', handleResize)
          }

          const toggleFunction = (e) => {
            if (this.switchEvent === 'click') {
              // 捕获事件在面板已隐藏后不重复触发 || 捕获事件在面板开关元素上不触发
              if ((e && !/\bxopen\b/.test(poppaneEl.getAttribute('class'))) || (e && switchEl.contains(e.target))) {
                removeEvents()
                return
              }
            }

            toggleSpecialTransitionClass(poppaneEl, 'xopen', ['display'], (toggle) => {
              if (toggle === 'add') {
                this.$emit('show')
                addEvents()
              } else {
                this.$emit('hide')
                removeEvents()
              }
            })
          }

          toggleFunction()
        })
      }
    },
    created () {
      if (this.switchEvent === 'click') {
        delegate(document, 'click.' + this._uid, this.switch, this.togglePoppane)
      } else {
        delegate(document, 'mouseover.' + this._uid, this.switch, this.togglePoppane)
        delegate(document, 'mouseout.' + this._uid, this.switch, this.togglePoppane)
      }
    },
    mounted () {
      document.body.appendChild(this.$el)
    },
    beforeDestroy () {
      delegateOff(document, 'click.' + this._uid)
    }
  }
</script>
