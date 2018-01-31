export default {
  data () {
    return {
      visible: false
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
        const popperBody = this.$refs.body

        popperBody.style.height = 'auto'
        const popperBodyHeight = popperBody.offsetHeight
        popperBody.style.height = '0'

        if (selfRect.top + selfRect.height + popperBodyHeight > window.innerHeight && selfRect.top > popperBodyHeight) {
          popperBody.style.bottom = selfRect.height + 'px'
        } else {
          popperBody.style.bottom = ''
        }

        setTimeout(() => {
          popperBody.style.height = popperBodyHeight + 'px'
        }, 30)
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
    handleClickDropdownLink (event) {
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
  },
  watch: {
    visible (value) {
      if (!value) this.$refs.body.style.height = '0'
    }
  }
}
