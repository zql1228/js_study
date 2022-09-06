import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: '电影',
    component: Films,
    redirect:'/films/nowPlaying',
    children:[
      {
      path:'nowPlaying',
      name:'正在热映',
      component:()=>import ('../views/films/NowPlaying.vue')
    },
    {
      path:'comingSoon',
      name:'即将上映',
      component:()=>import ('../views/films/ComingSoon.vue')
    },
  ]
  },
  {
    path: '/cinemas',
    name: 'Cinema',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cinema" */ '../views/Cinema.vue')
  },
  {
    path: '/center',
    name: 'Center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: center" */ '../views/Center.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path==='/'){
    next('/films')
  }
next()
})
export default router
