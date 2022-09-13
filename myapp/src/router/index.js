import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'Films',
    meta:{title:'电影'},
    component: Films,
    redirect:'/films/nowPlaying',
    children:[
      {
      path:'nowPlaying',
      meta:{title:'正在热映'},
      name:'NowPlaying',
      component:()=>import ('../views/films/NowPlaying.vue')
    },
    {
      path:'comingSoon',
      meta:{title:"即将上映"},
      name:'ComingSoon',
      component:()=>import ('../views/films/ComingSoon.vue')
    },
  ]
  },
  {
    path:'/films/:id',
    name:'Detail',
    meta:{title:'详情'},
    component:()=>import ('../views/Detail.vue')
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
    path: '/city',
    name: 'City',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cinema" */ '../views/City.vue')
  },
  {
    path: '/center',
    name: 'Center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: center" */ '../views/Center.vue')
  },
  {
    path:'/login',
    name:'Login',
    meta:{title:'登录'},
    component:()=>import ('../views/Login.vue')
  }
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
