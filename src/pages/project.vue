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
        <td class="tw-form-col"><label class="tw-ctrlabel">项目名称:</label></td>
        <td class="tw-form-col"><input type="text" class="tw-input"></td>
        <td class="tw-form-col"><label class="tw-ctrlabel">版本号:</label></td>
        <td class="tw-form-col"><input type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-ctrlabel">项目组成员:</label></td>
        <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="tw-title">svn地址</div>
        </td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-ctrlabel">高保真:</label></td>
        <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-ctrlabel">源文件:</label></td>
        <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-ctrlabel">前端Html:</label></td>
        <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-ctrlabel">交付Html:</label></td>
        <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
      </tr>

      <tr>
        <td colspan="4">
          <div class="tw-title">底层JS框架</div>
        </td>
      </tr>
      <tr class="tw-form-row">
        <td class="tw-form-col"><label class="tw-ctrlabel">底层JS框架:</label></td>
        <td class="tw-form-col" colspan="3">
          <label class="tw-optbox xradio"><input type="radio" name="app-framework" /><span>Vue(前后端分离)</span></label>
          <label class="tw-optbox xradio xdisabled"><input type="radio" name="app-framework" disabled /><span>jQuery(经典)</span></label>
        </td>
      </tr>
    </table>
    <table class="tw-form xtable" v-for="(scssModule, index) in scssVars" :key="index">
      <tr>
        <td colspan="4">
          <div class="tw-title">{{ scssModule.name }}</div>
        </td>
      </tr>
      <tr v-for="(scssGroup, index) in scssModule.children" :key="index">
        <td colspan="4">
          <div class="tw-title xsub">{{ scssGroup.name }}</div>
          <!-- 非颜色模板渲染 -->
          <div v-if="scssGroup.type !== 'Color'">
            <div class="tw-scssvar" v-for="(scssVar, index) in scssGroup.children" v-if="scssGroup.type !== 'Spacing'" :key="index" :title="scssVar.varName">
              <div v-if="!scssVar.values" class="tw-scssvar-body">
                <input v-if="scssGroup.type === 'String'" type="text" class="tw-scssvar-value" v-model="scssVar.value" />
                <input v-if="scssGroup.type === 'FontSize'" :style="{fontSize:parseInt(scssVar.value)<10?'10px':scssVar.value}" type="text" class="tw-scssvar-value" v-model="scssVar.value" />
              </div>
              <div v-if="!scssVar.values" class="tw-scssvar-title">{{scssVar.name}}</div>
              <div v-if="scssVar.values">
                <label class="tw-optbox xradio" v-for="(item, index) in scssVar.values" :key="index"><input type="radio" :value="item.replace(/.*:/,'')" v-model="scssVar.value"  /><span>{{ item.replace(/:.*/,'') }}</span></label>
              </div>
            </div>
            <a class="tw-addbtn xscssvar" v-if="scssGroup.addable && scssGroup.type === 'FontSize'"></a>
            <!-- 间距模板渲染 -->
            <div v-if="scssGroup.type === 'Spacing'">
              <div class="tw-scssvar" v-for="(scssVar, index) in scssGroup.children" :key="index" :title="scssVar.varName" :style="{marginLeft:index === 0 ? 0 : scssVar.value}">
                  <div class="tw-scssvar-body">
                    <input type="text" class="tw-scssvar-value" v-model="scssVar.value" />
                  </div>
                  <div class="tw-scssvar-title">{{scssVar.name}}</div>
              </div>
              <a class="tw-addbtn xscssvar" v-if="scssGroup.addable"></a>
            </div>
            <!-- 间距模板渲染 -->
          </div>
          <!-- /非颜色模板渲染 -->

          <!-- 颜色模板渲染 -->
          <div class="tw-palette" v-if="scssGroup.type === 'Color'">
            <div class="tw-scssvar" v-for="(scssVar, index) in scssGroup.children" :key="index" :title="scssVar.varName+':'+scssVar.value">
              <div class="tw-scssvar-body">
                <el-color-picker class="tw-colorcell" v-model="scssVar.value"></el-color-picker>
              </div>
              <div class="tw-scssvar-title">{{scssVar.name}}</div>
            </div>
            <a class="tw-addbtn xscssvar" v-if="scssGroup.addable"></a>
          </div>
          <!-- /颜色模板渲染 -->
        </td>
      </tr>
    </table>
    <div style="padding:15px 0 0; border-top:1px solid #ccc; text-align:center;">
      <a class="tw-btn xmain xlarge">生成项目</a>
      <a class="tw-btn xauxiliary xlarge">保存为模板</a>
      <a class="tw-btn xweaking xlarge">取消</a>
    </div>
  </form>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      scssVars: []
    }
  },
  created () {
    const vm = this

    vm.axios('http://localhost:83/getScssVars').then(function (responed) {
      vm.scssVars = responed.data
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>
