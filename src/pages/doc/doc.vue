<template>
  <div class="tw-multicol">
    <div class="tw-multicol-left">
      <!-- 规范导航菜单 -->
      <tw-collapse-group
        v-if="$route.params.type==='guid'"
        class="tw-sidebar"
        key="guid-nav">
        <ul class="tw-nav xsidebar">
          <li>
            <a class="js-fe"><i class="tw-font2 xico"></i>前端体系<i class="tw-arrow xright"></i></a>
            <tw-collapse
              class="xsidebar"
              switch=".js-fe"
              :default-open="[
                '/doc/guid/role',
                '/doc/guid/framwork',
                '/doc/guid/dev-flow',
                '/doc/guid/ide',
                '/doc/guid/shortcut'
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/guid/framwork">技术框架</router-link></li>
                <li><router-link to="/doc/guid/dev-flow">开发流程</router-link></li>
                <li><router-link to="/doc/guid/ide">编辑器</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-code"><i class="tw-font2 xico"></i>代码规范<i class="tw-arrow xright"></i></a>
            <tw-collapse
              class="xsidebar"
              switch=".js-code"
              :default-open="[
                '/doc/guid/version',
                '/doc/guid/dir',
                '/doc/guid/js',
                '/doc/guid/css',
                '/doc/guid/html'
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/guid/version">版本管理</router-link></li>
                <li><router-link to="/doc/guid/dir">目录及文件</router-link></li>
                <li><router-link to="/doc/guid/project">项目规范</router-link></li>
                <li><router-link to="/doc/guid/i18n">国际化规范</router-link></li>
                <li><router-link to="/doc/guid/api">api规范</router-link></li>
                <li><router-link to="/doc/guid/js">JS规范</router-link></li>
                <li><router-link to="/doc/guid/css">CSS规范</router-link></li>
                <li><router-link to="/doc/guid/html">HTML规范</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li><router-link to="/doc/guid/design" class="jst-close"><i class="tw-font2 xico"></i>设计规范</router-link></li>
        </ul>
      </tw-collapse-group>
      <!-- /规范导航菜单 -->

      <!-- 组件导航菜单 -->
      <tw-collapse-group
        v-if="$route.params.type==='comps' || $route.params.type==='css' || $route.params.type==='directives'"
        class="tw-sidebar"
        key="comps-nav">
        <ul class="tw-nav xsidebar">
          <li>
            <a class="js-scss">
              <i class="tw-font2 xico"></i>
              <span>功能样式</span>
              <i class="tw-arrow xright"></i>
            </a>
            <tw-collapse
              class="xsidebar"
              switch=".js-scss"
              :default-open="[
                '/doc/css/mixins',
                '/doc/css/display',
                '/doc/css/flex',
                '/doc/css/float',
                '/doc/css/text',
                '/doc/css/spacing',
                '/doc/css/border'
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/css/mixins">mixins</router-link></li>
                <li><router-link to="/doc/css/display">盒子模型</router-link></li>
                <li><router-link to="/doc/css/flex">弹性盒子</router-link></li>
                <li><router-link to="/doc/css/float">浮动</router-link></li>
                <li><router-link to="/doc/css/text">文本颜色</router-link></li>
                <li><router-link to="/doc/css/spacing">间距尺寸</router-link></li>
                <li><router-link to="/doc/css/border">边框和背景</router-link></li>
                <li><router-link to="/doc/css/common">公用样式</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-layout">
              <i class="tw-font2 xico"></i>
              <span>布局及导航</span>
              <i class="tw-arrow xright"></i>
            </a>
            <tw-collapse
              class="xsidebar"
              switch=".js-layout"
              :default-open="[
                '/doc/guid/role',
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/css/header">头部</router-link></li>
                <li><router-link to="/doc/css/nav-lv2">二级导航</router-link></li>
                <li><router-link to="/doc/css/sidebar">侧边栏</router-link></li>
                <li><router-link to="/doc/css/body">主体内容区</router-link></li>
                <li><router-link to="/doc/css/widget">工具类容器</router-link></li>
                <li><router-link to="/doc/css/grid">栅格系统</router-link></li>
                <li><router-link to="/doc/css/crumbs">面包屑</router-link></li>
                <li><router-link to="/doc/css/tabs">tab选项卡</router-link></li>
                <li><router-link to="/doc/css/floater">侧边浮动</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-style">
              <i class="tw-font2 xico"></i>
              <span>样式模块</span>
              <i class="tw-arrow xright"></i>
            </a>
            <tw-collapse
              class="xsidebar"
              switch=".js-style"
              :default-open="[
                '/doc/css/title',
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/css/title">标题</router-link></li>
                <li><router-link to="/doc/css/titem">标题项</router-link></li>
                <li><router-link to="/doc/css/steps">步骤条</router-link></li>
                <li><router-link to="/doc/css/infoitem">信息项</router-link></li>
                <li><router-link to="/doc/css/images">图片组</router-link></li>
                <li><router-link to="/doc/css/htoggle">hover切换</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-unit">
              <i class="tw-font2 xico"></i>
              <span>元件</span>
              <i class="tw-arrow xright"></i>
            </a>
            <tw-collapse
              class="xsidebar"
              switch=".js-unit"
              :default-open="[
                '',
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/css/fonts">图标</router-link></li>
                <li><router-link to="/doc/css/button">按钮</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-function">
              <i class="tw-font2 xico"></i>
              <span>功能</span>
              <i class="tw-arrow xright"></i>
            </a>
            <tw-collapse
              class="xsidebar"
              switch=".js-function"
              :default-open="[
                '/doc/comps/modal',
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/comps/poppane">下拉列表</router-link></li>
                <li><router-link to="/doc/comps/collapse">折叠面板</router-link></li>
                <li><router-link to="/doc/directives/lift">电梯式锚点</router-link></li>
                <li><router-link to="/doc/directives/fix">fix固定显示区域</router-link></li>
                <li><router-link to="/doc/comps/cutter">文本截断</router-link></li>
                <li><router-link to="/doc/comps/modal">弹窗(modal)</router-link></li>
                <li><router-link to="/doc/comps/editor">编辑器</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-form">
              <i class="tw-font2 xico"></i>
              <span>表单</span>
              <i class="tw-arrow xright"></i>
            </a>
            <tw-collapse
              class="xsidebar"
              switch=".js-form"
              :default-open="[
                '',
              ].indexOf($route.path) !== -1">
              <ul class="tw-nav xsidebar">
                <li><a>单选/复选</a></li>
                <li><a>选择列表</a></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="jst-close">
              <i class="tw-font2 xico"></i>
              <span>侧边导航项</span>
            </a>
          </li>
        </ul>
      </tw-collapse-group>
      <!-- /组件导航菜单 -->

      <!-- 前端学习 -->
      <tw-collapse-group
        v-if="$route.params.type==='learn'"
        class="tw-sidebar"
        key="learn-nav">
        <ul class="tw-nav xsidebar">
          <li>
            <a class="jst-close">
              <i class="tw-font2 xico"></i>
              <span>书籍与教程</span>
            </a>
          </li>
          <li>
            <a class="jst-close">
              <i class="tw-font2 xico"></i>
              <span>技术官网</span>
            </a>
          </li>
          <li>
            <a class="jst-close">
              <i class="tw-font2 xico"></i>
              <span>工具库</span>
            </a>
          </li>
          <li>
            <a class="jst-close">
              <i class="tw-font2 xico"></i>
              <span>技术文章</span>
            </a>
          </li>
          <li>
            <a class="jst-close">
              <i class="tw-font2 xico"></i>
              <span>项目经验</span>
            </a>
          </li>
        </ul>
      </tw-collapse-group>
      <!-- /前端学习 -->
    </div>
    <div class="tw-multicol-cell">
      <div class="tw-multicol-cell-table">
        <div class="tw-multicol-cell-cell">
          <tw-markdown :content="markdownText"></tw-markdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from '@comps/markdown/markdown'

export default {
  name: 'intro',
  components: {
    twMarkdown: Markdown
  },
  data () {
    return {
      markdownText: ''
    }
  },
  methods: {
    updateMarkdown () {
      const vm = this

      vm.axios.get(`docs/${vm.$route.params.type}/${vm.$route.params.name}`).then(function (responed) {
        vm.markdownText = responed.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  mounted () {
    this.updateMarkdown()
  },

  watch: {
    '$route' () {
      this.updateMarkdown()
    }
  }
}
</script>
