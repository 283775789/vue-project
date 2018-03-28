<template>
  <li class="tw-menu-item" v-if="menuValue.length===0 || text.indexOf(menuValue)!==-1" :class="{xdisabled:disabled,xselected:menuValue===value || menuValue.indexOf(value)!==-1}" @click="handleClick()">
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
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    valueKey: String
  },
  data () {
    return {
      menuValue: []
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.$parent.selectItem(this.value, this.text)
    }
  },
  created () {
    const value = this.value

    if (typeof this.value === 'object') {
      if (typeof this.valueKey === 'undefined' || typeof this.value[this.valueKey] === 'undefined') {
        throw TypeError('当tw-menu-item的value值为对象时，必须指定var')
      } else {

      }
    }

    this.menuValue = this.$parent.value
    this.$parent.textMap[this.value] = this.text
  }
}
</script>
