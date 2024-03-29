import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/components/Login'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
