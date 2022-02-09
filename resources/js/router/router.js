//import vue router
import { createRouter, createWebHistory } from "vue-router";

//import vue router
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

//define a routes
const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        name: "dashboard",
    },
    {
        path: "/login",
        component: Login,
        name: "login",
    },
    {
        path: "/",
        component: Login,
    },
];

//create router
const router = createRouter({
    history: createWebHistory(),
    routes, // config routes
});

export default router;
