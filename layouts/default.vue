<template>
    <v-app>
        <v-content>
            <nuxt />
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
    import AppFooter from '../components/AppFooter';

    export default {
        components: { AppFooter }
    };
</script>
