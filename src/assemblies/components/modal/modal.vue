<template>
  <div class="tw-modal" :class="{xopen: maskVisible}">
    <transition
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
      v-on:after-leave="maskVisible = false">
      <div ref="window"
        v-if="visible"
        class="tw-modal-window">
        <div class="tw-modal-window-header"
            :class="{xnodrag: !draggable, xweaking: weaking}"
            @mousedown="startMoveModal">
            <h4><slot name="header"></slot></h4>
            <a class="tw-modal-window-colose" @click="closeModal">×</a>
        </div>
        <div class="tw-modal-window-body">
          <slot name="body"></slot>
        </div>
        <div class="tw-modal-window-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'tw-modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: true
    },
    weaking: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      maskVisible: this.visible,
      offset: {
        startTop: 0,
        startLeft: 0,
        top: 0,
        left: 0
      }
    }
  },
  methods: {
    // 同步关闭弹窗
    closeModal () {
      this.$emit('update:visible', false)
    },
    // 移动弹窗: 开始
    startMoveModal (e) {
      if (!this.draggable) return

      this.offset.startTop = e.pageY
      this.offset.startLeft = e.pageX
      this.offset.top = parseInt(this.$refs.window.style.top)
      this.offset.left = parseInt(this.$refs.window.style.left)

      if (isNaN(this.offset.top)) this.offset.top = 0
      if (isNaN(this.offset.left)) this.offset.left = 0

      const vm = this
      const removeMouseMove = function () {
        document.removeEventListener('mousemove', vm.moveModal)
        document.removeEventListener('mouseup', removeMouseMove)
      }

      document.addEventListener('mousemove', this.moveModal)
      document.addEventListener('mouseup', removeMouseMove)
    },
    // 移动弹窗
    moveModal (e) {
      const element = this.$refs.window
      const spacingX = (window.innerWidth - element.offsetWidth) / 2
      const spacingY = (window.innerHeight - element.offsetHeight) / 2
      const top = this.offset.top + e.pageY - this.offset.startTop
      const left = this.offset.left + e.pageX - this.offset.startLeft

      if (top < spacingY && top > -spacingY) {
        this.$refs.window.style.top = top + 'px'
      }

      if (left < spacingX && left > -spacingX) {
        this.$refs.window.style.left = left + 'px'
      }
    }
  },
  watch: {
    visible (value) {
      if (value) {
        this.maskVisible = true
      }
    }
  }
}
</script>

<style lang="scss">
  @import './modal.scss';
</style>
