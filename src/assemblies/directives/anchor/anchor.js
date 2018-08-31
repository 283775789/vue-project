import tween from '@utils/tween'

export default {
  name: 'anchor',

  hooks: {
    bind: function (el) {
      el.addEventListener('click', function () {
        const target = document.querySelector(el.getAttribute('data-target'))

        if (target) {
          const scrollTop = window.pageYOffset
          const scrollLeft = window.pageXOffset

          let dataTop = el.getAttribute('data-top')
          dataTop = dataTop ? parseInt(dataTop) : 0

          const targetTop = target.getBoundingClientRect().top - dataTop + scrollTop - document.documentElement.clientTop
          tween({
            from: {top: scrollTop},
            to: {top: targetTop},
            time: 200,
            update (update) {
              window.scrollTo(scrollLeft, update.top)
            }
          })
        }
      })
    }
  }
}
