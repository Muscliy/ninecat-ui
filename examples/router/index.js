import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '../pages/about/index.vue'
import nButton from '../pages/nButton/index.vue'

Vue.use(VueRouter)

export const commonRoutes = [
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

export const componentRoutes = [
  {
    path: '/nButton',
    name: 'nButton',
    component: nButton
  }
]

const routes = componentRoutes.concat(commonRoutes)

export default new VueRouter({
  mode: 'hash',
  routes: routes
})