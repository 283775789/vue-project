/**
 * 元素添加class
 * @param {Node} el
 * @param {String} className
 */
const addClass = function (el, className) {
  if (/\s/.test(className)) {
    throw new Error('className不能包含空格.')
  }

  let targetClass = el.getAttribute('class')
  let classReg = new RegExp('\\b' + className + '\\b')

  if (classReg.test(targetClass)) return

  targetClass = (targetClass + ' ' + className).replace(/^ /, '')
  el.setAttribute('class', targetClass)
}

/**
 * 元素移除class
 * @param {Node} el
 * @param {String} className
 */
const removeClass = function (el, className) {
  if (/\s/.test(className)) {
    throw new Error('className不能包含空格.')
  }

  let classReg = new RegExp('\\b' + className + '\\b')

  let targetClass = el.getAttribute('class').replace(classReg, '').replace(/ $/, '')
  el.setAttribute('class', targetClass)
}

/**
 * 切换class
 * @param {Node} el
 * @param {String} className
 */
const toggleClass = function (el, className) {
  if (/\s/.test(className)) {
    throw new Error('className不能包含空格.')
  }

  let targetClass = el.getAttribute('class')

  if (targetClass.indexOf(className) !== -1) {
    removeClass(el, className)
  } else {
    addClass(el, className)
  }
}

/**
 * 获取元素应用样式后的属性值
 * @param {Node} el
 * @param {String} className
 * @param {String} props
 */
const getToggleClassProps = function (el, className, ...props) {
  const originalTransition = el.style.transition

  el.style.transition = 'none'
  toggleClass(el, className)

  const computedStyle = window.getComputedStyle(el)
  const value = {}

  props.forEach(function (prop) {
    value[prop] = computedStyle[prop]
  })

  toggleClass(el, className)
  el.style.transition = originalTransition

  return value
}

/**
 * 切换带过渡效果的class
 * @param {*} el
 * @param {*} className
 * @param {*} props
 */
const toggleTransitionClass = function (el, className, transitionClass, ...props) {
  let targetClass = el.getAttribute('class')

  const end = function () {
    removeClass(el, transitionClass)
    el.removeEventListener('transitionend', end)
  }

  if (el.style.transition !== undefined) {
    addClass(el, transitionClass)
    el.addEventListener('transitionend', end)
  }

  if (targetClass.indexOf(className) !== -1) {
    removeClass(el, className)
  } else {
    addClass(el, className)
  }
}

export {addClass, removeClass, toggleClass, getToggleClassProps, toggleTransitionClass}
