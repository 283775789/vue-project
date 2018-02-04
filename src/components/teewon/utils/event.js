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

  evt.initEvent(name, ...opts)

  el.dispatchEvent
    ? el.dispatchEvent(evt)
    : el.fireEvent('on' + name, evt)

  return el
}

/**
 * 委托一个事件
 * @param {Node} el
 * @param {String} eventName
 * @param {String, Node} target
 * @param {Function} callback
 */
const delegate = function (el, eventName, target, callback) {
  if (!el.twEvents) el.twEvents = {}

  el.twEvents[eventName] = function (event) {
    if (typeof target === 'string') target = document.querySelector(target)

    if (!(target instanceof window.Node)) {
      throw new TypeError('委托元素为空，请检查第三个参数{target}是否为元素节点或为正确的css选择器。')
    }

    if (target.contains(event.target)) {
      callback()
    }
  }

  el.addEventListener(/^[a-z]*/.exec(eventName)[0], el.twEvents[eventName])

  return el
}

/**
 * 注销一个委托事件
 * @param {Node} el
 * @param {String} eventName
 */
const off = function (el, eventName) {
  if (!el.twEvents) return
  if (!el.twEvents[eventName]) return

  el.removeEventListener(/^[a-z]*/.exec(eventName)[0], el.twEvents[eventName])
  delete el.twEvents[eventName]
}

export {trigger, delegate, off}
