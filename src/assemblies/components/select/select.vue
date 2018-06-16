<template>
  <div class="tw-select">
    <div class="tw-popswitch" :class=[switchSelector]>
      <input ref='filter' class="tw-input tw-select-input" :class="[inputClass]" type="text" :placeholder="placeholder" @focus="focusInput" @input="filterText=$event.target.value" />
    </div>
    <tw-poppane :switch="`.${switchSelector}`" @hide="hidePane">
      <ul class="tw-select-pane" :class="[multiple ? 'xmultiple' : 'xsingle']">
        <li class="tw-select-item"
          v-if="filterText===''||item[textKey].indexOf(filterText)!==-1"
          :class="{xdisabled:item[disabledKey],xselected:multiple?value.indexOf(item[valueKey])!==-1:value===item[valueKey]}"
          v-for="(item, index) in items" :key="index" @click="selectItem(item)">
          <slot v-bind="item">{{item.name}}<i v-if="multiple" class="tw-font xselect"></i></slot>
        </li>
      </ul>
    </tw-poppane>
  </div>
</template>

<script>
import selectList from '@mixins/select-list'

export default {
  name: 'twSelect',
  mixins: [selectList],
  data () {
    return {
      filterText: '',
      switchSelector: ''
    }
  },
  methods: {
    focusInput () {
      this.$refs.filter.select()
    },
    hidePane () {
      this.$refs.filter.blur()
    }
  },
  created () {
    this.switchSelector = 'js-tw-poppane-switch-select-' + this._uid
  },
  mounted () {
    this.$refs.filter.value = this.labelText
  },
  watch: {
    value () {
      this.$refs.filter.value = this.labelText
      this.filterText = ''
    }
  }
}
</script>
