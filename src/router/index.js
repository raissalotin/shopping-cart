import { createRouter, createWebHistory } from 'vue-router'

import PaginaInicialview from '../views/PaginaInicialview.vue'
import pedidoFeitoview from '../views/pedidoFeitoview.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'PaginaInicial',
        component: PaginaInicialview
      },
      {
        path: '/pedidoFeito',
        name: 'pedidoFeito',
        component: pedidoFeitoview
      }
    ]
})

export default router