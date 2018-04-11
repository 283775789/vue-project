<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>颜色集</th>
          <th>概要</th>
          <th>成员</th>
          <th>应用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="5">主题色</td>
          <td rowspan="5">视觉呈现</td>
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
