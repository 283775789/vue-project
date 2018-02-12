<template>
  <div class="tw-poplayer">
    <transition @before-enter="beforeEnter" @after-enter="afterEnter">
      <div v-show="isOpen" ref="poppane" class="tw-poppane" :style="placementStyle">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import { delegate } from '@tw/utils/event'
  import { addClass } from '@tw/utils/dom'
  // import { placement } from '@tw/utils/placement'
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
      openPoppane () {
        this.isOpen = true
      },
      closePoppane () {
        this.isOpen = false
      },
      togglePoppane () {
        this.isOpen = !this.isOpen
      },
      beforeEnter () {
        const poppane = this.$refs.poppane
        poppane.style.display = 'block'
        debugger
      },
      afterEnter () {
        const poppane = this.$refs.poppane
        addClass(poppane, 'xopen')
      }
    },
    created () {
      if (this.switchEvent === 'click') {
        delegate(document, 'click.' + this._uid, this.switch, this.togglePoppane, true)
      } else {
        // delegate(document, 'mouseover.' + this._uid, this.switch, this.togglePoppane, true)
      }
    },
    beforeDestroy () {
      // delegateOff(document, 'click.' + this._uid, true)
    }
  }
</script>
