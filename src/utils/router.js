import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        // 设置别名后 ../views/home.vue 改成 @/views/home.vue
        // @ = src文件夹
        component: () => import('@/views/home.vue')
    },
    {
        path: '/dome1',
        component: () => import('@/views/dome1.vue')
    },
    {
        path: '/dome2',
        component: () => import('@/views/dome2.vue')
    }
]

const router = createRouter({
    // history: createMemoryHistory(),
    history: createWebHashHistory(),
    routes
})

export default router
