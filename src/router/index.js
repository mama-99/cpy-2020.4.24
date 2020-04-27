import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Class from '../views/Class.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import SearchList from '../views/SearchList.vue'
import Mine from '../views/Mine.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import GoodForm from '../views/GoodForm.vue'
import Pay from '../views/Pay.vue'
import R2 from '../components/R2.vue'
import R1 from '../components/R1.vue'


import jsCookie from 'js-cookie'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta:{
		show:true
	}
  },
  {
    path: '/class',
    name: 'Class',
    component: Class
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/goodform',
    name: 'GoodForm',
    component: GoodForm,
  	meta:{
  		auth:true
  	}
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	meta:{
		auth:true
	}
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/searchlist',
    name: 'SearchList',
    component: SearchList
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
	redirect:'/register/r1',
	children:[{
		path:'r1',
		name:'R1',
		component:R1
	},{
		path:'r2',
		name:'R2',
		component:R2
	}]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	meta:{
		auth:true
	}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior:(t,f,s)=>{
	  return{
		  x:0,
		  y:0
	  }
  }
})

router.beforeEach((t,f,n)=>{
	if(t.meta.auth){
		let log = jsCookie.get("username");
		if(!log){
			n("/login?next="+t.path)
		}else{
			n()
		}
	}else{
		n()
	}
})

export default router
