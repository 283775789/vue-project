let fixUid = 0
let fixHandlers = []

export default {
  name: 'fix',

  hooks: {
    inserted (el, bind) {
      el.setAttribute('data-fix-uid', ++fixUid)

      let fixEl
      let unFix
      let fixed = false
      let fixedClassName = 'xfixed'
      let originalStyle = el.getAttribute('style')
      let originalTop = parseInt(el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop)

      const elPlaceholder = el.cloneNode()

      fixEl = function () {
        fixed = true
        elPlaceholder.classList.add('xplaceholder')
        elPlaceholder.style.width = el.offsetWidth + 'px'
        elPlaceholder.style.height = el.offsetHeight + 'px'

        el.classList.add(fixedClassName)
        el.style.width = el.offsetWidth + 'px'
        el.style.position = 'fixed'
        bind.arg === 'bottom' ? (el.style.bottom = bind.value ? bind.value + 'px' : 0) : (el.style.top = bind.value ? bind.value + 'px' : 0)
        el.parentElement.insertBefore(elPlaceholder, el)
      }

      unFix = function () {
        fixed = false
        el.classList.remove(fixedClassName)

        if (el.parentElement.contains(elPlaceholder)) {
          el.parentElement.removeChild(elPlaceholder)
        }

        el.setAttribute('style', originalStyle || '')
      }

      fixHandlers[fixUid] = function () {
        if (!document.contains(el)) {
          document.removeEventListener('scroll', fixHandlers[fixUid])
          return
        }

        const scrollTop = window.pageYOffset

        if (!fixed) {
          originalTop = parseInt(el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop)
        }

        if (bind.arg === 'bottom') {
          if (scrollTop + window.innerHeight < originalTop) {
            fixed || fixEl()
          } else {
            fixed && unFix()
          }
        } else {
          if (scrollTop > originalTop) {
            fixed || fixEl()
          } else {
            fixed && unFix()
          }
        }
      }

      document.addEventListener('scroll', fixHandlers[fixUid])
    },

    componentUpdated (el, bind) {
      const uid = el.getAttribute('data-fix-uid')
      fixHandlers[uid]()
    },

    unbind (el) {
      const uid = el.getAttribute('data-fix-uid')
      document.removeEventListener('scroll', fixHandlers[uid])
    }
  }
}
