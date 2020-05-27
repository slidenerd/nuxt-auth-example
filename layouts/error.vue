<template>
    <v-container fluid class="fill-height">
        <v-layout column justify-center align-center>
            <v-flex xs12 sm8 md6>
                <v-row align="center" justify="center">
                    <v-col cols="12">
                        <h1 v-if="error.statusCode === 404">
                            {{ pageNotFound }}
                        </h1>
                        <h1 v-else>
                            {{ otherError }}
                        </h1>
                        <NuxtLink to="/">
                            Home page
                        </NuxtLink>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        layout: 'default',
        props: {
            error: {
                type: Object,
                default: null
            }
        },
        data () {
            return {
                pageNotFound: '404 Not Found',
                otherError: 'An error occurred'
            };
        },
        head () {
            const title =
                this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
            return {
                title
            };
        }
    };
</script>

<style scoped>
    h1 {
        font-size: 20px;
    }
</style>
