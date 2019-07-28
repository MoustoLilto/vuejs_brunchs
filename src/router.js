import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import ContactUs from './views/ContactUs.vue'
import Gallery from './views/Gallery.vue'
import Brunchs from './views/events/brunchs/Brunchs.vue'
import Brunch from './views/events/brunchs/Brunch.vue'
import CreateBrunch from './views/events/brunchs/CreateBrunch.vue'
import Profile from './views/users/Profile.vue'
import Signin from './views/users/Signin.vue'
import Signup from './views/users/Signup.vue'
import Users from './views/users/Users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events/brunch/new',
      name: 'CreateBrunch',
      component: CreateBrunch
    },
    {
      path: '/events/brunchs',
      name: 'Brunchs',
      component: Brunchs
    },
    {
      path: '/events/brunch',
      name: 'Brunch',
      component: Brunch
    },
    {
      path: '/users/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/users/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/users/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/about-us',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/AboutUs.vue')
      component: AboutUs
    }
  ],
  mode: 'history'
})
