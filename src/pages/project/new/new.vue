<template>
  <div class="tw-project">
    <tw-design-header>
      <a>保存项目(S)</a>
      <a>生成项目(B)</a>
      <a>保存为模板(T)</a>
      <a href="#" @click="newProjectModal.visible = true && (newStep = 1)">项目设置(I)</a>
      <a @click="newProjectModal.visible = true && (newStep = 2)">选择组件(C)</a>
      <a @click="newProjectModal.visible = true && (newStep = 3)">全局样式(G)</a>
      <a @click="cancelNewProject">取消</a>
    </tw-design-header>

    <div class="tw-projetc-body">
      <div id="design-canvas">
        内容
      </div>
    </div>

    <!-- 弹窗:新建项目 -->
    <tw-modal
      class="xhuge xproject"
      :visible.sync="newProjectModal.visible"
      :style="{display: newProjectModal.hide ? 'none': ''}">
      <template slot="header">新建 - {{ newStep === 1 ? '设置项目属性' :  newStep === 2 ? '选择组件' : '设置全局样式' }}</template>
      <div class="tw-project-props" slot="body">
        <form>
          <!-- 项目属性 -->
          <table class="tw-form xtable" v-if="newStep === 1">
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
          <!-- /项目属性 -->

          <!-- 选择控件 -->
          <table
            v-else-if = "newStep === 2"
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
                      v-if="typeKey === '整体布局'"
                      class="tw-optbox"
                      v-for="demo in type.demos"
                      :key="demo.tag">
                      <input
                        type="radio"
                        :value="demo.tag"
                        v-model="selectedLayout"
                        @change="selectLayout(demo.tag)" />
                        <span>{{demo.name}}</span>
                    </label>
                    <label
                      v-if="typeKey !== '整体布局'"
                      class="tw-optbox"
                      v-for="demo in type.demos"
                      :key="demo.tag">
                      <input
                        type="checkbox"
                        :value="`${demo.tag}|${typeKey}`"
                        v-model="selectedComps"
                        @change="selectComps" />
                        <span>{{demo.name}}</span>
                    </label>
                  </div>
                </td>
            </tr>
          </table>
          <!-- /选择控件 -->

          <!-- 全局样式 -->
          <template v-else>
            <table class="tw-form xtable" v-for="(scssModule, index) in scssVars" v-if="scssModule.name !== '组件变量'" :key="index">
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
                      <div v-if="!scssVar.values"
                        class="tw-scssvar-body"
                        :class="{xauto: scssVar.value.indexOf('$') !== -1}">
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
                          <div class="tw-scssvar-body"
                               :class="{xauto: scssVar.value.indexOf('$') !== -1}">
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
                        <el-color-picker
                          class="tw-colorcell"
                          :class="{xauto: scssVar.value.indexOf('$') !== -1}"
                          v-model="scssVar.value"
                          show-alpha @change="changeScssVars">
                        </el-color-picker>
                      </div>
                      <div class="tw-scssvar-title">{{scssVar.name}}</div>
                    </div>
                    <a class="tw-addbtn xscssvar" v-if="scssGroup.addable"></a>
                  </div>
                  <!-- /颜色相关变量 -->
                </td>
              </tr>
            </table>
          </template>
          <!-- /全局样式 -->
        </form>
      </div>
      <template slot="footer">
        <a class="tw-btn xmain xlarge" v-if="newStep > 1" @click="newStep -= 1">上一步</a>
        <a class="tw-btn xmain xlarge" v-if="newStep < 3" @click="newStep += 1">下一步</a>
        <a class="tw-btn xsecondary xlarge" @click="createProject">确定</a>
        <a class="tw-btn xweaking xlarge" @click="newProjectModal.visible = false">取消</a>
      </template>
    </tw-modal>
    <!-- /弹窗:新建项目 -->

    <div class="tw-stylebox"
      :class="{xopen: rightSideBar.visible}">
      <ul class="tw-tabs xcard xstyle">
        <li class="xopen"><a>{{ currentCompScssVar.name }}样式设置</a></li>
        <li class="flex-fill"></li>
      </ul>
      <div class="tw-stylebox-inner tw-project-props">
        <div class="tw-form xtable xsmall">
          <div class="tw-form-row" v-for="(compScss, index) in currentCompScssVar.children" :key="index" :title="compScss.varName">
            <div class="tw-form-col" style="width:10em;"><label class="tw-inputlabel xsmall">{{ compScss.name }}:</label></div>

            <div class="tw-form-col">
              <input v-if="typeof compScss.options === 'undefined'"
                    class="tw-input xsmall"
                    type="text"
                    v-model="compScss.value"
                    @change="changeScssVars">

              <tw-select-group
                :ref = 'compScss.name'
                v-else
                v-model="compScss.value"
                id="compScss.options[0].type"
                :class="{xcolor: compScss.options[0].type === 'custom'}"
                :group="{nameKey:'name', itemsKey: 'children'}"
                :items="compScss.options"
                valueKey="varName"
                textKey="name"
                inputClass="xsmall"
                @change="changeScssVars">
                <span slot-scope="item">
                  <el-color-picker
                    class="pt-tiny"
                    v-if="item.varName === '自定义'"
                    show-alpha
                    popper-class="tw-popcolor"
                    v-model="compScss.value"
                    @change="setttingStyleColor(item, compScss)">
                  </el-color-picker>
                  <template v-else>
                    {{ item.name }}
                    <i class="tw-colorcell xdemo"
                      :class="{xauto: item.value.indexOf('$') !== -1}"
                      :style="{backgroundColor:item.value}"></i>
                  </template>
                </span>
              </tw-select-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
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
        visible: true,
        hide: false
      },
      compsModal: {
        visible: false
      },
      rightSideBar: {
        visible: false
      },
      scssVars: [],
      compGroup: null,
      styleEl: null,
      currentComp: null,
      currentCompScssVar: [],
      demosVm: null,
      selectedLayout: '',
      selectedComps: [],
      newStep: 1,
      canvasVm: null,
      compsRoot: null
    }
  },
  computed: {
    compScssVars () {
      let result = null

      this.scssVars.forEach(module => {
        if (module.name === '组件变量') {
          module.children.forEach(comp => {
            comp.children.forEach(scssVar => {
              if (!scssVar.originalValue) scssVar.originalValue = scssVar.value
            })
          })

          result = module
        }
      })

      return result
    }
  },
  filters: {
    autoComputedValue (value) {
      if (value.indexOf('$') === -1) {
        return value
      } else {
        return '自动'
      }
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
    // 选择布局
    selectLayout (tag) {
      document.body.style.backgroundColor = ''
      document.documentElement.style.backgroundColor = ''

      if (this.canvasVm) this.canvasVm.$destroy()

      this.canvasVm = new Vue({
        el: '#design-canvas',
        render (h) {
          return h(tag, {attrs: {id: 'design-canvas', class: ''}})
        }
      })
    },
    // 选择组件
    selectComps () {
      // undone 需提示未选择布局前...
      if (this.compsRoot) this.compsRoot.$destroy()
      if (!document.getElementById('comps-root')) return

      const vm = this
      this.compsRoot = new Vue({
        el: '#comps-root',
        render (h) {
          const tagVnodes = []

          vm.selectedComps.forEach(comp => {
            comp = comp.split('|')

            tagVnodes.push(h(comp[0], {nativeOn: {
              dblclick (e) {
                vm.showDesignInterface()
                vm.setComponentStyle(comp[1])
              }
            }}))
            tagVnodes.push(h('hr', {class: 'tw-project-hr'}))
          })

          return h('div', {attrs: {id: 'comps-root'}}, [tagVnodes])
        }
      })
    },
    // 设置组件样式
    setComponentStyle (type) {
      // 获取组件scss变量
      const vm = this
      vm.currentCompScssVar = []
      vm.compScssVars.children.forEach(compVars => {
        if (compVars.name === type) {
          compVars.children.forEach(compVar => {
            compVar.options = vm.createCompVarMap(compVar.originalValue)
          })

          vm.currentCompScssVar = compVars
        }
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

          return h('div', {attrs: {id: 'comps', class: 'tw-project-content'}}, [demoVnodes])
        }
      })
    },
    // 通过变量名查找scssVars所在的组与模块
    createCompVarMap (varName) {
      const modules = this.scssVars
      let options = []

      for (let i = 0; i < modules.length; i++) {
        if (modules[i].name !== '组件变量') {
          const groups = modules[i].children
          for (let j = 0; j < groups.length; j++) {
            const scssVars = groups[j].children
            for (let n = 0; n < scssVars.length; n++) {
              if (scssVars[n].varName === varName) {
                options = options.concat(groups[j]).concat(groups.filter(group => group !== groups[j] && group.type !== 'NoChange'))

                if (groups[j].type === 'Color') {
                  options.unshift({
                    addable: true,
                    name: '自定义',
                    type: 'custom',
                    children: [{
                      name: '自定义',
                      value: '自定义',
                      varName: '自定义'
                    }]
                  })
                }

                return options
              }
            }
          }
        }
      }
    },
    setttingStyleColor (item, compScss) {
      this.$nextTick(() => {
        item.value = compScss.value
        this.changeScssVars()
      })
    },
    // 隐藏新建弹窗
    hideNewProjectModal (e) {
      if (e.altKey && this.newProjectModal.visible) {
        this.newProjectModal.hide = true
      }
    },
    // 显示新建弹窗
    showNewProjectModal (e) {
      if (e.key === 'Alt' && this.newProjectModal.visible) {
        this.newProjectModal.hide = false
      } else if (e.key === 'Tab') {
        // 只单独切换右侧样式设置面板
        if (this.rightSideBar.visible) {
          this.rightSideBar.visible = false
        } else {
          this.showDesignInterface()
        }
      }
    },
    // 显示设计器界面
    showDesignInterface () {
      document.documentElement.classList.remove('xfull')
      this.rightSideBar.visible = true
    },
    // 隐藏显示设计器界面
    hideDesignInterface () {
      document.documentElement.classList.add('xfull')
      this.rightSideBar.visible = false
    },
    // 切换侧边栏显示
    keyFHandler (e) {
      if (e.key === 'f') {
        if (this.rightSideBar.visible) {
          this.hideDesignInterface()
        } else {
          this.showDesignInterface()
        }
      }
    },
    // 获取项目开发成员
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
  mounted () {
    document.body.classList.add('xnew')
    document.documentElement.classList.add('xnew')
    document.addEventListener('keydown', this.hideNewProjectModal)
    document.addEventListener('keyup', this.showNewProjectModal)
    document.addEventListener('keypress', this.keyFHandler)
  },
  beforeDestroy () {
    document.body.classList.remove('xnew')
    document.documentElement.classList.remove('xnew')
    document.querySelector('head').removeChild(this.styleEl)
  }
}
</script>

<style lang="scss">
  @import "./new.scss";
</style>
