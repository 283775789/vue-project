<template>
  <ul class="tw-menu">
    <li class="tw-menu-item" :class="{xselected: value===item.value || value.indexOf(item.value)!==-1}" v-for="(item, index) in items" :key="index" @click='selectItem(item)'>
      <slot v-bind="item">{{ item.text }}</slot>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'twMenu',
  props: {
    items: {
      type: Array,
      default: []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Object, Array]
  },
  methods: {
    selectItem (item) {
      let items = item
      let values = item.value

      if (this.multiple) {
        debugger
        const valueIndex = this.value.indexOf(item.value)
        values = [...this.value]
        items = this.items.filter(el => values.indexOf(el.value) !== -1)

        if (valueIndex === -1) {
          values.push(item.value)
          items.push(item)
        } else {
          values.splice(valueIndex, 1)
          items.splice(valueIndex, 1)
        }
      } else {
        if (this.value === item.value) return
      }

      this.$emit('input', values)
      this.$emit('change', values, items)
    }
  }
}
</script>
