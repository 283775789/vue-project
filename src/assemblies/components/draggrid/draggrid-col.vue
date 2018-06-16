<template>
  <div class="tw-draggrid-col" :style="{width:width}" draggable>
    <div class="tw-draggrid-col-inner">
      <slot>默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'twDraggridCol',
  props: {
    no: {
      type: Number,
      required: true
    },
    colspan: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      top: 0,
      left: 0,
      width: 0
    }
  },
  created () {

  },
  mounted () {
    this.$emit('ok', this)
  }
}
</script>
