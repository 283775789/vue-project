import Vue from 'vue'
import Router from 'vue-router'
import Index from '@pages/index'
import Project from '@pages/project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/project',
      component: Project
    }
  ]
})
