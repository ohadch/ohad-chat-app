<template>
    <v-app>
        <v-main>
        <v-app-bar v-if="user" class="primary">
            Hello, {{ user.nickname }}
            <v-spacer />
            <v-btn>
                 <v-icon>mdi-plus</v-icon>
                 <v-icon>mdi-chat</v-icon>
            </v-btn>
        </v-app-bar>
            <router-view></router-view>
        </v-main>
        <BottomNavigation v-if="user"/>
    </v-app>
</template>

<script>
    import {mapState} from "vuex";

    import BottomNavigation from "./components/BottomNavigation";

    export default {
        name: 'App',
        components: {
            BottomNavigation,
        },
        data: () => ({
            //
        }),
        mounted() {
            if (!this.user) {
                this.$router.push("/login")
                return;
            }
        },
        computed: {
            ...mapState("user", {
                user: "active"
            })
        },
        watch: {
            user(val) {
                val
                    ? this.$router.push("/")
                    : this.$router.push("/login")

            }
        }
    };
</script>
