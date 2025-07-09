import { createRouter, createWebHistory } from 'vue-router'
import CalendarView from '@/views/CalendarView.vue'


const routes = [
  {
    path: '/calendar',
    component: CalendarView
  },
  {
    path: '/workspace',
    component: CalendarView
  },
  {
    path: '/',
    redirect: '/calendar' // Default route
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
