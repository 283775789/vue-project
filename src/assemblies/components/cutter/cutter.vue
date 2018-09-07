<template>
  <div class="tw-cutter"
       :class="{xoverflow: overflow, xmore: !collapsed}"
       :style="{height: overflow ? limitHeight + 'px' : 'auto'}">

       <slot></slot>

       <div v-if="overflow"
            class="tw-cutter-tool"
            @click="collapsed=!collapsed">
            <i class="tw-cutter-ellipsis">...</i>
            <slot name="btn">
              <a class="tw-cutter-btn">{{btnText}}</a>
            </slot>
       </div>
  </div>
</template>

<script>
export default {
  name: 'tw-cutter',

  props: {
    limitHeight: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      btnText: '',
      overflow: false,
      collapsed: false
    }
  },

  methods: {
    init () {
      const cutterHeight = this.$el.offsetHeight

      if (cutterHeight > this.limitHeight) {
        this.overflow = true
        this.collapsed = true
      }
    }
  },

  created () {
    this.btnText = this.$i18n ? this.$t('components.cutter.expand') : '展开'
  },

  mounted () {
    this.init()
  }
}
</script>
