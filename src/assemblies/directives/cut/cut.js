export default {
  name: 'cut',

  hooks: {
    inserted (el, bind) {
      const cutClassName = 'tw-cutter'
      const btnHTML = '<a class="tw-cutter-btn">展开</a>'
      const limitHeight = bind.value
      const elHeight = el.offsetHeight

      if (elHeight > limitHeight) {
        el.style.height = limitHeight + 'px'
        el.classList.add(cutClassName)
        el.insertAdjacentHTML('beforeend', btnHTML)

        const btn = el.querySelector('.tw-cutter-btn')
        btn.addEventListener('click', function () {
          if (el.classList.contains('xmore')) {
            btn.textContent = '展开'
            el.classList.remove('xmore')
          } else {
            btn.textContent = '收起'
            el.classList.add('xmore')
          }
        })
      }
    }
  }
}
