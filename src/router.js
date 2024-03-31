import {createRouter, createWebHistory} from 'vue-router';
import Login from './pages/Login.vue'
import Users from './pages/Users.vue'
import AddUser from './components/users/Add.vue'
import View from './components/users/View.vue'
import EditUser from './components/users/Edit.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/login' // Redirect the default path to /login
      },
    {
        path: '/login',
        name: 'login',
        component: Login 
    },
    {
        path: '/users', 
        name: 'users',
        component: Users
    },
    {
        path: '/add', 
        name: 'add',
        component: AddUser
    },
    {
        path: '/view/:id', 
        name: 'view',
        component: View
    },
    {
        path: '/edit/:id', 
        name: 'edit',
        component: EditUser
    },
    {
        path: '/:pathMatch(.*)*',
        name:'notfound', 
        component: NotFound
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;