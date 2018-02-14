/**
 *  触发一个事件
 * @param {Node} el
 * @param {String} name
 * @param {Array} opts
 */
const trigger = function (el, name, ...opts) {
  let eventName

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }

  const evt = document.createEvent(eventName)

  // 兼容IE9
  if (typeof opts[0] === 'undefined') opts[0] = true
  if (typeof opts[1] === 'undefined') opts[1] = true

  evt.initEvent(name, ...opts)

  el.dispatchEvent
    ? el.dispatchEvent(evt)
    : el.fireEvent('on' + name, evt)

  return el
}

/**
 * 委托一个事件
 * @param {Node} target
 * @param {String} eventName
 * @param {String, Node} source
 * @param {Boolean} useCapture
 * @param {Function} callback
 * 回调函数的第一个参数为委托元素本身,第二个参数为事件触发的event对象
 */
const delegate = function (target, eventName, source, useCapture = false, callback) {
  if (typeof useCapture === 'function') {
    callback = useCapture
    useCapture = false
  }

  if (!target.twEvents) {
    Object.defineProperty(target, 'twEvents', {
      value: {},
      enumerable: false
    })
  }

  if (!target.twEvents[eventName]) target.twEvents[eventName] = []

  const delegateFunction = function (event) {
    let elemets = []

    if (typeof source === 'string') {
      elemets = document.querySelectorAll(source)
    } else if (source.nodeType === 1) {
      elemets.push(source)
    }

    for (let i = 0; i < elemets.length; i++) {
      if (elemets[i].contains(event.target)) {
        callback(elemets[i], event)
        break
      }
    }
  }

  target.addEventListener(/^[a-z]*/.exec(eventName)[0], delegateFunction, useCapture)
  target.twEvents[eventName].push(delegateFunction)

  return target
}

/**
 * 注销一个委托事件
 * @param {Node} el
 * @param {String} eventName
 */
const delegateOff = function (el, eventName, useCapture = false) {
  if (!el.twEvents) return
  if (!el.twEvents[eventName]) return

  el.twEvents[eventName].forEach(element => {
    el.removeEventListener(/^[a-z]*/.exec(eventName)[0], element, useCapture)
  })

  delete el.twEvents[eventName]
}

export {
  trigger,
  delegate,
  delegateOff
}
