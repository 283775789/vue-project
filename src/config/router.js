import Vue from 'vue'
import Router from 'vue-router'
import Doc from '@pages/doc/doc'
import Project from '@pages/project/project-new'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    {
      path: '/',
      redirect: '/doc'
    },
    {
      path: '/doc/:type/:name',
      name: 'doc',
      component: Doc
    },
    {
      path: '/doc/summary',
      redirect: '/doc/summary/teewon'
    },
    {
      path: '/doc/guid',
      redirect: '/doc/guid/design'
    },
    {
      path: '/doc/component',
      redirect: '/doc/component/scss'
    },
    {
      path: '/project-new',
      component: Project
    }
  ]
})
