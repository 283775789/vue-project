/**
 * 返回两个元素间位置相关的信息
 * @param {Element} el
 * 目标元素
 * @param {Element} relatedElement
 * 参照元素， 当需要在相同的节点中返回位置信息时， relatedElement应为element的祖先元素
 */
const placement = function (el, relatedElement) {
  const isdescendant = relatedElement.contains(el)
  const elWidth = el.offsetWidth
  const elHeight = el.offsetHeight
  const relatedRect = relatedElement.getBoundingClientRect()
  const overallWidth = relatedRect.left + relatedRect.width + elWidth
  const overallHeight = relatedRect.top + relatedRect.height + elHeight

  /* eslint-disable */

  const placements = [
    'topleft',
    'topcenter',
    'topright',
    'righttop',
    'rightcenter',
    'rightbottom',
    'bottomleft',
    'bottomcenter',
    'bottomright',
    'lefttop',
    'leftcenter',
    'leftbottom'
  ]

  let matrix = {}

  if (isdescendant) {
    // 生成父子关系时的位置信息
    placements.forEach(function (item) {
      matrix[item] = {}

      if (/^top/.test(item)) {
        matrix[item].bottom = relatedRect.height + 'px'
      }

      if (/^right/.test(item)) {
        matrix[item].left = '100%'
      }

      if (/^bottom/.test(item)) {
        matrix[item].top = relatedRect.height + 'px'
      }

      if (/^left/.test(item)) {
        matrix[item].left = -elWidth + 'px'
      }

      if (/top$/.test(item)) {
        matrix[item].top = 0
      }

      if (/right$/.test(item)) {
        matrix[item].right = 0
      }

      if (/bottom$/.test(item)) {
        matrix[item].bottom = 0
      }

      if (/left$/.test(item)) {
        matrix[item].left = 0
      }

      if (/center$/.test(item)) {
        if (/^(top|bottom)/.test(item)) {
          matrix[item].left = (relatedRect.width - elWidth) / 2 + 'px'
        } else {
          matrix[item].top = (relatedRect.height - elHeight) / 2 + 'px'
        }
      }
    })

    matrix.auto = {}

    if (overallHeight > window.innerHeight && relatedRect.top > elHeight) {
      matrix.auto.bottom = relatedRect.height + 'px'
    }

    if (overallWidth > window.innerWidth && relatedRect.left + relatedRect.width > elWidth) {
      matrix.auto.right = 0
    }
  } else {
    // 生成非父子关系时的位置信息(即element将直接放置在body中)
    const relatedTop = window.pageYOffset + relatedRect.top
    const relatedLeft = window.pageXOffset + relatedRect.left

    placements.forEach(function (item) {
      matrix[item] = {}

      if (/^top/.test(item)) {
        matrix[item].top = relatedTop - elHeight + 'px'
      }

      if (/^right/.test(item)) {
        matrix[item].left = relatedLeft + relatedRect.width + 'px'
      }

      if (/^bottom/.test(item)) {
        matrix[item].top = relatedTop + relatedRect.height + 'px'
      }

      if (/^left/.test(item)) {
        matrix[item].left = relatedLeft - elWidth + 'px'
      }

      if (/top$/.test(item)) {
        matrix[item].top = relatedTop + 'px'
      }

      if (/right$/.test(item)) {
        matrix[item].left = relatedLeft + relatedRect.width - elWidth + 'px'
      }

      if (/bottom$/.test(item)) {
        matrix[item].top = relatedTop + relatedRect.height - elHeight + 'px'
      }

      if (/left$/.test(item)) {
        matrix[item].left = relatedLeft + 'px'
      }

      if (/center$/.test(item)) {
        if (/^(top|bottom)/.test(item)) {
          matrix[item].left = relatedLeft + relatedRect.width / 2 - elWidth / 2 + 'px'
        } else {
          matrix[item].top = relatedTop + relatedRect.height / 2 - elHeight / 2 + 'px'
        }
      }
    })

    matrix.auto = {
      top: relatedTop + relatedRect.height + 'px',
      left: relatedLeft + 'px'
    }

    if (overallHeight > window.innerHeight && relatedRect.top > elHeight) {
      matrix.auto.top = relatedTop - elHeight + 'px'
    }

    if (overallWidth > window.innerWidth && relatedRect.left + relatedRect.width > elWidth) {
      matrix.auto.left = relatedLeft + relatedRect.width - elWidth + 'px'
    }
  }

  // 如未指定最小宽度，最小宽度取参照元素的宽度
  let minWidth = window.getComputedStyle(el).minWidth
  if (minWidth === '0px' || minWidth === parseInt(relatedRect.width) + 'px') {
    for (const prop in matrix) {
      matrix[prop].minWidth = parseInt(relatedRect.width) + 'px'
    }
  }

  return matrix
}

export {
  placement
}
