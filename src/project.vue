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
              <router-link class="js-delegate" to="/guid"><span>规范</span></router-link>
            </li>
            <li>
              <router-link to="/component"><span>组件</span></router-link>
            </li>
            <li>
              <router-link class="tw-popswitch xheader js-menu1" to="/project"><span>项目</span></router-link>
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
            <td class="tw-form-col"><input type="text" class="tw-input"></td>
            <td class="tw-form-col"><label class="tw-inputlabel">版本号:</label></td>
            <td class="tw-form-col"><input type="text" class="tw-input"></td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-inputlabel">项目组成员:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>

          <tr>
            <td colspan="4">
              <div class="tw-title">svn地址</div>
            </td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-inputlabel">高保真:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-inputlabel">源文件:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-inputlabel">前端Html:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-inputlabel">交付Html:</label></td>
            <td class="tw-form-col" colspan="3"><input type="text" class="tw-input"></td>
          </tr>

          <tr>
            <td colspan="4">
              <div class="tw-title">全局配置</div>
            </td>
          </tr>
          <tr class="tw-form-row">
            <td class="tw-form-col"><label class="tw-inputlabel">应用类型:</label></td>
            <td class="tw-form-col">
              <label class="tw-optbox xradio"><input type="radio" name="app-type" /><span>web端应用</span></label>
              <label class="tw-optbox xradio"><input type="radio" name="app-type" /><span>移动端应用</span></label>
            </td>
            <td class="tw-form-col"><label class="tw-inputlabel">底层JS框架:</label></td>
            <td class="tw-form-col">
              <label class="tw-optbox xradio"><input type="radio" name="app-framework" /><span>Vue(前后端分离)</span></label>
              <label class="tw-optbox xradio xdisabled"><input type="radio" name="app-framework" disabled /><span>jQuery(经典)</span></label>
            </td>
          </tr>

          <tr>
            <td colspan="4">
              <div class="tw-title">颜色体系</div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div class="tw-title xsub">主题色</div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div>
                <label class="tw-optbox xcheckbox"><input type="checkbox" /><span>更改滑过颜色</span></label>
                <label class="tw-optbox xcheckbox"><input type="checkbox" /><span>更改激活颜色</span></label>
              </div>
              <div class="tw-palette">
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['main']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">主色</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['main-hover']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">主色-滑过</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['main-active']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">主色-激活</div>
                </div>
                <div class="tw-block xlml">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['auxiliary']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">辅色</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['auxiliary-hover']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">辅色-滑过</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['auxiliary-active']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">辅色-激活</div>
                </div>
                <div class="tw-block xlml">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['weaking']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">弱化色</div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="4">
              <div class="tw-title xsub">文本色</div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div class="tw-palette">
                <div class="tw-block">
                  <div class="tw-block-body" title="$colorTextMain">
                    <el-color-picker class="tw-colorcell" v-model="color['text-main']"></el-color-picker>
                    <span>{{ color['text-main'] }}</span>
                  </div>
                  <div class="tw-block-title">主文本</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-auxiliary']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">铺文本</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-weaking']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">弱化文本</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-link']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">链接色</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-link-hover']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">链接滑过</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-disabled']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">禁用文本</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-highlight']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">高亮文本</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-error']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">错误文本</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-inverse']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">反色文本</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['text-placeholder']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">占位文本</div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="4">
              <div class="tw-title xsub">标识色</div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div class="tw-palette">
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['success']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">成功</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['warning']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">警告</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['error']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">错误</div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="4">
              <div class="tw-title xsub">背景色</div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div class="tw-palette">
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['bg-body']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">页面背景</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['bg-footer']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">页脚背景</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['bg-disabled']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">禁用背景</div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="4">
              <div class="tw-title xsub">边框色</div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div class="tw-palette">
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['border-main']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">主边框</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['border-auxiliary']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">铺边框</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['border-weaking']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">弱化边框</div>
                </div>
                <div class="tw-block">
                  <div class="tw-block-body">
                    <el-color-picker class="tw-colorcell" v-model="color['border-disabled']"></el-color-picker>
                  </div>
                  <div class="tw-block-title">禁用边框</div>
                </div>
              </div>
            </td>
          </tr>
        </table>
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
      scssVars: [
        {
          name: '颜色体系'
        },
        {
          name: '字体体系'
        },
        {
          name: '间距体系'
        },
        {
          name: '响应式体系'
        }
      ],
      color: {
        'main': null,
        'main-hover': null,
        'main-active': null,
        'auxiliary': null,
        'auxiliary-hover': null,
        'auxiliary-active': null,
        'weaking': null,
        'success': null,
        'warning': null,
        'error': null,
        'bg-body': null,
        'bg-footer': null,
        'bg-disabled': null,
        'text-main': null,
        'text-auxiliary': null,
        'text-weaking': null,
        'text-link': null,
        'text-link-hover': null,
        'text-disabled': null,
        'text-highlight': null,
        'text-error': null,
        'text-inverse': null,
        'text-placeholder': null,
        'border-main': null,
        'border-auxiliary': null,
        'border-weaking': null,
        'border-link': null,
        'border-disabled': null
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

    function rgb2Hex (color) {
      var rgb = color.split(',')
      var r = parseInt(rgb[0].split('(')[1])
      var g = parseInt(rgb[1])
      var b = parseInt(rgb[2].split(')')[0])

      var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
      return hex
    }

    const initThemeColor = function () {
      for (const color in vm.color) {
        div.setAttribute('class', 'tw-colorcell x' + color)
        vm.color[color] = rgb2Hex(window.getComputedStyle(div).backgroundColor)
      }
    }

    const timer = setInterval(() => {
      if (window.getComputedStyle(div).width === '3px') {
        clearInterval(timer)
        initThemeColor()
        document.body.removeChild(div)
      }
    }, 17)
  }
}
</script>
