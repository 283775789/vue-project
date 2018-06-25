<template>
  <div>

    <i class="desig"></i>
  </div>
</template>

<script>
export default {
  name: 'newProject',
  data () {
    return {
      project: {
        name: '',
        version: '',
        developers: [],
        svn: {
          designImage: '',
          designFile: '',
          html: '',
          publish: '',
          flow: ''
        },
        document: {
          prd: '',
          api: ''
        },
        framework: ''
      },
      developers: [],
      scssVars: [],
      compGroup: null,
      styleEl: null,
      currentComp: null,
      currentCompScssVar: [],
      demosVm: null,
      compOptions: []
    }
  },
  computed: {
    compScssVars () {
      let result = null

      this.scssVars.forEach(module => {
        if (module.name === '组件变量') {
          result = module
        }
      })

      return result
    }
  },
  methods: {
    changeScssVars () {
      const vm = this
      vm.axios.post('css', vm.scssVars).then(function (responed) {
        vm.styleEl.textContent = responed.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    clickCompType (type) {
      if (this.demosVm) this.demosVm.$destroy()

      // 生成组件demo
      this.demosVm = new window.Vue({
        el: '#demos',
        render (h) {
          const demoVnodes = []

          type.demos.forEach(demo => {
            demoVnodes.push(h('div', {attrs: {class: 'tw-title xsub'}}, demo.name))
            demoVnodes.push(h(demo.tag))
          })

          return h('div', {attrs: {id: 'demos'}}, [demoVnodes])
        }
      })

      // 获取组件scss变量
      this.currentCompScssVar = []
      this.compScssVars.children.forEach(compVars => {
        if (compVars.name === type.name) {
          this.compOptions = []

          compVars.children.forEach(compVar => {
            this.compOptions.push(this.createCompVarMap(compVar.value))
          })

          this.currentCompScssVar = compVars
        }
      })
    },
    // 通过变量名查找scssVars所在的组与模块
    createCompVarMap (varName) {
      const modules = this.scssVars

      for (let i = 0; i < modules.length; i++) {
        if (modules[i].name !== '组件变量') {
          const groups = modules[i].children
          for (let j = 0; j < groups.length; j++) {
            const scssVars = groups[j].children
            for (let n = 0; n < scssVars.length; n++) {
              if (scssVars[n].varName === varName) {
                return [].concat(groups[j]).concat(groups.filter(group => group !== groups[j] && group.type !== 'NoChange'))
              }
            }
          }
        }
      }
    },
    // 获取项目取成员
    getMemebers () {
      const vm = this
      vm.axios.get('developers').then(function (responed) {
        vm.developers = responed.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created () {
    const vm = this
    vm.styleEl = document.createElement('style')
    document.querySelector('head').appendChild(vm.styleEl)

    this.getMemebers()

    vm.axios.get('scss-vars').then(function (responed) {
      vm.scssVars = responed.data
    }).catch(function (error) {
      console.log(error)
    })

    vm.axios.get('http://localhost:83/examples/config/components.json').then(function (responed) {
      vm.compGroup = responed.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  mounted () {
    document.body.classList.add('xnew')
  },
  beforeDestroy () {
    document.body.classList.remove('xnew')
    document.querySelector('head').removeChild(this.styleEl)
  }
}
</script>

<style lang="scss">
  @import "./new.scss";
</style>
