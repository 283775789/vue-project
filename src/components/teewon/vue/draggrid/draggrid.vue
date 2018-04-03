<template>
  <div class="tw-draggrid">
    <div class="tw-draggrid-col" draggable v-for="(col, index) in colsData" colspan="col[colspanKey]" ref="'col'+index" :style="resultStyles[index] || ''" :key="index">
      <div class="tw-draggrid-col-inner">
        <slot v-bind="col">默认内容{{index}}</slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'twDraggrid',
    props: {
      colsData: {
        type: Array,
        required: true
      },
      colspanKey: {
        type: Number,
        default: 'colspan'
      },
      cols: {
        type: Number,
        default: 1
      },
      heightSpan: {
        type: Number,
        default: '50'
      }
    },
    data () {
      return {
        resultStyles: []
      }
    },
    methods: {
      layout () {

      }
    },
    mounted () {
      const vm = this
      const cols = this.cols

      setTimeout(() => {
        const gridWidth = vm.$el.clientWidth() // 容器总宽度
        let tops = new Array(cols).fill(0) // 每列的当前top值
        let currentCol = 0 // 当前列

        vm.colsData.forEach((col, index) => {
          const colspan = col[vm.colspanKey]
          const resultStyle = {}

          let top = 0

          if (currentCol + colspan > cols && currentCol !== 0) {
            currentCol = 0
          }

          top = tops[currentCol]

          if (colspan > 1) {
            tops.forEach((t, n) => {
              if (n > currentCol && n < currentCol + colspan && t > top) {
                top = t
              }
            })
          }

          resultStyle.left = 0
          resultStyle.top = top
          resultStyle.width = col[colspan] / vm.cols * gridWidth

          for (let i = currentCol; i < col[colspan]; i++) {
            tops[i] = top + vm.$refs['col' + index].offsetHeight
          }

          tops[currentCol] = resultStyle.top
          top = vm.$refs['col' + index].offsetHeight()
        })
      }, 60)
    }
  }
</script>
