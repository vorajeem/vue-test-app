<template>
    <div id="root" class="page-container">
        <md-app>
            <md-app-toolbar class="md-accent md-dense">
                <router-link class="md-title" to="/">Inspecta Mk III</router-link>
        <div>
            
          <md-tabs class="md-transparent">
            <md-tab id="tab-mimic" md-label="Mimic"></md-tab>
            <md-tab id="tab-trend" md-label="Trend"></md-tab>
            <md-tab id="tab-spectrum" md-label="Spectrum"></md-tab>
            <md-tab id="tab-dashboard" md-label="Dashboard"></md-tab>
            <md-tab id="tab-overview" md-label="Overview"></md-tab>
          </md-tabs>
        </div>

                <span v-show="username">{{username}}</span>
                        <div v-show="signed_in">
                    <md-menu md-direction="bottom-start">
                        <md-button class="md-icon-button" md-menu-trigger>
                            <md-icon>more_vert</md-icon>
                        </md-button>

                        <md-menu-content>
                            <md-menu-item @click="do_signout">Sign Out</md-menu-item>
                        </md-menu-content>
                    </md-menu>
                </div>

            </md-app-toolbar>



            <md-app-content id="content">

            <nav md-tab-nav-bar>
                <a md-tab-link >hi</a>
                <a md-tab-link >hi</a>
            </nav>
            <router-link to="/mimic">
            <md-button>Mimic</md-button></router-link>
            <router-link to="/spectrum">
            <md-button>Spectrum</md-button>
            </router-link>
            <router-link to="/trend">
            <md-button>Trend</md-button>
            </router-link>
            <router-link to="/dashboard"> 
            <md-button>Dashboard</md-button>
            </router-link>
            <router-link to="/overview">
            <md-button>Unit overview</md-button>
            </router-link>
                <router-view></router-view>
            </md-app-content>
        </md-app>

        <md-dialog-alert
            id="dialog-alert"
            :md-active="show_dialog"
            @update:mdActive="UPDATE_ERROR(null)"
            md-title="Error"
            :md-content="error"
            :md-click-outside-to-close="false"
            ></md-dialog-alert>

        <md-snackbar
            :md-active="current_feedback != null"
            @update:mdActive="clear_feedback"
            md-persistent
            >
            <span>{{current_feedback}}</span>
        </md-snackbar>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from "vuex"
export default {
    name: "my-app",
    computed: {
        ...mapState(["username"]),
        ...mapState({"error": "last_error"}),
        ...mapGetters(["signed_in", "current_feedback", "dashboard_route"]),
        ...mapGetters({"show_dialog_state": "show_dialog"}),
        show_dialog() {
            return this.$route.name !== "signin" && this.show_dialog_state
        }
    },
    methods: {
        ...mapMutations(["UPDATE_ERROR"]),
        ...mapActions(["clear_feedback", "signout"]),
        async do_signout() {
            await this.signout()
            this.$router.push({name: "signin"})
        }
    }
}
</script>

<style lang="stylus">
#root, &>.md-app
    min-height: 100vh

#dialog-alert
    z-index: 999

.md-toolbar .md-title
    flex: 1

    &:hover
        text-decoration: none
        font-weight: 500

#content
    background-color: inherit

    > div, form
        max-width: 600px
        margin-left: auto
        margin-right: auto
</style>
