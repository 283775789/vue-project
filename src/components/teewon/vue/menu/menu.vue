<template>
  <ul class="tw-menu">
    <slot></slot>
  </ul>
</template>

<script>

export default {
  name: 'twMenu',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Object, Array]
  },
  methods: {
    selectItem (val) {
      let result = val

      if (this.multiple) {
        const valueIndex = this.value.indexOf(val)
        result = [...this.value]

        if (valueIndex === -1) {
          result.push(val)
        } else {
          result.splice(valueIndex, 1)
        }
      } else {
        if (this.value === val) return
      }

      this.$emit('input', result)
      this.$emit('change', result)
    }
  }
}
</script>
