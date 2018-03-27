<template>
  <li class="tw-menu-item" :class="{xdisabled:disabled}" @click="handleClick()">
    <slot v-bind="{value, text}">{{text}}</slot>
  </li>
</template>

<script>
export default {
  name: 'twMenuItem',
  props: {
    value: {
      type: [String, Number, Object],
      required: true
    },
    text: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.$parent.selectItem(this.value)
    }
  }
}
</script>
