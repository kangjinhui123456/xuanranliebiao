import Vue from 'vue'
import VueRouter from 'vue-router'
import xiao from '../views/xiao.vue'
import ren from '../views/ren.vue'
import kong from '../views/kong.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:"/",
		redirect:"/xiao"
	},
  {
    path: '/xiao',
    component: xiao
  },
  {
    path: '/ren',
    component: ren
  },{
    path: '/kong',
    component: kong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
