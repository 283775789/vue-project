<template>
  <form>
    <table class="tw-form xtable">
      <colgroup>
        <col style="width:6em;" />
        <col />
        <col style="width:8em;" />
        <col />
      </colgroup>

      <tr>
        <td colspan="4">
          <div class="tw-title">项目属性</div>
        </td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">项目名称:</label></td>
        <td class="tw-form-col"><input v-model="project.name" type="text" class="tw-input"></td>
        <td class="tw-form-col"><label class="tw-inputlabel">版本号:</label></td>
        <td class="tw-form-col"><input v-model="project.version" type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">项目组成员:</label></td>
        <td class="tw-form-col" colspan="3">
          <el-select v-model="project.developers" multiple filterable placeholder="请选择项目组成员，选择的第一个成员即为当前项目负责人...">
            <el-option
              v-for="(developer,index) in developers"
              :key="index"
              :label="developer.name"
              :value="`${developer.name}<${developer.email}>`">
            </el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="tw-title">
            <div class="tw-title-left">svn地址</div>
            <a target="bottom" class="tw-title-right text-link">查看svn目录</a>
          </div>
        </td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">高保真:</label></td>
        <td class="tw-form-col" colspan="3"><input v-model="project.svn.designImage" type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">源文件:</label></td>
        <td class="tw-form-col" colspan="3"><input v-model="project.svn.designFile" type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">前端Html:</label></td>
        <td class="tw-form-col" colspan="3"><input v-model="project.svn.html" type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">交付Html:</label></td>
        <td class="tw-form-col" colspan="3"><input v-model="project.svn.publish" type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">过程文件:</label></td>
        <td class="tw-form-col" colspan="3"><input v-model="project.svn.flow" type="text" class="tw-input"></td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="tw-title">项目文档地址</div>
        </td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">需求文档:</label></td>
        <td class="tw-form-col" colspan="3"><input v-model="project.document.prd" type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">接口地址:</label></td>
        <td class="tw-form-col" colspan="3"><input v-model="project.document.api" type="text" class="tw-input"></td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="tw-title">底层JS框架</div>
        </td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-inputlabel">底层JS框架:</label></td>
        <td class="tw-form-col" colspan="3">
          <label class="tw-optbox xradio"><input v-model="project.framwork" type="radio" name="app-framework" value="vue" /><span>Vue(前后端分离)</span></label>
          <label class="tw-optbox xradio xdisabled"><input v-model="project.framwork" type="radio" name="app-framework" value="jquery" disabled /><span>jQuery(经典)</span></label>
        </td>
      </tr>
    </table>
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

            <!-- 组件相关变量 -->
            <!-- <div class="tw-form xtable" v-if="/tw-/.test(scssGroup.type)">
              <div class="tw-form-row" v-for="(scssVar, index) in scssGroup.children" :key="index" :title="scssVar.varName">
                <div class="tw-form-col" style="width:10em;"><label class="tw-inputlabel">{{ scssVar.name }}:</label></div>
                <div class="tw-form-col"><input type="text" class="tw-input" v-model="scssVar.value" @change="changeScssVars"></div>
              </div>
            </div> -->
            <!-- /组件相关变量 -->
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

    <div class="tw-title" style="margin-bottom:0;">组件</div>
    <div class="tw-multicol">
      <div class="tw-multicol-left">
        <!-- 组件导航菜单 -->
        <tw-collapse-group class="tw-sidebar" v-if="compGroup" style="position:relative;">
          <ul class="tw-nav xsidebar tw-stickybox" style="min-height:600px;">
            <li v-for="(group, groupKey, groupIndex) in compGroup" :key="groupIndex">
              <a :class="['js-group-'+groupIndex]"><i class="tw-font xico"></i>{{ groupKey }}<i class="tw-arrow xright"></i></a>
              <tw-collapse class="xsidebar" :switch="'.js-group-'+groupIndex">
                <ul class="tw-nav xsidebar">
                  <li v-for="(type, typeKey, index) in group" :key="index" @click="clickCompType(type)"><a>{{ typeKey }}</a></li>
                </ul>
              </tw-collapse>
            </li>
          </ul>
        </tw-collapse-group>
        <!-- /组件导航菜单 -->
      </div>
      <!-- <div class="tw-multicol-cell">
        <div class="tw-multicol-cell-table">
          <div class="tw-multicol-cell-cell tw-stickybox">
            <div class="tw-compscssdemo">
              <div id="demos"></div>
                <div class="tw-compscssdemo-setbar">
                  <div class="tw-title xsub">{{ currentCompScssVar.name }}样式设置</div>
                  <div class="tw-form xtable xsmall">
                    <div class="tw-form-row" v-for="(scssVar, index) in currentCompScssVar.children" :key="index" :title="scssVar.varName">
                      <div class="tw-form-col" style="width:10em;"><label class="tw-inputlabel xsmall">{{ scssVar.name }}:</label></div>
                      <div class="tw-form-col">
                        <input v-if="typeof compOptions[index] === 'undefined'" type="text" class="tw-input xsmall" v-model="scssVar.value" @change="changeScssVars">
                        <tw-select-group v-else v-model="scssVar.value" :group="{nameKey:'name', itemsKey: 'children'}" :items="compOptions[index]" valueKey="varName" textKey="name" inputClass="xsmall" @change="changeScssVars">
                          <span slot-scope="item">{{ item.name }}<i class="tw-colorcell xdemo" :style="{backgroundColor:item.value}"></i></span>
                        </tw-select-group>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="tw-stickybox-footer" v-tw-sticky:bottom="80">
      <a class="tw-btn xmain xlarge">生成项目</a>
      <a class="tw-btn xsecondary xlarge">选择模板</a>
      <a class="tw-btn xsecondary xlarge">保存为模板</a>
      <a class="tw-btn xweaking xlarge">取消</a>
    </div>
  </form>
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
  beforeDestroy () {
    document.querySelector('head').removeChild(this.styleEl)
  }
}
</script>
