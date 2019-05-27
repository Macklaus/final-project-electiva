import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Singup from '@/views/Singup.vue';
import Home from '@/views/Home.vue';
import config from '@/config';
import CreateNew from '@/views/CreateNew.vue';
import NewDetail from '@/views/NewDetail.vue';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('auth')){
                return next({path: '/home'});
            }
            next();
        }
    },
    {
        path: '/singup',
        component: Singup,
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('auth')){
                return next({path: '/home'});
            }
            next();
        }
    },
    {
        path: '/home',
        component: Home
    },{
        path: '',
        redirect: '/home'
    },{
        path: '/create-new',
        component: CreateNew
    },{
        path: '/new/:id',
        component: NewDetail
    }]
});

export default router;