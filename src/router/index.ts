

import {
    createRouter,
    createMemoryHistory
} from 'vue-router';


const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;