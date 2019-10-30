import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const TableBasic = () => import(/* webpackChunkName: "tableBasic" */ '../views/table/Basic.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/table/basic', name: 'TableBasic', component: TableBasic }
]

const router = new VueRouter({
  routes
})

export default router
