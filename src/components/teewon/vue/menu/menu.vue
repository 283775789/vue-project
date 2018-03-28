<template>
  <ul class="tw-menu">
    <li class="tw-menu-item" v-if="filterText===''||item[textKey].indexOf(filterText)!==-1" :class="{xdisabled:item[disabledKey],xselected:multiple?value.indexOf(item[valueKey])!==-1:value===item[valueKey]}" v-for="(item, index) in items" :key="index" @click="selectItem(item)">
        <slot v-bind="item"></slot>
    </li>
    <span class="tw-menu-text" ref="menuText">
      <slot name="menuText" v-bind="selectedItems"></slot>
    </span>
  </ul>
</template>

<script>
export default {
  name: 'twMenu',
  props: {
    items: {
      type: Array
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Array, Object],
    valueKey: {
      type: String,
      default: 'value'
    },
    textKey: {
      type: String,
      default: 'text'
    },
    disabledKey: {
      type: String
    },
    filterText: {
      type: String,
      default: ''
    },
    link: {
      type: String
    }
  },
  data () {
    return {
      displayElement: null,
      selectedItems: []
    }
  },
  methods: {
    isSelected (value) {
      if (this.multiple) {
        return this.value.indexOf(value) !== -1
      } else {
        return this.value === value
      }
    },
    getSElectedItems (values) {
      if (this.multiple) {
        this.selectedItems = this.items.filter(element => values.indexOf(element[this.valueKey]) !== -1)
      } else {
        for (let i = 0; i < this.items.length; i++) {
          if (values === this.items[i][this.valueKey]) {
            this.selectedItems = this.items[i]
            break
          }
        }
      }
    },
    selectItem (item) {
      let result = this.value
      let itemVal = item[this.valueKey]

      if (this.multiple) {
        const itemIndexInResult = result.indexOf(itemVal)
        result = [...result]

        if (itemIndexInResult === -1) {
          result.push(itemVal)
        } else {
          result.splice(itemIndexInResult, 1)
        }

        this.getSElectedItems(result)
      } else {
        if (result === itemVal) return
        result = itemVal
        this.selectedItems = item
      }

      this.$emit('input', result)
      this.$emit('change', result, this.selectedItems)
    }
  },
  created () {
    this.getSElectedItems(this.value)
  },
  mounted () {
    if (this.link) {
      this.displayElement = document.querySelector(this.link)
      if (!this.displayElement) throw Error(`使用属性link未查找到任何元素，请确定link指定的选择器是否正确并确保link指向的元素已经在页面中渲染!`)
      this.displayElement.appendChild(this.$refs.menuText)
    }
  }
}
</script>
