export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    closePoppane () {
      this.visible = false
      document.removeEventListener('click', this.closePoppane)
    },
    placePoppane () {
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
        this.placePoppane()
      } else {
        this.visible = false
      }
    },
    handleClickPoppaneLink (event) {
      if (this.trigger === 'hover') return

      event.stopPropagation()

      if (!window.twPoppane) {
        window.twPoppane = this
      }

      if (window.twPoppane !== this) {
        window.twPoppane.visible = false
        window.twPoppane = this
      }

      this.visible = !this.visible

      if (this.visible) {
        this.placePoppane()
        document.addEventListener('click', this.closePoppane)
      }
    }
  }
}
