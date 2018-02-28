
/**
 * 判断指定的vue节点是否有指定名称的祖先节点
 * @param {Vnode} vnode
 * vue节点
 * @param {String} name
 * 组件名称
 */
const hasAncestor = function (vnode, name) {
  let parent = vnode.$parent

  while (parent) {
    if (parent.$options.name === name) return true
    parent = parent.$parent
  }

  return false
}

const hasDescendant = function (vnode, name) {
  let parent = vnode.$parent

  while (parent) {
    if (parent.$options.name === name) return true
    parent = parent.$parent
  }

  return false
}

export {
  hasAncestor,
  hasDescendant
}
