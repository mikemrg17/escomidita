import { createRouter, createWebHistory } from "vue-router"
import { supabase } from "../supabase"

const auth_guard = async (to: any, from: any, next: any) => {
    const {
        data: {user},
    } = await supabase.auth.getUser()

    if(user){
        next()
    }else{
        next({name: "signIn"})
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) return savedPosition

        if(to.hash) return {el: to.hash, behavior: "smooth"}

        window.scrollTo(0, 0)
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/signUp",
            name: "signUp",
            component: () => import("../views/SignUpView.vue"),
        },
        {
            path: "/signIn",
            name: "signIn",
            component: () => import("../views/SignInView.vue"),
        },
        {
            path: "/forgotPassword",
            name: "forgotPassword",
            component: () => import("../views/ForgotPasswordView.vue"),
        },
        {
            path: "/resetPassword",
            name: "resetPassword",
            component: () => import("../views/ResetPasswordView.vue"),
        },
        {
            path: "/app",
            name: "app",
            component: () => import("../views/AppView.vue"),
            beforeEnter: auth_guard,
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("../views/CartView.vue"),
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("../views/ProfileView.vue"),
            beforeEnter: auth_guard,
        },
        {
            path: "/stores",
            name: "stores",
            component: () => import("../views/StoresView.vue"),
        },
        {
            path:"/stores/:id",
            name: "store",
            component: () =>  import("../views/StoreView.vue"),
        }
    ],
})

export default router
