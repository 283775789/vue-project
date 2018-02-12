<template>
  <div class="tw-poplayer">
    <div ref="poppane" class="tw-poppane" :style="placementStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { trigger, delegate, delegateOff } from '@tw/utils/event'
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
        eventElement: null
      }
    },
    methods: {
      togglePoppane (switchEl, event) {
        const vm = this
        const poppaneEl = vm.$refs.poppane

        let parent = vm.$parent

        if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          while (parent) {
            if (parent.$options.isTwPoppane) {
              parent.hasOpenChild = true
              break
            }

            parent = parent.$parent
          }
        }

        event.target.twPoppane = poppaneEl
        vm.eventElement = event.target

        if (vm.switchEvent === 'hover' && /\bxopen\b/.test(poppaneEl.getAttribute('class')) && switchEl.contains(event.target)) {
          return
        }

        // 计算位置坐标
        if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
          setTempStyle(poppaneEl, 'visibility', 'hidden !important', () => {
            addClass(poppaneEl, 'xopen')
            vm.placementStyle = placement(poppaneEl, switchEl, vm.relatedMinWidth)[vm.placement]
            removeClass(poppaneEl, 'xopen')
          })
        }

        vm.$nextTick(() => {
          if (poppaneEl.getAttribute('style') === '') {
            debugger
          }

          // 窗体大小切换时，修正弹出面板的位置
          var handleResize = () => {
            vm.placementStyle = placement(poppaneEl, switchEl, vm.relatedMinWidth)[vm.placement]
          }

          // 弹出面板显示时即添加关闭事件
          var addEvents = () => {
            if (vm.switchEvent === 'click') {
              // 用于关闭弹出面板
              document.addEventListener('click', toggleFunction, false)
              // 用于修正弹出面板的位置
              window.addEventListener('resize', handleResize)
            } else {
              document.addEventListener('mouseover', toggleFunction, false)
            }
          }

          // 弹出面板隐藏时移除先前委托给document的关闭事件等
          var removeEvents = () => {
            if (vm.switchEvent === 'click') {
              document.removeEventListener('click', toggleFunction, false)
              window.removeEventListener('resize', handleResize)
              delete vm.eventElement.twPoppane
            } else {
              document.removeEventListener('mouseover', toggleFunction, false)
            }
          }

          // 切换函数，打开与关闭弹出面板
          const toggleFunction = (e) => {
            // e不为undifined时说明当前冒泡的关闭事件正被触发
            if (e) {
              if (this.switchEvent === 'click') {
                // 冒泡的关闭事件在面板已隐藏后不重复触发 || 冒泡的关闭事件在面板开关元素上不触发
                if (!/\bxopen\b/.test(poppaneEl.getAttribute('class')) || switchEl.contains(e.target)) {
                  removeEvents()
                  return
                }

                // 当弹出面板的子元素是另一个弹出面板的开关时，不触发关闭事件
                if (poppaneEl.contains(e.target) && e.target.twPoppane) return
              } else {
                if (!/\bxopen\b/.test(poppaneEl.getAttribute('class')) || switchEl.contains(e.target) || poppaneEl.contains(e.target)) {
                  return
                }

                if (vm.hasOpenChild) return
              }
            }

            toggleSpecialTransitionClass(poppaneEl, 'xopen', ['display'], (toggle) => {
              if (toggle === 'add') {
                vm.$emit('show')
                addEvents()
              } else {
                let parent = vm.$parent

                while (parent) {
                  if (parent.$options.isTwPoppane) {
                    if (e && !parent.$el.contains(e.target)) {
                      parent.hasOpenChild = false
                      trigger(document, 'mouseover')
                    }
                    break
                  }

                  parent = parent.$parent
                }

                vm.$emit('hide')
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
