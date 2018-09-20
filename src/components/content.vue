<template>
        <!-- <md-card-header>
            <div class="md-title">Heldfdflo!</div>
        </md-card-header> -->

        <!-- <md-card-content>
            <p>Hello, {{username}}!</p>
            <p v-if="thing">Thing: {{thing}}</p>
        </md-card-content> -->

        <!-- <md-card-actions>
            <md-button class="md-accent">Cancel</md-button>
            <md-button class="md-primary" :disabled="is_loading" @click="do_get_thing">
                <span v-show="!is_loading">Get Thing</span>
                <md-progress-spinner
                    class="app-spinner"
                    v-if="is_loading"
                    md-mode="indeterminate"
                    :md-diameter="20"
                    :md-stroke="2"
                    ></md-progress-spinner>
            </md-button>
        </md-card-actions> -->
    <div>
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Mimic
                </div>
            </md-card-header>

            <md-card-content>
                Mimic goes here
            </md-card-content>
        </md-card>
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Trend
                </div>
            </md-card-header>
            <md-card-content>
                Trend goes here
            </md-card-content>
        </md-card>

        <md-card>
            <md-card-header>
                <div class="md-title">
                    Spectrum
                </div>
            </md-card-header>
            <md-card-content>
                Spectrum goes here
            </md-card-content>
        </md-card>

        <md-card>
            <md-card-header>
                <div class="md-title">
                    Unit overview
                </div>
            </md-card-header>

            <md-card-content>
                Unit overview
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"
import AuthorizedMixin from "./authorized-mixin.js"
export default {
    name: "app-content",
    mixins: [AuthorizedMixin],
    computed: {
        ...mapState(["username", "thing"]),
        ...mapGetters(["is_loading"])
    },
    methods: {
        ...mapActions(["get_thing"]),
        do_get_thing() {
            if (this.is_loading) { return }
            this.get_thing()
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>
