import eventUtil from '@tw/utils/event'
import placement from '@tw/utils/placement'
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
      placementStyle: null
    }
  },
  methods: {
    closePopmenu () {
      this.visible = false
      document.removeEventListener('click', this.closePopmenu)
    },
    placePopmenu () {
      this.$nextTick(() => {
        this.placementStyle = placement(this.$refs.body, this.$el)[this.placement]
      })
    },
    handleHover (event) {
      if (this.triggerType !== 'hover') return

      if (this.$el.contains(event.relatedTarget)) return

      if (event.type === 'mouseover') {
        this.visible = true
        this.placePopmenu()
      } else {
        this.visible = false
      }
    },
    handleClickPopmenuLink (event) {
      if (this.triggerType === 'hover') return
      event.stopPropagation()

      if (!window.twPopmenu) {
        window.twPopmenu = this
      }

      if (window.twPopmenu !== this) {
        if (!window.twPopmenu.$el.contains(this.$el)) {
          trigger(document, 'click')
        }
        window.twPopmenu = this
      }

      this.visible = !this.visible

      if (this.visible) {
        this.placePopmenu()
        document.addEventListener('click', this.closePopmenu)
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
  }
}
