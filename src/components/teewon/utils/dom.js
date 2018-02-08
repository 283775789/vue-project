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
 * @param {*} styles
 */
const toggleTransitionClass = function (el, className, transitionClass, ...resolveAuto) {
  const resolve = function (prop, isAdd) {
    const currentValue = window.getComputedStyle(el)[prop]
    let targetValue

    if (isAdd) {
      el.style[prop] = 'auto'
      targetValue = window.getComputedStyle(el)[prop]
    } else {
      targetValue = 0
    }

    el.style[prop] = currentValue
    /* eslint-disable no-unused-vars */
    const width = el.offsetWidth

    return targetValue
  }

  let targetClass = el.getAttribute('class')
  let targetHeight
  let targetWidth

  if (targetClass.indexOf(className) !== -1) {
    if (resolveAuto.indexOf('height') !== -1) {
      targetHeight = resolve('height')
    }

    if (resolveAuto.indexOf('width') !== -1) {
      targetWidth = resolve('width')
    }
  } else {
    if (resolveAuto.indexOf('height') !== -1) {
      targetHeight = resolve('height', true)
    }

    if (resolveAuto.indexOf('width') !== -1) {
      targetWidth = resolve('width', true)
    }
  }

  const end = function () {
    removeClass(el, transitionClass)
    el.style.width = ''
    el.style.height = ''
    el.removeEventListener('transitionend', end)
  }

  if (el.style.transition !== undefined) {
    addClass(el, transitionClass)
    el.addEventListener('transitionend', end)
  }

  if (resolveAuto.indexOf('height') !== -1) {
    el.style.height = targetHeight
  }

  if (resolveAuto.indexOf('width') !== -1) {
    el.style.width = targetWidth
  }

  if (targetClass.indexOf(className) !== -1) {
    removeClass(el, className)
  } else {
    addClass(el, className)
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
