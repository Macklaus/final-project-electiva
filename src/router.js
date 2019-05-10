import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Singup from '@/views/Singup.vue';
import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/login',
        component: Login
    },
    {
        path: '/singup',
        component: Singup
    },
    {
        path: '/home',
        component: Home
    }]
});

export default router;