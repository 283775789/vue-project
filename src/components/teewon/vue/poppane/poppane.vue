<template>
  <div ref="poppane" class="tw-poppane" :style="placementStyle">
    <slot></slot>
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
        popLayer: null,
        created: false,
        open: false,
        hasOpenChildPoppane: false
      }
    },
    methods: {
      togglePoppane (switchEl, event) {
        this.open = !this.open

        let parent = this.$parent

        // 检查是否有父辈类poppane组件
        while (parent) {
          if (parent.$options.isTwPoppane) {
            parent.hasOpenChildPoppane = this.open
            break
          }

          parent = parent.$parent
        }

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
