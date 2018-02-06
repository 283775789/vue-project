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

const removeClass = function (el, className) {
  if (/\s/.test(className)) {
    throw new Error('className不能包含空格.')
  }

  let classReg = new RegExp('\\b' + className + '\\b')

  let targetClass = el.getAttribute('class').replace(classReg, '').replace(/ $/, '')
  el.setAttribute('class', targetClass)
}

const toggleTransitionClass = function (el, className, props) {

}

export {addClass, removeClass, toggleTransitionClass}
