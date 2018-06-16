<template>
  <div class="tw-doc"></div>
</template>

<script>
import Vue from 'vue'
import marked from 'marked'
import hljs from 'highlight.js'
import Clipboard from 'clipboard'

export default {
  name: 'twMarkdown',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      renderer: null,
      codes: []
    }
  },
  methods: {
    updateContent () {
      const vm = this

      vm.codes = []

      let mdHtml = marked(this.content, {
        renderer: vm.renderer,
        highlight: function (code) {
          vm.codes.push(code)
          return `<a class="tw-markdown-copybtn js-copy">Copy</a>${hljs.highlightAuto(code).value}`
        }
      })

      // 提取demo组件
      if (this.$route.params.type !== 'guid') {
        mdHtml = mdHtml.replace(/<div class="tw-demo">(.*)<\/div>/gm, '</div><div class="tw-demo">$1</div><div class="tw-markdown">')
      }
      mdHtml = '<div class="tw-markdown">' + mdHtml + '</div>'

      this.$el.innerHTML = mdHtml

      vm.$nextTick(() => {
        // 生成组件demo实例
        const componentDemos = this.$el.querySelectorAll('.tw-demo')

        for (let i = 0; i < componentDemos.length; i++) {
          new Vue({
            el: componentDemos[i]
          })
        }

        // 添加代码复制功能
        const copyBtn = document.querySelectorAll('.js-copy')
        copyBtn.forEach((element, index) => {
          const copy = new Clipboard(element, {
            text: function () {
              return vm.codes[index]
            }
          })

          copy.on('success', function (e) {
            e.trigger.innerHTML = 'Copied'
            setTimeout(() => {
              e.trigger.innerHTML = 'Copy'
            }, 1500)
          })
        })
      })
    }
  },
  created () {
    this.renderer = new marked.Renderer()
    this.renderer.heading = function (text, level) {
      return `<h${level}>${text}</h${level}>`
    }
  },
  mounted () {
    this.updateContent()
  },
  watch: {
    content () {
      this.updateContent()
    }
  }
}
</script>

<style lang="scss">
  @import "markdown.scss";
</style>
