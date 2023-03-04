import {createRouter , createWebHashHistory} from 'vue-router'
import Login from '../pages/login.vue';
import Detail from '../pages/detail.vue';

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,

    } ,
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        meta: {
            needsAuth: true
        }
    } ,

]


const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

//Auth Guards 
router.beforeEach((to, from, next) => {

    // get the token from local storage
    const token = localStorage.getItem('isLogged');

    if (to.meta.needsAuth) { // if the page needs authentication
       
        if (token) {
            next() // you can go to that page
        } else {
            next('/') // you can't go to that page
        }
    } else {
        // you can't go to login page if you're already logged in
        if(token){
            next("/Detail") ;  
        }
        next();
    }
})

export default router
