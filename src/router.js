import Home from "./Views/Home.vue";
import Admin from './Views/Admin.vue';
import product from './Views/productDetails.vue';
import order from './Views/orders.vue';
import { createRouter, createWebHistory } from "vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: "/productdetails/:id",
        component: product
    },
    {
        path: "/order",
        component: order
    },
    {
        path: '/admin',
        component: Admin
    },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;