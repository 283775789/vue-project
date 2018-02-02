import eventUtil from '@tw/utils/event'
import placement from '@tw/utils/placement'
import utils from '@tw/utils/utils'
const trigger = eventUtil.trigger

export default {
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    placement: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      visible: false,
      triggerType: 'hover',
      placementStyle: null,
      popLayer: false
    }
  },
  methods: {
    closePoppane () {
      this.visible = false
      document.removeEventListener('click', this.closePoppane)
    },
    placePoppane () {
      this.$nextTick(() => {
        if (!this.popLayer) {
          const popLayer = document.createElement('div')
          popLayer.setAttribute('class', 'tw-poplayer')
          popLayer.appendChild(this.$refs.body)
          document.body.appendChild(popLayer)
          this.popLayer = popLayer
        }

        this.placementStyle = placement(this.$refs.body, this.$el)[this.placement]
      })
    },
    handleHover (event) {
      if (this.triggerType !== 'hover') return

      if (this.popLayer && this.popLayer.contains(event.relatedTarget) || this.$el.contains(event.relatedTarget)) return

      if (event.type === 'mouseover') {
        this.visible = true
        this.placePoppane()
      } else {
        this.visible = false
      }
    },
    handleClickPoppaneLink (event) {
      if (this.triggerType === 'hover') return

      event.stopPropagation()

      if (!window.twPoppane) {
        window.twPoppane = this
      }

      if (window.twPoppane !== this) {
        if (!utils.hasAncestor(this, 'twPoppane')) {
          trigger(document, 'click')
        }

        window.twPoppane = this
      }

      this.visible = !this.visible

      if (this.visible) {
        this.placePoppane()
        document.addEventListener('click', this.closePoppane)
      }
    }
  },
  created () {
    // 对触摸屏只使用click触发
    if ('ontouchstart' in document) {
      this.triggerType = 'click'
    } else {
      this.triggerType = this.trigger
    }
  },
  beforeDestroy () {
    if (this.popLayer) {
      document.body.removeChild(this.popLayer)
    }
  }
}
