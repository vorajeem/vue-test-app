import "vue-material/dist/vue-material.css"
import "./style/theme.scss"
import "./style/app.styl"
import "vue-material/dist/theme/default-dark.css"
import "./style/my_theme.scss"
// import Router from "vue-router"

// default, default-dark,black-green-light,black-green-dark
import Vue from "vue"
import VueMaterial from "vue-material"
import VeeValidate from "vee-validate"

Vue.use(VueMaterial)
Vue.use(VeeValidate)
// Vue.use(Router)

import router from "./js/router.js"
import store from "./js/store.js"

// signin/signout actions
store.watch((state, getters) => getters.signed_in, signed_in => {
    if (!signed_in) {
        router.push({name: "signin"})
    } else {
        store.dispatch("next_route", router)
        store.dispatch("next_dispatch")
    }
})

import MyApp from "./components/app.vue"

var App = new (Vue.extend(MyApp))({
    el: "#root",
    router,
    store
})

export default App
