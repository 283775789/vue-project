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

  let classReg = new RegExp('(\\s|\\b)' + className + '\\b')

  let targetClass = el.getAttribute('class').replace(classReg, '').replace(/ $/, '')
  el.setAttribute('class', targetClass)
}

/**
 * 切换class
 * @param {Node} el
 * @param {String} className
 */
const toggleClass = function (el, className) {
  let targetClass = el.getAttribute('class')

  if (targetClass.indexOf(className) !== -1) {
    removeClass(el, className)
  } else {
    addClass(el, className)
  }
}

/**
 * 获取元素的样式
 * @param {Node} el
 * @param {String} props
 */
const getStyle = function (el, ...props) {
  const computedStyle = window.getComputedStyle(el)
  const value = {}

  props.forEach(function (prop) {
    value[prop] = computedStyle[prop]
  })

  return value
}

/**
 * 获取元素应用样式后的属性值
 * @param {Node} el
 * @param {String} className
 * @param {String} props
 */
const getToggleClassStyles = function (el, className, ...props) {
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

  /* eslint-disable no-unused-vars */
  // 强制重绘
  const width = el.offsetWidth

  return value
}

/**
 * 样式对象转换成元素相关样式
 * @param {Node} el
 * @param {Object} styleObj
 */
const compileStyle = function (el, styleObj) {
  for (const prop in styleObj) {
    el.style[prop] = styleObj[prop]
  }
}

/**
 * 切换带过渡效果的class
 * @param {*} el
 * @param {*} className
 * @param {*} transitionClass
 * @param {*} callback
 */
const toggleTransitionClass = function (el, className, transitionClass, callback) {
  if (el.style.transition !== undefined) {
    // 过渡进行中标志属性
    const transitionPropName = 'tw' + className + transitionClass

    // 过渡完成时调用
    const end = function () {
      removeClass(el, transitionClass)
      el[transitionPropName]()
      typeof callback === 'function' && callback()
    }

    // 当此函数被多次调用，且上次的过滤未完成又执行此函数时，
    // 还原原来样式后，再进行当次调用
    if (el[transitionPropName]) el[transitionPropName]()

    const styleHeight = el.style.height
    const styleWidth = el.style.width

    // 设置过渡样式还原函数
    el[transitionPropName] = function () {
      el.style.width = styleWidth
      el.style.height = styleHeight
      delete el[transitionPropName]
      el.removeEventListener('transitionend', end)
    }

    // 以下三个变量用于解决width或height值为auto时不触发transition
    const currentWidth = window.getComputedStyle(el).width
    const currentHeight = window.getComputedStyle(el).height
    const targetValue = getToggleClassStyles(el, className, 'height', 'width')

    el.style.width = currentWidth
    el.style.height = currentHeight

    transitionClass && addClass(el, transitionClass)
    el.addEventListener('transitionend', end)
    const duration = window.getComputedStyle(el).transitionDuration

    el.style.height = targetValue.height
    el.style.width = targetValue.width

    toggleClass(el, className)
  } else {
    toggleClass(el, className)
    typeof callback === 'function' && callback()
  }
}

export {
  addClass,
  removeClass,
  toggleClass,
  getToggleClassStyles,
  compileStyle,
  getStyle,
  toggleTransitionClass
}
