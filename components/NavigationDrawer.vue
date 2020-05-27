<template>
    <v-navigation-drawer app clipped v-model="drawer">
        <v-list dense v-if="$auth.loggedIn">
            <div :key="i" v-for="(link,i) in links">
                <v-list-item link :to="link.path" v-if="!link.subLinks">
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{link.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-group v-else no-action>
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>{{link.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ link.name }}</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="(subLink,i) in link.subLinks" :to="subLink.path" :key="i">
                        <v-list-item-content>
                            <v-list-item-title>{{ subLink.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </div>

            <v-divider class="my-2" />

            <v-list-item link @click.prevent.stop="logout">
                <v-list-item-icon>
                    <v-icon>mdi-exit-to-app</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data () {
            return {
                links: [
                    {
                        path: `/`,
                        icon: `mdi-view-dashboard`,
                        name: `Dashboard`
                    },

                    {
                        path: `/inspire`,
                        icon: `mdi-book`,
                        name: `Inspire`
                    }
                ]
            };
        },
        computed: {
            ...mapGetters( [
                'getDrawerState'
            ] ),
            drawer: {
                get () {
                    return this.getDrawerState;
                },
                set ( value ) {
                    this.setDrawerState( value );
                }
            }
        },
        methods: {
            ...mapActions( [
                'setDrawerState'
            ] ),

            async logout () {
                await this.$auth.logout();
                await this.$router.push( '/login' );
            }
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
