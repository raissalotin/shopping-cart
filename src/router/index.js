import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../Views/HomeView.vue'
import FormView from '../Views/FormView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/form',
        name: 'form',
        component: FormView
      },
      
    ]
})

export default router