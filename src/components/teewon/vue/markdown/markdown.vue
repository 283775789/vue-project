<template>
  <div class="tw-markdown"></div>
</template>

<script>
  import marked from 'marked'
  export default {
    name: 'twMarkdown',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    methods: {
      updateContent () {
        this.$el.innerHTML = marked(this.content)
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
