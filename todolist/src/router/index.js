import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/TodoList.vue'
import TodoItem from '@/components/TodoItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/task/:index',
      name: 'task',
      component: TodoItem,
      props: true,
    },
  ]
})

export default router
