<template>
  <ul class="tw-list">
    <li class="tw-list-item" v-if="filterText===''||item[textKey].indexOf(filterText)!==-1" :class="{xdisabled:item[disabledKey],xselected:multiple?value.indexOf(item[valueKey])!==-1:value===item[valueKey]}" v-for="(item, index) in items" :key="index" @click="selectItem(item)">
        <slot v-bind="item"></slot>
    </li>
    <span v-if="link" class="tw-list-label" ref="listLabel"><slot name="listLabel" v-bind="selectedItem">{{ labelDefaultText }}</slot></span>
  </ul>
</template>

<script>
export default {
  name: 'twList',
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
    placeholder: {
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
      selectedItem: []
    }
  },
  computed: {
    labelDefaultText () {
      if (this.multiple) {
        if (this.selectedItem.length === 0) {
          return '请选择'
        } else if (this.selectedItem.length === 1) {
          return this.selectedItem[0][this.textKey]
        } else {
          return `已选择${this.selectedItem.length}项`
        }
      } else {
        return this.selectedItem[this.textKey]
      }
    }
  },
  methods: {
    getselectedItem (val) {
      if (this.multiple) {
        this.selectedItem = this.items.filter(element => val.indexOf(element[this.valueKey]) !== -1)
      } else {
        for (let i = 0; i < this.items.length; i++) {
          if (val === this.items[i][this.valueKey]) {
            this.selectedItem = this.items[i]
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

        this.getselectedItem(result)
      } else {
        if (result === itemVal) return
        result = itemVal
        this.selectedItem = item
      }

      this.$emit('input', result)
      this.$emit('change', result, this.selectedItem)
    }
  },
  created () {
    this.getselectedItem(this.value)
  },
  mounted () {
    if (this.link) {
      this.displayElement = document.querySelector(this.link)
      if (!this.displayElement) throw Error(`使用属性link未查找到任何元素，请确定link指定的选择器是否正确并确保link指向的元素已经在页面中渲染!`)
      this.displayElement.appendChild(this.$refs.listLabel)
    }
  }
}
</script>
