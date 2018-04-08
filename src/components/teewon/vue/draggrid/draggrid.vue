<template>
  <div class="tw-draggrid" :class="{xdrag:enableDrag && !lockDrag}" :style="{height:gridHeight}">
    <transition-group tag="div">
      <div class="tw-draggrid-col"
        v-for="(col, index) in resultColsData"
        :ref="'col'+index"
        :style="resultStyles[index] || ''" :key="col[idKey]">
        <div class="tw-draggrid-col-inner"
          :class="resultStyles[index] && resultStyles[index].statusClass"
          :draggable="enableDrag && !lockDrag"
          @dragstart="handleDragStart(index, $event)"
          @dragend="handleDragend(index, $event)"
          @dragenter="handleDragenter(index, $event)"
          @dragleave="handleDragleave(index, $event)"
          @dragover="handleDragover(index, $event)"
          @drop="handleDrop(index)">
          <slot v-bind="col">默认内容{{index}}</slot>
          <a class="tw-draggrid-col-resize" v-if="enableDrag" @mousedown="handleResize(index, $event)"></a>
        </div>
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
      idKey: {
        type: String,
        required: true
      },
      draggableKey: {
        type: String,
        default: 'draggable'
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
        currentDragIndex: 0,
        gridHeight: 0
      }
    },
    methods: {
      updateStyles () {
        const vm = this
        vm.resultStyles = []

        vm.colStyles.forEach(colStyle => {
          let result = {}
          result.statusClass = {}
          result.statusClass.xdropping = false
          result.statusClass.xdragging = false
          result.statusClass.xresizing = false

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

        vm.gridHeight = Math.max(...tops) + 'px'
        vm.$nextTick(() => {
          this.updateStyles()
        })
      },
      handleDragStart (index, event) {
        this.currentDragIndex = index
        this.resultStyles[index].statusClass.xdragging = true

        event.dataTransfer.setDragImage(document.createElement('img'), 0, 0)
      },
      handleDragend (index, event) {
        this.resultStyles[index].statusClass.xdragging = false
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
        this.resultStyles[index].statusClass.xdropping = true
      },
      handleDragleave (index, event) {
        this.resultStyles[index].statusClass.xdropping = false
      },
      handleDragover (index, event) {
        this.resultStyles[index].statusClass.xdropping = true
        event.preventDefault()
      },
      handleResize (index, event) {
        const vm = this
        vm.resultStyles[index].statusClass.xresizing = true
        vm.lockDrag = true

        const col = vm.resultColsData[index]
        const originalX = event.pageX
        const colWidth = parseFloat(this.resultStyles[index].width)
        const colLeft = parseFloat(this.resultStyles[index].left)
        const span = col.colspan
        const unitWidth = 1 / this.cols * 100

        const el = this.$refs['col' + index][0]
        el.style.transition = 'none'

        const resizeCol = function (event) {
          event.preventDefault()
          const increment = (event.pageX - originalX) / vm.$el.offsetWidth * 100
          let resultWidth = colWidth + increment

          if (colLeft + resultWidth > 100 || resultWidth < unitWidth) return

          const incrementSpan = increment >= 0 ? (increment / unitWidth).toFixed(0) : Math.floor(increment / unitWidth)
          let resultSpan = span + parseInt(incrementSpan)
          console.log(incrementSpan)

          el.style.width = unitWidth * resultSpan + '%'

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
      this.resultColsData = this.colsData
    },
    mounted () {
      this.layout(true)
    }
  }
</script>
