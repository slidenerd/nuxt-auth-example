<template>
    <v-app>
        <app-bar />

        <navigation-drawer />

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <app-footer />
    </v-app>
</template>

<style>
    html {
        overflow: auto;
    }
</style>

<script>
    import NavigationDrawer from '../components/NavigationDrawer';
    import AppBar from '../components/AppBar';
    import AppFooter from '../components/AppFooter';

    export default {
        components: { NavigationDrawer, AppBar, AppFooter }
    };
</script>
