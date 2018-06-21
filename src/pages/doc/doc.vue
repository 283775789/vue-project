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
            <a class="js-fe"><i class="tw-font xico"></i>前端体系<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-fe">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/guid/role">编码准则</router-link></li>
                <li><router-link to="/doc/guid/framwork">技术框架</router-link></li>
                <li><router-link to="/doc/guid/dev-flow">开发流程</router-link></li>
                <li><router-link to="/doc/guid/ide">编辑器</router-link></li>
                <li><router-link to="/doc/guid/shortcut">快捷输入</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-code"><i class="tw-font xico"></i>代码规范<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-code">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/guid/version">版本管理</router-link></li>
                <li><router-link to="/doc/guid/dir">目录及文件</router-link></li>
                <li><router-link to="/doc/guid/js">JS规范</router-link></li>
                <li><router-link to="/doc/guid/css">CSS规范</router-link></li>
                <li><router-link to="/doc/guid/html">HTML规范</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li><router-link to="/doc/guid/design" class="jst-close"><i class="tw-font xico"></i>设计规范</router-link></li>
        </ul>
      </tw-collapse-group>
      <!-- /规范导航菜单 -->

      <!-- 组件导航菜单 -->
      <tw-collapse-group
        v-if="$route.params.type==='comps' || $route.params.type==='css'"
        class="tw-sidebar"
        key="comps-nav">
        <ul class="tw-nav xsidebar">
          <li>
            <a class="js-scss"><i class="tw-font xico"></i>功能样式<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-scss">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/css/mixins">mixins</router-link></li>
                <li><router-link to="/doc/css/display">盒子模型</router-link></li>
                <li><router-link to="/doc/css/float">浮动</router-link></li>
                <li><router-link to="/doc/css/text">文本颜色</router-link></li>
                <li><router-link to="/doc/css/spacing">间距尺寸</router-link></li>
                <li><router-link to="/doc/css/border">边框和背景</router-link></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-layout"><i class="tw-font xico"></i>布局<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-layout">
              <ul class="tw-nav xsidebar">
                <li><router-link to="/doc/css/layout">整体布局</router-link></li>
                <li><a>栅格系统</a></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-nav"><i class="tw-font xico"></i>导航<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-nav">
              <ul class="tw-nav xsidebar">
                <li><a>头部导航</a></li>
                <li><a>侧边栏导航</a></li>
                <li><a>面包屑</a></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-unit"><i class="tw-font xico"></i>元件<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-unit">
              <ul class="tw-nav xsidebar">
                <li><a>图标</a></li>
                <li><a>按钮</a></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-function"><i class="tw-font xico"></i>功能<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-function">
              <ul class="tw-nav xsidebar">
                <li><a>下拉列表</a></li>
                <li><a>折叠面板</a></li>
              </ul>
            </tw-collapse>
          </li>
          <li>
            <a class="js-form"><i class="tw-font xico"></i>表单<i class="tw-arrow xright"></i></a>
            <tw-collapse class="xsidebar" switch=".js-form">
              <ul class="tw-nav xsidebar">
                <li><a>单选/复选</a></li>
                <li><a>选择列表</a></li>
              </ul>
            </tw-collapse>
          </li>
          <li><a class="jst-close"><i class="tw-font xico"></i>侧边导航项</a></li>
        </ul>
      </tw-collapse-group>
      <!-- /组件导航菜单 -->
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
