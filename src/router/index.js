import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Rooms from '../views/RoomsView.vue'
import CheckIn from '../views/CheckInView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/checkin/:hostID/:roomID',
    name: 'CheckIn',
    component: CheckIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
