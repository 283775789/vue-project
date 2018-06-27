<template>
  <div class="tw-project">
    <tw-design-header>
      <a>保存项目(B)</a>
      <a>保存为模板(M)</a>
      <a @click="newProjectModal.visible = true">项目设置()</a>
      <a @click="compsModal.visible = true">选择组件(C)</a>
      <a @click="newProjectModal.visible = true">全局样式(G)</a>
      <a @click="cancelNewProject">取消</a>
    </tw-design-header>

    <div class="tw-project-body">
      内容
    </div>

    <!-- 弹窗:项目属性 -->
    <tw-modal
      class="xnomask xhuge xproject"
      :visible.sync="newProjectModal.visible">
      <template slot="header">项目设置</template>
      <div slot="body">
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
                <div class="tw-title">通用</div>
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
                <el-select
                  v-model="project.developers"
                  multiple filterable
                  :popper-append-to-body = "false"
                  placeholder="请选择项目组成员，选择的第一个成员即为当前项目负责人...">
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
          </table>
        </form>

        <!-- 组件导航菜单 -->
        <!-- <tw-collapse-group class="tw-sidebar" v-if="compGroup" style="position:relative;">
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
        </tw-collapse-group> -->
        <!-- /组件导航菜单 -->

        <table
          class="tw-form xtable"
          v-for="(group, groupKey, groupIndex) in compGroup"
          :key="`comps${groupIndex}`">
          <tr>
            <td>
              <div class="tw-title">{{ groupKey }}</div>
            </td>
          </tr>
          <tr v-for="(type, typeKey, typeIndex) in group"
              :key="`comps${groupIndex}-${typeIndex}`">
              <td>
                <div class="tw-title xsub">{{ typeKey }}</div>
                <div>
                  <label
                    class="tw-optbox"
                    v-for="demo in type.demos"
                    :key="demo.tag">
                    <input
                      type="checkbox"
                      :value="demo.tag"
                      v-model="selectedComps"
                      @change="selectComps(demo.tag)" />
                      <span>{{demo.name}}</span>
                  </label>
                </div>
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
      </div>
      <template slot="footer">
        <a class="tw-btn xmain xlarge" @click="createProject">下一步</a>
        <a class="tw-btn xweaking xlarge" @click="newProjectModal.visible=false">取消</a>
      </template>
    </tw-modal>
    <!-- /弹窗:项目属性 -->
  </div>
</template>

<script>
import DesignHeader from '@/components/design-header'

export default {
  name: 'newProject',
  components: {
    'tw-design-header': DesignHeader
  },
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
      newProjectModal: {
        visible: true
      },
      compsModal: {
        visible: false
      },
      scssVars: [],
      compGroup: null,
      styleEl: null,
      currentComp: null,
      currentCompScssVar: [],
      demosVm: null,
      compOptions: [],
      selectedComps: []
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
    // 选择组件
    selectComps () {

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
    },
    // 新建工程
    createProject () {
      document.body.classList.add('xnew')
      this.newProjectModal.visible = false
    },
    // 取消新建工程
    cancelNewProject () {
      // undone: 需要提示
      this.$router.push('/project')
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

    vm.axios.get(`${this.host}/data/app/components.json`).then(function (responed) {
      vm.compGroup = responed.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  beforeDestroy () {
    document.body.classList.remove('xnew')
    document.querySelector('head').removeChild(this.styleEl)
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
