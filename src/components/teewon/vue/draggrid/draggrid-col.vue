<template>
  <div class="tw-draggrid-col" :style="{width:width}">
    <div class="tw-draggrid-col-inner">
      <slot>默认内容</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'twDraggridCol',
    props: {
      colspan: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        width: 0,
        left: 0
      }
    }
  }
</script>
