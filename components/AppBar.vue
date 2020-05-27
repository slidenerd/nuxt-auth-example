<template>
    <v-app-bar app clipped-left flat>
        <nuxt-link to="/" class="d-flex align-center">
            <img :src="logo" alt="Discord Storage Logo" width="192">
        </nuxt-link>
        <v-spacer />
    </v-app-bar>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters( [
                'getDrawerState'
            ] ),
            logo () {
                return this.$vuetify.theme.dark ? '/logo-dark.svg' : '/logo.svg';
            }
        },
        methods: {
            ...mapActions( [
                'toggleDrawerState'
            ] ),
            toggleDrawer () {
                this.toggleDrawerState();
            }
        }
    };
</script>
