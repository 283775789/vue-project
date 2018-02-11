/**
 * 类弹出面板需实现的属性
 */
export default {
  isPoppane: true,
  mounted () {
    document.body.appendChild(this.$el)
  }
}
