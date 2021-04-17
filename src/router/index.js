import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePublico from '../views/HomePublico.vue'
import HomePrivado from '../views/HomePrivado.vue'
import Transferencias from '../views/Transferencias.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePublico',
    component: HomePublico
  },
  {
    path: '/homeprivado',
    name: 'HomePrivado',
    component: HomePrivado
  },
  {
    path: '/transferencias',
    name: 'Transferencias',
    component: Transferencias
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
