import tween from '@utils/tween'

export default {
  name: 'anchor',

  hooks: {
    bind (el) {
      /**
       * 行为: 获取锚点在页面中top值
       * @param {Element} anchor 锚点指令绑定元素
       */
      const getAnchorTargetTop = function (anchor) {
        const scrollTop = window.pageYOffset

        let dataTop = anchor.getAttribute('data-top')
        dataTop = dataTop ? parseInt(dataTop) : 0

        return anchor.getBoundingClientRect().top - dataTop + scrollTop - document.documentElement.clientTop
      }

      // 单击锚点开关元素，页面滚动到锚点所在处
      document.addEventListener('click', function () {

      })

      const target = document.querySelector(el.getAttribute('data-swith'))

      if (target) {
        const scrollTop = window.pageYOffset
        const scrollLeft = window.pageXOffset

        tween({
          from: {top: scrollTop},
          to: {top: getAnchorTargetTop(el)},
          time: 200,
          update (update) {
            window.scrollTo(scrollLeft, update.top)
          }
        })
      }

      /**
       * 行为: 锚点Class处理器
       * @param {String} groupName 用于区分锚点指令绑定元素的分组
       */
      const anchorClassHandler = function (groupName) {
        if (groupName) {
          const anchors = document.getElementsByName(groupName)

          for (let i = 0; i < anchors.length; i++) {
            if (anchors[i] === el) {
              anchors[i].classList.add('xactive')
            } else {
              anchors[i].classList.remove('xactive')
            }
          }
        } else {
          el.classList.add('xactive')
        }
      }

      /**
       * 行为: 当页面滚动到锚点目标位置时，指令绑定元素添加激活样式
       */
      const handleScrollForAnchors = function () {
        if (!document.contains(el)) {
          // 如果el在当前页已经不存在，注销其在document上相关联的scroll事件
          document.removeEventListener('scroll', handleScrollForAnchors)
          return
        }

        const target = document.querySelector(el.getAttribute('data-target'))

        if (target) {
          const scrollTop = window.pageYOffset
          const groupName = el.getAttribute('name')

          // 如果指定了组名，按组来计算当前指令绑定元素是否需要被激活
          if (groupName) {
            const anchors = document.getElementsByName(groupName)
            let targets = []

            // 获取锚点目标组中每个目标的top值

            for (let i = 0; i < anchors.length; i++) {
              targets.push({
                link: anchors[i],
                top: getAnchorTargetTop(anchors[i])
              })
            }

            // 锚点目标组按其top值从小到大排序
            targets = targets.sort((t1, t2) => {
              return t1.top - t2.top
            })

            // 获取当前事件元素在排序后的锚点目标组中对应的索引
            for (var i = 0; i < targets.length; i++) {
              if (targets[i].link === el) break
            }

            if (i < targets.length - 2) {
              if (scrollTop >= targets[i].top && scrollTop < targets[i + 1].top) {
                anchorClassHandler(groupName)
              } else {
                el.classList.remove('xactive')
              }
            } else {
              if (scrollTop >= targets[i].top) {
                anchorClassHandler(groupName)
              } else {
                el.classList.remove('xactive')
              }
            }
          } else {
            if (scrollTop >= getAnchorTargetTop(el)) {
              anchorClassHandler()
            }
          }
        }
      }

      const groupName = el.getAttribute('name')
      if (groupName) {

      } else {
        document.addEventListener('scroll', handleScrollForAnchors)
      }
    }
  }
}
