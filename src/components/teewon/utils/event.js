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
 * @param {Function} callback
 */
const delegate = function (target, eventName, source, callback) {
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
    } else if (source instanceof window.Node) {
      elemets.push(source)
    }

    for (let i = 0; i < elemets.length; i++) {
      if (elemets[i].contains(event.target)) {
        callback()
        break
      }
    }
  }

  target.addEventListener(/^[a-z]*/.exec(eventName)[0], delegateFunction)
  target.twEvents[eventName].push(delegateFunction)

  return target
}

/**
 * 注销一个委托事件
 * @param {Node} el
 * @param {String} eventName
 */
const delegateOff = function (el, eventName) {
  if (!el.twEvents) return
  if (!el.twEvents[eventName]) return

  el.twEvents[eventName].forEach(element => {
    el.removeEventListener(/^[a-z]*/.exec(eventName)[0], element)
  })

  delete el.twEvents[eventName]
}

export {trigger, delegate, delegateOff}
