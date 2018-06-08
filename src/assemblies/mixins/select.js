export default {
  props: {
    inputClass: {
      type: String
    }
  },
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
