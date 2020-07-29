<template>
    <v-app>
        <v-main>
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
