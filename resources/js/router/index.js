import { createRouter, createWebHistory } from "vue-router";

import About from '../pages/About.vue'
import Home from "../pages/Home.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import SingleBlog from "../pages/SingleBlog.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import Dashboard from "../pages/Dashboard.vue";
import CreateCategory from "../pages/category/CreateCategory.vue";
import CategoryList from "../pages/category/CategoryList.vue";
import EditCategory from "../pages/category/EditCategory.vue";
import CreatePost from "../pages/post/CreatePost.vue";
import EditPost from "../pages/post/EditPost.vue";
import DashboardPostList from "../pages/post/DashboardPostList.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/blog/:slug",
        name: "SingleBlog",
        component: SingleBlog,
        props: true,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta:{requiresGuest:true}
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta:{requiresGuest:true}
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta:{requiresAuth:true}
    },
    {
        path: "/category/create",
        name: "CreateCategory",
        component: CreateCategory,
        meta:{requiresAuth:true}
    },
    {
        path: "/categories",
        name: "CategoryList",
        component: CategoryList,
        meta:{requiresAuth:true}
    },
    {
        path: "/category/:id/edit",
        name: "EditCategory",
        component: EditCategory,
        meta:{requiresAuth:true},
        props:true
    },

    {
        path: "/post/create",
        name: "CreatePost",
        component: CreatePost,
        meta:{requiresAuth:true}
    },
  {
    path: "/dashboard-posts",
    name: "DashboardPostList",
    component: DashboardPostList,
    meta:{requiresAuth:true},
},

{
    path: "/post/:slug/edit",
    name: "EditPost",
    component: EditPost,
    meta:{requiresAuth:true},
    props:true
},


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from)=>{
    const authenticated = localStorage.getItem('authenticated');
    
    if(to.meta.requiresGuest && authenticated){
        return{
            name: "Dashboard",
        };
    }
    else if(to.meta.requiresAuth && !authenticated){
        return {
            name: "Login",
        };
    }
})
export default router;