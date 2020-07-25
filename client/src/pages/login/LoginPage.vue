<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Login to Ohad's Chat</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form @submit.prevent="onLogin">
                            <v-text-field
                                    v-model="email"
                                    label="Username"
                                    name="username"
                                    prepend-icon="mdi-account"
                                    type="text"
                            ></v-text-field>
                            <v-layout justify-center>
                                <v-btn type="submit" color="primary">Login</v-btn>
                            </v-layout>
                        </v-form>
                        <v-spacer />
                        <p>Need an account?
                            <router-link to="/signup">Sign Up</router-link>
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {A_LOGIN} from "../../store/actions/user.actions";

    export default {
        name: "LoginPage",
        data() {
            return {
                email: ""
            }
        },
        methods: {
            async onLogin() {
                await this.$store.dispatch(`user/${A_LOGIN}`, {
                    email: this.email,
                })
            }
        }
    }
</script>

<style scoped>

</style>