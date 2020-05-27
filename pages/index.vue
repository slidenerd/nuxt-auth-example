<template>
    <v-row justify="center">
        <v-col cols="12" md="8" lg="5">
            <v-card>
                <v-card-title class="headline">
                    Welcome to the nuxt-auth-example
                </v-card-title>

                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea laborum qui velit! Accusamus
                    consectetur eligendi et inventore labore nihil officia officiis qui quibusdam velit? Blanditiis
                    dolorem doloribus ducimus error et illum, incidunt iste laborum libero maxime nobis non
                    perferendis quam quibusdam similique tempora tenetur voluptas? A aliquam assumenda culpa ducimus
                    eveniet expedita, facere hic incidunt ipsum libero magnam maxime perferendis possimus quos
                    ratione saepe similique sit tenetur voluptate, voluptates! Accusamus accusantium adipisci at
                    beatae deleniti dolores doloribus, error excepturi fuga fugiat fugit impedit iusto minima nam
                    necessitatibus officiis, optio perspiciatis praesentium provident quidem quis quos soluta
                    tenetur vel velit.

                    <div class="d-flex justify-end mt-7">
                        <v-btn to="/inspire" color="primary">Continue</v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        layout: 'dashboard'
    };
</script>
