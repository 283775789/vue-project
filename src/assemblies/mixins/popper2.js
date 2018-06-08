export default {
  data () {
    return {
      visible: false,
      isHover: false
    }
  },
  methods: {
    closePopper () {
      this.visible = false
      document.removeEventListener('click', this.closePopper)
    },
    placePopper () {
      this.$nextTick(() => {
        const selfRect = this.$el.getBoundingClientRect()
        const dropBody = this.$refs.body
        const dropBodyHeight = dropBody.offsetHeight
        const windowHeight = window.innerHeight

        if (selfRect.top + selfRect.height + dropBodyHeight > windowHeight && selfRect.top > dropBodyHeight) {
          dropBody.style.bottom = selfRect.height + 'px'
        } else {
          dropBody.style.bottom = ''
        }
      })
    },
    handleHover (event) {
      if (this.trigger !== 'hover') return

      if (this.$el.contains(event.relatedTarget)) return

      if (event.type === 'mouseover') {
        this.visible = true
        this.placePopper()
      } else {
        this.visible = false
      }
    },
    handleClickPoppaneLink (event) {
      if (this.trigger === 'hover') return

      event.stopPropagation()

      if (!window.twPopper) {
        window.twPopper = this
      }

      if (window.twPopper !== this) {
        window.twPopper.visible = false
        window.twPopper = this
      }

      this.visible = !this.visible

      if (this.visible) {
        this.placePopper()
        document.addEventListener('click', this.closePopper)
      }
    }
  }
}
