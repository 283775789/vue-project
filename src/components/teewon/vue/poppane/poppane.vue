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
        const vm = this

        if (event) {
          vm.switchEl = switchEl
          event.target.twPoppane = true
        } else {
          if (vm.switchEvent === 'click') return
          event = switchEl
          switchEl = vm.switchEl
        }

        if (vm.switchEvent === 'hover') {
          if ((switchEl.contains(event.target) || vm.$el.contains(event.target)) && (switchEl.contains(event.relatedTarget) || vm.$el.contains(event.relatedTarget))) return
        }

        const poppaneEl = vm.$refs.poppane

        // 计算位置坐标
        if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          setTempStyle(poppaneEl, 'visibility', 'hidden !important', () => {
            addClass(poppaneEl, 'xopen')
            vm.placementStyle = placement(poppaneEl, switchEl)[vm.placement]
            removeClass(poppaneEl, 'xopen')
          })
        }

        vm.$nextTick(() => {
          if (poppaneEl.getAttribute('style') === '') {
            debugger
          }
          var handleResize = () => {
            vm.placementStyle = placement(poppaneEl, switchEl)[vm.placement]
          }

          var addEvents = () => {
            if (vm.switchEvent === 'click') {
              document.addEventListener('click', toggleFunction, false)
            }

            window.addEventListener('resize', handleResize)
          }

          var removeEvents = (e) => {
            if (vm.switchEvent === 'click') {
              document.removeEventListener('click', toggleFunction, false)
            }

            window.removeEventListener('resize', handleResize)
            debugger
            if (e.target.twPoppane) delete e.target.twPoppane
          }

          const toggleFunction = (e) => {
            if (e) {
              // 捕获事件在面板已隐藏后不重复触发 || 捕获事件在面板开关元素上不触发
              if (!/\bxopen\b/.test(poppaneEl.getAttribute('class')) || switchEl.contains(e.target)) {
                removeEvents(e)
                return
              }

              if (e.target.twPoppane) return

              // let fromChildPoppane = false

              // const testChildren = function testChildren (vueNode) {
              //   if (vueNode.$option.isPoppane && vueNode.$el.contains(e.target)) {
              //     fromChildPoppane = true
              //     return
              //   }

              //   const children = vueNode.$children

              //   if (children.length === 0) return

              //   children.foreach(child => {
              //     testChildren(child)
              //   })
              // }

              // vm.$children.forEach(child => {
              //   testChildren(child)
              // })
            }

            toggleSpecialTransitionClass(poppaneEl, 'xopen', ['display'], (toggle) => {
              if (toggle === 'add') {
                vm.$emit('show')
                addEvents()
              } else {
                vm.$emit('hide')
                removeEvents(e || event)
              }
            })
          }

          toggleFunction()
        })
      }
    },
    created () {
      if (this.switchEvent === 'click') {
        delegate(document, 'click.' + this._uid, this.switch, this.togglePoppane, true)
      } else {
        delegate(document, 'mouseover.' + this._uid, this.switch, this.togglePoppane, true)
        delegate(document, 'mouseout.' + this._uid, this.switch, this.togglePoppane, true)
      }
    },
    beforeDestroy () {
      delegateOff(document, 'click.' + this._uid, true)
    }
  }
</script>
