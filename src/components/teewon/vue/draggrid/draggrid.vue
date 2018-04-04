<template>
  <div class="tw-draggrid" :class="{xdrag:enableDrag && !lockDrag}">
    <transition-group tag="div">
      <div class="tw-draggrid-col" :class="[resultStyles[index] && resultStyles[index].isDragging ? 'xdragging' : '']" v-for="(col, index) in resultColsData" :ref="'col'+index" :style="resultStyles[index] || ''" :key="col.name">
        <div class="tw-draggrid-col-inner"
          :draggable="enableDrag && !lockDrag"
          @dragstart="handleDragStart(index, $event)"
          @dragenter="handleDragenter(index, $event)"
          @dragleave="handleDragleave(index, $event)"
          @dragover = "handleDragover"
          @drop="handleDrop(index)">
          <slot v-bind="col">默认内容{{index}}</slot>
        </div>
          <a class="tw-draggrid-col-resize" v-if="enableDrag" @mousedown="handleResize(index, $event)"></a>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'twDraggrid',
    props: {
      enableDrag: {
        type: Boolean,
        default: false
      },
      colsData: {
        type: Array,
        required: true
      },
      colspanKey: {
        type: String,
        default: 'colspan'
      },
      cols: {
        type: Number,
        default: 1
      },
      heightSpan: {
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        resultColsData: [],
        colStyles: [],
        resultStyles: [],
        lockDrag: false,
        currentDragIndex: 0
      }
    },
    methods: {
      updateStyles () {
        const vm = this
        vm.resultStyles = []

        vm.colStyles.forEach(colStyle => {
          let result = {}
          result.isDragging = false

          for (const key in colStyle) {
            if (key === 'top') {
              result[key] = colStyle[key] + 'px'
            } else {
              result[key] = colStyle[key] * 100 + '%'
            }
          }
          vm.resultStyles.push(result)
        })
      },
      layout () {
        const vm = this
        const cols = this.cols
        vm.colStyles = []
        let tops = new Array(cols).fill(0) // 每列的当前top值
        let currentCol = 0 // 当前列
        let left = 0

        vm.resultColsData.forEach((col, index) => {
          const colspan = col[vm.colspanKey]
          const colStyle = {}

          let top = 0

          if (currentCol + colspan > cols && currentCol !== 0) {
            currentCol = 0
            left = 0
          }

          top = tops[currentCol]

          if (colspan > 1) {
            tops.forEach((t, n) => {
              if (n > currentCol && n < currentCol + colspan && t > top) {
                top = t
              }
            })
          }

          colStyle.left = left
          colStyle.top = top
          colStyle.width = colspan / vm.cols
          left += colStyle.width

          vm.colStyles.push(colStyle)
          top = top + vm.$refs['col' + index][0].offsetHeight

          for (let i = currentCol; i < currentCol + colspan; i++) {
            tops[i] = top
          }

          currentCol += colspan
        })

        vm.$nextTick(() => {
          this.updateStyles()
        })
      },
      handleDragStart (index, event) {
        this.currentDragIndex = index
      },
      handleDrop (index) {
        const dragCol = this.resultColsData[this.currentDragIndex]
        const dropCol = this.resultColsData[index]
        const dragColspan = dragCol.colspan
        const dropColspan = dropCol.colspan

        dragCol.colspan = dropColspan
        dropCol.colspan = dragColspan

        this.resultColsData.splice(this.currentDragIndex, 1, dropCol)
        this.resultColsData.splice(index, 1, dragCol)

        this.$nextTick(() => {
          this.layout()
        })
      },
      handleDragenter (index, event) {
        this.resultStyles[index].isDragging = true
      },
      handleDragleave (index, event) {
        this.resultStyles[index].isDragging = false
      },
      handleDragover (event) {
        event.preventDefault()
      },
      handleResize (index, event) {
        const vm = this

        vm.lockDrag = true

        const col = vm.resultColsData[index]
        const originalX = event.pageX
        const colWidth = parseFloat(this.resultStyles[index].width)
        const span = col.colspan
        const unitWidth = 1 / this.cols * 100

        const el = this.$refs['col' + index][0]
        el.style.transition = 'none'

        const resizeCol = function (event) {
          const increment = (event.pageX - originalX) / vm.$el.offsetWidth * 100
          let resultWidth = colWidth + increment
          const incrementSpan = increment >= 0 ? Math.ceil(increment / unitWidth) : Math.floor(increment / unitWidth)
          let resultSpan = span + incrementSpan

          if (resultSpan > vm.cols) {
            resultSpan = this.cols
            resultWidth = 100
          }

          if (resultSpan < 2) {
            resultSpan = 1
          }

          if (resultWidth < unitWidth) {
            resultWidth = unitWidth
          }

          el.style.width = resultWidth + '%'
          col.colspan = resultSpan
        }

        document.addEventListener('mousemove', resizeCol)

        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', resizeCol)
          el.style.transition = ''
          vm.lockDrag = false
          vm.layout()
        })
      }
    },
    created () {
      debugger
      this.resultColsData = this.colsData
    },
    mounted () {
      setTimeout(() => {
        this.layout(true)
      }, 300)
    }
  }
</script>
