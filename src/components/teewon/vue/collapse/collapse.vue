<template>
  <div class="tw-collapse">
    <a class="tw-collapse-link"><slot></slot><i class="tw-caret xright"></i></a>
    <div class="tw-collapse-body">
      <slot name="collapse-body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'twCollapse',
    data () {
      return {
        visible: false
      }
    }
  }
</script>
