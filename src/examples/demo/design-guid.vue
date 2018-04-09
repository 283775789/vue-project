<template>
  <form>
    <table class="tw-form xtable" v-for="(scssModule, index) in scssVars" v-if="scssModule.name!=='组件变量'" :key="index">
      <tr>
        <td colspan="4">
          <div class="tw-title">{{ scssModule.name }}</div>
        </td>
      </tr>
      <tr v-for="(scssGroup, index) in scssModule.children" v-if="scssGroup.type" :key="index">
        <td colspan="4">
          <div class="tw-title xsub">{{ scssGroup.name }}</div>
          <!-- 非颜色相关变量 -->
          <div v-if="scssGroup.type !== 'Color'">
            <div class="tw-scssvar" v-for="(scssVar, index) in scssGroup.children" v-if="!/tw-/.test(scssGroup.type) && scssGroup.type !== 'Spacing'" :key="index" :title="scssVar.varName">
              <div v-if="!scssVar.values" class="tw-scssvar-body">
                <input v-if="scssGroup.type === 'String'" type="text" class="tw-scssvar-value" v-model="scssVar.value" @change="changeScssVars" />
                <input v-if="scssGroup.type === 'FontSize'" :style="{fontSize:parseInt(scssVar.value)<10?'10px':scssVar.value}" type="text" class="tw-scssvar-value" v-model="scssVar.value" @change="changeScssVars" />
              </div>
              <div v-if="!scssVar.values" class="tw-scssvar-title">{{scssVar.name}}</div>
              <div v-if="scssVar.values">
                <label class="tw-optbox xradio" v-for="(item, index) in scssVar.values" :key="index"><input type="radio" :value="item.replace(/.*:/,'')" v-model="scssVar.value" @change="changeScssVars"  /><span>{{ item.replace(/:.*/,'') }}</span></label>
              </div>
            </div>
            <a class="tw-addbtn xscssvar" v-if="scssGroup.addable && scssGroup.type === 'FontSize'"></a>
            <!-- 间距相关变量 -->
            <div v-if="scssGroup.type === 'Spacing'">
              <div class="tw-scssvar" v-for="(scssVar, index) in scssGroup.children" :key="index" :title="scssVar.varName" :style="{marginLeft:index === 0 ? 0 : scssVar.value}">
                  <div class="tw-scssvar-body">
                    <input type="text" class="tw-scssvar-value" v-model="scssVar.value" @change="changeScssVars" />
                  </div>
                  <div class="tw-scssvar-title">{{scssVar.name}}</div>
              </div>
              <a class="tw-addbtn xscssvar" v-if="scssGroup.addable"></a>
            </div>
            <!-- 间距相关变量 -->
          </div>
          <!-- /非颜色相关变量 -->

          <!-- 颜色相关变量 -->
          <div class="tw-palette" v-if="scssGroup.type === 'Color'">
            <div class="tw-scssvar" v-for="(scssVar, index) in scssGroup.children" :key="index" :title="scssVar.varName+':'+scssVar.value">
              <div class="tw-scssvar-body">
                <el-color-picker class="tw-colorcell" v-model="scssVar.value" @change="changeScssVars"></el-color-picker>
              </div>
              <div class="tw-scssvar-title">{{scssVar.name}}</div>
            </div>
            <a class="tw-addbtn xscssvar" v-if="scssGroup.addable"></a>
          </div>
          <!-- /颜色相关变量 -->
        </td>
      </tr>
    </table>
  </form>
</template>

<script>
export default {
  name: 'designGuid',
  data () {
    return {
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
  created () {
    const vm = this
    vm.styleEl = document.createElement('style')
    document.querySelector('head').appendChild(vm.styleEl)

    vm.axios.get('http://localhost:83/getScssVars').then(function (responed) {
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
  methods: {
    changeScssVars () {
      const vm = this
      vm.axios.post('http://localhost:83/css', vm.scssVars).then(function (responed) {
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
    }
  },
  beforeDestroy () {
    document.querySelector('head').removeChild(this.styleEl)
  }
}
</script>
