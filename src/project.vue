<template>
  <div id="app">
    <div class="tw-header">
      <div class="tw-header-inner">
        <h1 class="tw-header-left">
          <router-link to="/">
            <img src="@images/logo.png">
          </router-link>
        </h1>
        <div class="tw-header-body">
          <ul class="tw-nav xheader xhorizontal">
            <li>
              <router-link class="xactive" to="/intro"><span>概要</span></router-link>
            </li>
            <li>
              <router-link class="js-delegate" to="/guid"></i><span>规范</span></router-link>
            </li>
            <li>
              <router-link to="/component"><span>组件</span></router-link>
            </li>
            <li>
              <router-link class="tw-popswitch xheader js-menu1" to="/project"></i><span>项目</span></router-link>
              <tw-poppane class="js-position" switch=".js-menu1">
                <ul class="tw-header-menu">
                    <li><a>新项目</a></li>
                    <li><a>项目库</a></li>
                </ul>
              </tw-poppane>
            </li>
            <li>
            </li>
          </ul>
        </div>
        <div class="tw-header-right">
          <a class="tw-popswitch xheader xcenter js-rightmenu">右侧内容</a>
          <tw-poppane switch=".js-rightmenu">
            <ul class="tw-header-menu">
              <li><a>菜单项1菜单项1</a></li>
              <li><a>菜单项2</a></li>
              <li><a>菜单项3</a></li>
            </ul>
          </tw-poppane>
        </div>
      </div>
    </div>

    <div class="tw-body">
      <form>
        <div class="tw-title">项目属性</div>
        <table class="tw-form xtable">
          <tr class="tw-form-row">
            <td class="tw-form-col" style="width:7em;"><label class="tw-ctrlabel">项目名称:</label></td>
            <td class="tw-form-col"><input type="text" class="tw-input"></td>
            <td class="tw-form-col" style="width:8em;"><label class="tw-ctrlabel">版本号:</label></td>
            <td class="tw-form-col"><input type="text" class="tw-input"></td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-ctrlabel">前端SVN地址:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-ctrlabel">交付SVN地址:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-ctrlabel">项目组成员:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>
        </table>

        <div class="tw-title">全局配置</div>
        <table class="tw-form xtable">
          <tr class="tw-form-row">
            <td class="tw-form-col" style="width:7em;"><label class="tw-ctrlabel">应用类型:</label></td>
            <td class="tw-form-col">
              <label class="tw-optbox xradio"><input type="radio" name="app-type" /><span>web端应用</span></label>
              <label class="tw-optbox xradio"><input type="radio" name="app-type" /><span>移动端应用</span></label>
            </td>
            <td class="tw-form-col" style="width:8em;"><label class="tw-ctrlabel">底层JS框架:</label></td>
            <td class="tw-form-col">
              <label class="tw-optbox xradio"><input type="radio" name="app-framework" /><span>Vue(前后端分离)</span></label>
              <label class="tw-optbox xradio xdisabled"><input type="radio" name="app-framework" disabled /><span>jQuery(经典)</span></label>
            </td>
          </tr>
        </table>
        <div class="tw-title">颜色体系</div>
        <div class="tw-palette">
          <div class="tw-block">
            <div class="tw-block-body">
              <el-color-picker class="tw-colorcell" v-model="theme.main"></el-color-picker>
            </div>
            <div class="tw-block-title">主色</div>
          </div>
          <div class="tw-block">
            <div class="tw-block-body">
              <el-color-picker class="tw-colorcell" v-model="theme.mainHover"></el-color-picker>
            </div>
            <div class="tw-block-title">主色-滑过</div>
          </div>
          <div class="tw-block">
            <div class="tw-block-body">
              <el-color-picker class="tw-colorcell" v-model="theme.mainActive"></el-color-picker>
            </div>
            <div class="tw-block-title">主色-激活</div>
          </div>
          <div class="tw-block xlml">
            <div class="tw-block-body">
              <el-color-picker class="tw-colorcell" v-model="theme.auxiliary"></el-color-picker>
            </div>
            <div class="tw-block-title">辅色</div>
          </div>
          <div class="tw-block">
            <div class="tw-block-body">
              <el-color-picker class="tw-colorcell" v-model="theme.auxiliaryHover"></el-color-picker>
            </div>
            <div class="tw-block-title">辅色-滑过</div>
          </div>
          <div class="tw-block">
            <div class="tw-block-body">
              <el-color-picker class="tw-colorcell" v-model="theme.auxiliaryActive"></el-color-picker>
            </div>
            <div class="tw-block-title">辅色-激活</div>
          </div>
          <div class="tw-block xlml">
            <div class="tw-block-body">
              <el-color-picker class="tw-colorcell" v-model="theme.weaking"></el-color-picker>
            </div>
            <div class="tw-block-title">弱化色</div>
          </div>
        </div>
      </form>
    </div>
    <tw-footer @click.native.stop="demoMethod"></tw-footer>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      theme: {
        main: null,
        mainHover: null,
        mainActive: null,
        auxiliary: null,
        auxiliaryHover: null,
        auxiliaryActive: null,
        weaking: null
      },
      members: [
        {
          value: '001',
          text: '陈今斌',
          className: 'abc'
        },
        {
          value: '002',
          text: '荣珍'
        },
        {
          value: '003',
          text: '陈知然'
        }
      ],
      classDemo: ''
    }
  },
  methods: {
    changeHandler (value) {
      console.log(value)
    },
    demoMethod () {
      console.log('The method is called.')
    },
    testmethod () {
      window.test = this.$refs.test
      window.test.classList.add('xstart')
    }
  },
  created () {
    window.members = this.members
  },
  mounted () {
    window.vm = this
    const vm = this
    const div = document.createElement('div')
    div.setAttribute('class', 'u-styledone')
    document.body.appendChild(div)

    const initThemeColor = function () {
      for (const color in vm.theme) {
        div.setAttribute('class', 'tw-colorcell x' + color)
        console.log(window.getComputedStyle(div).backgroundColor)
        vm.theme[color] = window.getComputedStyle(div).backgroundColor
      }
    }

    const timer = setInterval(() => {
      console.log(window.getComputedStyle(div).width)
      if (window.getComputedStyle(div).width === '3px') {
        clearInterval(timer)
        initThemeColor()
        document.body.removeChild(div)
      }
    }, 17)
  }
}
</script>

