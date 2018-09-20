import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import AppSignin from "../components/signin.vue"
import AppContent from "../components/content.vue"
import mimiccomponent from "../components/mimiccomponent.vue"
import spectrumcomponent from "../components/spectrumcomponent.vue"
import unitoverviewcomponent from "../components/unitoverviewcomponent.vue"
import trendcomponent from "../components/trendcomponent.vue"
import dashboard from "../components/dashboard.vue"

const router = new VueRouter({
    routes: [
        {name: "signin", path: "/signin", component: AppSignin},
        {name: "mimic", path: "/mimic", component: mimiccomponent},
        {name: "spectrum", path: "/spectrum", component: spectrumcomponent},
        {name: "unitoverview", path: "/overview", component: unitoverviewcomponent},
        {name: "trend", path: "/trend", component: trendcomponent},
        {name: "dashboard", path: "/dashboard", component: dashboard},
        {name: "content", path: "/", component: AppContent},
        {path: "*", redirect: {name: "content"}}
    ]
})

export default router
