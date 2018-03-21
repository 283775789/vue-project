import Vue from 'vue'
import Router from 'vue-router'
import Project from '@pages/project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/project',
      component: Project
    }
  ]
})
