import {trigger} from '@tw/utils/event'
import placement from '@tw/utils/placement'
import utils from '@tw/utils/utils'

export default {
  props: {
    trigger: {
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
      visible: false,
      triggerType: 'hover',
      placementStyle: null,
      popLayer: false,
      createdPopLayer: false
    }
  },
  methods: {
    closePoppane () {
      this.visible = false
      document.removeEventListener('click', this.closePoppane)
    },
    placePoppane () {
      this.$nextTick(() => {
        if (!this.createdPopLayer) {
          document.body.appendChild(this.popLayer)
          this.createdPopLayer = true
        }

        this.placementStyle = placement(this.$refs.body, this.$el)[this.placement]
      })
    },
    handleHover (event) {
      if (this.disabled) return
      if (this.triggerType !== 'hover') return

      if ((this.popLayer && this.popLayer.contains(event.relatedTarget)) || this.$el.contains(event.relatedTarget)) return

      if (event.type === 'mouseover') {
        this.visible = true
        this.placePoppane()
      } else {
        this.visible = false
      }
    },
    handleClickPoppaneLink (event) {
      if (this.disabled) return
      if (this.triggerType === 'hover') return

      event.stopPropagation()

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
  mounted () {
    const popLayer = document.createElement('div')
    popLayer.setAttribute('class', 'tw-poplayer')
    popLayer.appendChild(this.$refs.body)
    this.popLayer = popLayer
  },
  beforeDestroy () {
    if (!this.createdPopLayer) {
      document.body.removeChild(this.popLayer)
    }
  },
  watch: {
    visible (value) {
      if (value) {
        this.$emit('show')
      } else {
        this.$emit('hide')
      }
    }
  }
}
