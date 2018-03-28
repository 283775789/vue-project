<template>
  <ul class="tw-list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'twList',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Object, Array],
    link: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      textMap: {}
    }
  },
  methods: {
    selectItem (val, text) {
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
    },
    syncValueToChild (val) {
      this.$children.forEach((child) => {
        child.menuValue = val
      })
    }
  },
  created () {
    window.menu = this
  },
  watch: {
    value (val) {
      this.syncValueToChild(val)
    }
  }
}
</script>
