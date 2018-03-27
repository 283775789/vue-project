<template>
  <ul class="tw-menu">
    <li class="tw-menu-item" v-for="(item, index) in items" :key="index" @click='selectItem(item, index)'>
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
    value: [String, Number, Boolean, Object, Array]
  },
  data () {
    return {
      result: []
    }
  },
  methods: {
    selectItem (value, index) {
      if (this.multiple) {
        const index = this.result.indexOf(value)
        if (index === -1) {
          this.result.push(value)
        } else {
        }
      }
    }
  }
}
</script>
