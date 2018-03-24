<template>
  <component v-bind:is="currentView">
  </component>
</template>

<script>
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
        currentView: '',
        componentIndex: 0,
        codes: []
      }
    },
    methods: {
      updateContent () {
        const vm = this
        const name = 'md' + this.componentIndex++

        vm.codes = []
        const mdHtml = marked(this.content, {
          renderer: vm.renderer,
          highlight: function (code) {
            vm.codes.push(code)
            return `<a class="tw-markdown-copybtn js-copy">Copy</a>${hljs.highlightAuto(code).value}`
          }
        })

        const temp = `<div class="tw-markdown">${mdHtml}</div>`

        window.Vue.component(name, {
          template: temp
        })

        vm.currentView = name

        // 添加代码复制功能
        vm.$nextTick(() => {
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
