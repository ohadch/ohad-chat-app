<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-btn class="error" @click="onLogout">Logout</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {A_LOGOUT} from "../../store/actions/user.actions";

    export default {
        name: "SettingsPage",
        methods: {
            onLogout() {
                this.$store.dispatch(`user/${A_LOGOUT}`);
            }
        }
    }
</script>

<style scoped>

</style>