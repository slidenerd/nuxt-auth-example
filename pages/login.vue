<template>
    <v-container fluid class="fill-height">
        <v-snackbar v-model="snackbar.show" top right vertical :color="snackbar.color" :timeout="snackbar.timeout">
            {{ snackbar.text }}
            <v-btn text @click="snackbar.show = false">
                Close
            </v-btn>
        </v-snackbar>

        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card shaped class="login-card elevation-12">
                    <v-form @submit.prevent.stop="login">
                        <v-toolbar flat dark color="primary" class="d-flex justify-center align-center">
                            <logo />
                        </v-toolbar>

                        <v-card-text>
                            <v-alert type="error" :value="error" dismissible transition="scale-transition">
                                {{ error }}
                            </v-alert>
                            <br />

                            <v-text-field
                                v-model="username"
                                label="Username"
                                name="username"
                                type="text"
                                outlined
                                placeholder=" " />

                            <v-text-field
                                v-model="password"
                                label="Password"
                                name="password"
                                :append-icon="showPassword ? `mdi-eye` : `mdi-eye-off`"
                                @click:append="showPassword = !showPassword"
                                :type="showPassword ? `text` : `password`"
                                outlined
                                placeholder=" " />

                            <div class="d-flex justify-end">
                                <v-btn color="primary" type="submit" :loading="loading" :disabled="$auth.loggedIn">
                                    Login
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
    .v-card {
        border-radius: 0.625rem;
    }

    .v-card header {
        border-radius: 0.625rem 0;
    }
</style>

<script>
    import Logo from '../components/Logo';

    export default {
        components: { Logo },

        data () {
            return {
                username: '',
                password: '',
                showPassword: false,
                error: null,
                loading: false,
                snackbar: {
                    show: false,
                    color: '',
                    text: '',
                    timeout: 0
                }
            };
        },

        methods: {
            async login () {
                this.error = null;
                this.loading = true;
                this.snackbar.show = false;

                try {
                    await this.$auth.loginWith( 'local', {
                        data: {
                            username: this.username,
                            password: this.password
                        }
                    } );

                    this.snackbar.color = 'success';
                    this.snackbar.text = 'Successfully logged in. Redirecting..';
                    this.snackbar.timeout = 2000;
                    this.snackbar.show = true;

                    setTimeout( async () => {
                        this.snackbar.show = false;
                        await this.$router.push( '/' );
                    }, 2000 );
                } catch ( err ) {
                    if (
                        typeof err.response === 'undefined' ||
                        typeof err.response.data === 'undefined' ||
                        typeof err.response.data.message === 'undefined'
                    ) {
                        this.snackbar.color = 'error';
                        this.snackbar.text = err.message;
                        this.snackbar.timeout = 5000;
                        this.snackbar.show = true;
                        return;
                    }

                    this.error = err.response.data.message;
                }

                this.loading = false;
            }
        }
    };
</script>
