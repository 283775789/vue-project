<template>
  <li @click="clickHandler">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'twMenuItem',
  props: {
    value: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    clickHandler () {
      this.$emit('select', this.value)
    }
  }
}
</script>
