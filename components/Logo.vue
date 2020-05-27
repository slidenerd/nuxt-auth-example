<template>
    <img :src="logo" alt="Discord Storage Logo" width="192">
</template>

<script>
    export default {
        computed: {
            logo () {
                return this.$vuetify.theme.dark ? '/logo-dark.svg' : '/logo.svg';
            }
        }
    };
</script>
