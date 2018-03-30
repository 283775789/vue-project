<template>
  <div class="tw-draggrid">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'twDraggrid',
    props: {
      cols: {
        type: Number,
        default: 1
      }
    },
    methods: {
      layout () {
        const children = this.$children
        debugger
      }
    },
    mounted () {
      this.layout()
    }
  }
</script>
