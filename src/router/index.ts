import { createWebHistory, createRouter } from "vue-router";


const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes: [{ path: "/", name: "home", component:   }] });

export default router;
