import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import Home from '@/views/Home.vue'
const routes: Array<RouteRecordRaw> = [
    {   
        name:'home',
        path:'/',
        component: Home
    },
    {
        name:'other',
        path:'/snake',
        component:() => import('../module/snake/Snake.vue')
    },
    {
        name:'photo',
        path:'/photo',
        component:() => import('../module/photo/index.vue')
    }

]
const Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default Router