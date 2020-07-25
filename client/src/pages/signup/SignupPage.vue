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
                        <v-form @submit.prevent="onSignUp">
                            <v-text-field
                                    label="First Name"
                                    name="firstName"
                                    v-model="firstName"
                                    type="text"
                            ></v-text-field>
                            <v-text-field
                                    label="Last Name"
                                    name="lastName"
                                    v-model="lastName"
                                    type="text"
                            ></v-text-field>
                            <v-text-field
                                    label="Email"
                                    name="email"
                                    v-model="email"
                                    type="text"
                            ></v-text-field>
                            <v-text-field
                                    label="Nickname"
                                    name="nickname"
                                    v-model="nickname"
                                    type="text"
                            ></v-text-field>
                                                    <v-btn type="submit" color="primary">Sign Up</v-btn>

                        </v-form>
                        <p>Already have an account?
                            <router-link to="/login">Sign In</router-link>
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {A_SIGN_UP} from "../../store/actions/user.actions";

    export default {
        name: "SignupPage",
        data() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                nickname: "",
            }
        },
        methods: {
            async onSignUp() {
                await this.$store.dispatch(`user/${A_SIGN_UP}`, {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    nickname: this.nickname,
                })
            }
        }
    }
</script>

<style scoped>

</style>