import Vue from 'vue'
import Router from 'vue-router'
import Doc from '@pages/doc/doc'
import Project from '@pages/project/project'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    {
      path: '/',
      redirect: '/doc/guid'
    },
    {
      path: '/doc/:type/:name',
      name: 'doc',
      component: Doc
    },
    {
      path: '/doc/guid',
      redirect: '/doc/guid/role'
    },
    {
      path: '/doc/component',
      redirect: '/doc/component/scss'
    },
    {
      path: '/project',
      component: Project
    }
  ]
})
