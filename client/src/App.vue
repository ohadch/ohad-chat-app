<template>
    <v-app>

        <v-main>
            <router-view></router-view>
        </v-main>
        <BottomNavigation v-if="showBottomNavigation"/>
    </v-app>
</template>

<script>
    import {mapState} from "vuex";

    import BottomNavigation from "./components/BottomNavigation";
    import {M_SHOW_BOTTOM_NAVIGATION} from "./store/mutations/ui.mutations";

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

            this.$store.commit(`ui/${M_SHOW_BOTTOM_NAVIGATION}`);
        },
        computed: {
            ...mapState("ui", {
                showBottomNavigation: "bottomNavigation"
            }),
            ...mapState("user", {
                user: "active"
            })
        }
    };
</script>
