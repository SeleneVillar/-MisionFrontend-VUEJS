import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RealizarPedidoView from '../views/RealizarPedidoView.vue'
import PasteleroView from '../views/PasteleroView.vue'

const routes = [{
        path: '/',
        name: 'inicio',
        component: HomeView,
    },
    {
        path: '/nosotros',
        name: 'nosotros',
        component: HomeView,
    },
    {
        path: '/menu',
        name: 'menu',
        component: HomeView,
    },
    {
        path: '/galeria',
        name: 'galeria',
        component: HomeView,
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: HomeView,
    },
    {
        path: '/realizar-pedido',
        name: 'realizar-pedido',
        component: RealizarPedidoView,
    },
    {
        path: '/administracion-pastelero',
        name: 'administracion-pastelero',
        component: PasteleroView,
    },
    {
        path: '/inventario',
        name: 'inventario',
        component: PasteleroView,
    }
]

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        //Desplazarse siempre a la parte superior
        return { top: 0 }
    },
    history: createWebHashHistory(),
    routes
})

export default router