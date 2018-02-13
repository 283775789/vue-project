/**
 * 类弹出面板需实现的属性
 */
export default {
  isTwPoppane: true,
  data () {
    return {
      isOpen: false,
      hasOpenChildPoppane: false
    }
  },
  mounted () {
    const popLayer = document.createElement('div')
    popLayer.setAttribute('class', 'tw-poplayer')
    popLayer.appendChild(this.$el)
    this.popLayer = popLayer
  },
  beforeDestroy () {
    this.created && document.body.removeChild(this.popLayer)
  },
  watch: {
    open (value) {
      if (value) {
        this.switchEl.isTwSwitch = true
      }
    }
  }
}
