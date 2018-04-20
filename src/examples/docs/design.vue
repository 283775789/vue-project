<template>
  <div>
    <h2>颜色体系</h2>
    <table>
      <thead>
        <tr>
          <th style="width:10%;">颜色集</th>
          <th style="width:20%;">概要</th>
          <th>成员</th>
          <th>应用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="5">主题色</td>
          <td rowspan="5">品牌定位,引导用户行为,分离主次关系等。</td>
          <td>主色</td>
          <td>主按钮背景、导航背景、主视觉单元</td>
        </tr>
        <tr>
          <td>辅色</td>
          <td>辅助按钮背景、次视觉单元</td>
        </tr>
        <tr>
          <td>弱化色</td>
          <td>弱化按钮背景、弱化视觉单元</td>
        </tr>
        <tr>
          <td>滑过色(自动计算)</td>
          <td>相关视觉单元鼠标滑过效果<br />计算公式:饱和度增加6%,亮度降低6%</td>
        </tr>
        <tr>
          <td>激活色(自动计算)</td>
          <td>相关视觉单元激活，选中效果<br />计算公式:饱和度增加10%,亮度降低10%</td>
        </tr>
        <tr>
          <td class="tw-scsstd" colspan="4">
            <div class="tw-title xsub">主题色-示例</div>
            <div class="tw-scssvar" v-for="(scssVar, index) in scssVars[1].children[0].children" :key="index" :title="scssVar.varName+':'+scssVar.value">
              <div class="tw-scssvar-body">
                <el-color-picker class="tw-colorcell" v-model="scssVar.value" @change="changeScssVars"></el-color-picker>
              </div>
              <div class="tw-scssvar-title">{{scssVar.name}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td rowspan="3">背景色</td>
          <td rowspan="3">划分区块或功能</td>
          <td>页面背景</td>
          <td>页面主体背景</td>
        </tr>
        <tr>
          <td>页脚背景</td>
          <td>页面底部版权信息区背景</td>
        </tr>
        <tr>
          <td>禁用背景</td>
          <td>按钮禁用，或表单控件禁用等</td>
        </tr>
        <tr>
          <td class="tw-scsstd" colspan="4">
            <div class="tw-title xsub">背景色-示例</div>
            <div class="tw-scssvar" v-for="(scssVar, index) in scssVars[1].children[1].children" :key="index" :title="scssVar.varName+':'+scssVar.value">
              <div class="tw-scssvar-body">
                <el-color-picker class="tw-colorcell" v-model="scssVar.value" @change="changeScssVars"></el-color-picker>
              </div>
              <div class="tw-scssvar-title">{{scssVar.name}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td rowspan="3">标识色</td>
          <td rowspan="3">提示操作级别，系统的感情色彩呈现。</td>
          <td>成功</td>
          <td>提示正常完成的反馈信息</td>
        </tr>
        <tr>
          <td>警告</td>
          <td>提示不可恢复或有风险的信息</td>
        </tr>
        <tr>
          <td>错误</td>
          <td>提示异常信息</td>
        </tr>
        <tr>
          <td class="tw-scsstd" colspan="4">
            <div class="tw-title xsub">标识色-示例</div>
            <div class="tw-scssvar" v-for="(scssVar, index) in scssVars[1].children[2].children" :key="index" :title="scssVar.varName+':'+scssVar.value">
              <div class="tw-scssvar-body">
                <el-color-picker class="tw-colorcell" v-model="scssVar.value" @change="changeScssVars"></el-color-picker>
              </div>
              <div class="tw-scssvar-title">{{scssVar.name}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td rowspan="8">文本色</td>
          <td rowspan="8">让用户快速识别关键信息，区分信息层级</td>
          <td>主文本色</td>
          <td>一般为系统的默认字体颜色,主要内容</td>
        </tr>
        <tr>
          <td>辅助文本</td>
          <td>次要信息</td>
        </tr>
        <tr>
          <td>弱化文本</td>
          <td>突显主文本，表达参考信息</td>
        </tr>
        <tr>
          <td>禁用文本</td>
          <td>用于禁用按钮等</td>
        </tr>
        <tr>
          <td>高亮文本</td>
          <td>要求识别度最高的关键信息</td>
        </tr>
        <tr>
          <td>错误文本</td>
          <td>表单错误提示等</td>
        </tr>
        <tr>
          <td>链接色</td>
          <td>用于链接，标签等</td>
        </tr>
        <tr>
          <td>占位文本</td>
          <td>表单占位提示信息</td>
        </tr>
        <tr>
          <td class="tw-scsstd" colspan="4">
            <div class="tw-title xsub">文本色-示例</div>
            <div class="tw-scssvar" v-for="(scssVar, index) in scssVars[1].children[3].children" :key="index" :title="scssVar.varName+':'+scssVar.value">
              <div class="tw-scssvar-body">
                <el-color-picker class="tw-colorcell" v-model="scssVar.value" @change="changeScssVars"></el-color-picker>
              </div>
              <div class="tw-scssvar-title">{{scssVar.name}}</div>
            </div>
          </td>
        </tr>
        <tr>
          <td rowspan="3">边框色</td>
          <td rowspan="3">模块划分, 降低用户学习成本</td>
          <td>主边框</td>
          <td>不同模块区分</td>
        </tr>
        <tr>
          <td>辅边框</td>
          <td>同模块内容区分</td>
        </tr>
        <tr>
          <td>禁用边框</td>
          <td>用于特定的禁用元素</td>
        </tr>
        <tr>
          <td class="tw-scsstd" colspan="4">
            <div class="tw-title xsub">边框色-示例</div>
            <div class="tw-scssvar" v-for="(scssVar, index) in scssVars[1].children[4].children" :key="index" :title="scssVar.varName+':'+scssVar.value">
              <div class="tw-scssvar-body">
                <el-color-picker class="tw-colorcell" v-model="scssVar.value" @change="changeScssVars"></el-color-picker>
              </div>
              <div class="tw-scssvar-title">{{scssVar.name}}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'designGuid',
    data () {
      return {
        scssVars: [],
        styleEl: ''
      }
    },
    methods: {
      changeScssVars () {
        const vm = this
        vm.axios.post('http://localhost:83/css', vm.scssVars).then(function (responed) {
          vm.styleEl.textContent = responed.data
        }).catch(function (error) {
          console.log(error)
        })
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
    }
  }
</script>
