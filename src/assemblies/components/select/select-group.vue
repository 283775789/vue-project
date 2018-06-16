<template>
  <div class="tw-select">
    <div class="tw-popswitch" :class=[switchSelector]>
      <input ref='filter' class="tw-input tw-select-input" :class="[inputClass]" type="text" :placeholder="placeholder" @focus="focusInput" @input="filterText=$event.target.value" />
    </div>
    <tw-poppane :switch="`.${switchSelector}`" @hide="hidePane">
      <ul class="tw-select-pane" :class="[multiple ? 'xmultiple' : 'xsingle']">
        <template v-for="(item, index) in resultItems">
          <li v-if="typeof item === 'string'" class="tw-select-groupname" :key="index"><slot name="groupName" v-bind="item">{{item}}</slot></li>
          <li class="tw-select-item"
            v-else-if="filterText===''||item[textKey].indexOf(filterText)!==-1"
            :class="{xdisabled:item[disabledKey],xselected:multiple?value.indexOf(item[valueKey])!==-1:value===item[valueKey]}"
            :key="index"
            @click="selectItem(item)">
            <slot v-bind="item">{{item.name}}<i v-if="multiple" class="tw-font xselect"></i></slot>
          </li>
        </template>
      </ul>
    </tw-poppane>
  </div>
</template>

<script>
import selectList from '@mixins/select-list'
import select from '@mixins/select'

export default {
  name: 'twSelectGroup',
  mixins: [selectList, select],
  props: {
    group: {
      type: Object,
      required: true,
      validator (value) {
        return typeof value.nameKey === 'string' && typeof value.itemsKey === 'string'
      }
    }
  },
  computed: {
    resultItems () {
      const vm = this
      let result = []

      vm.items.forEach(item => {
        result.push(item[vm.group.nameKey])
        result = result.concat(item[vm.group.itemsKey])
      })

      return result
    }
  },
  methods: {
    getselectedItem (val) {
      if (this.multiple) {
        this.selectedItem = this.resultItems.filter(element => val.indexOf(element[this.valueKey]) !== -1)
      } else {
        for (let i = 0; i < this.resultItems.length; i++) {
          if (val === this.resultItems[i][this.valueKey]) {
            this.selectedItem = this.resultItems[i]
            break
          }
        }
      }
    }
  }
}
</script>
