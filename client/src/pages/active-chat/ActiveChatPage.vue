<template>
    <v-layout column justify-space-between>
        <v-layout column>
            <v-toolbar>
                <v-btn>Back</v-btn>
            </v-toolbar>
        </v-layout>
        <ChatInput/>
    </v-layout>
</template>

<script>
    import ChatInput from "./components/ChatInput";
    import {M_HIDE_BOTTOM_NAVIGATION, M_SHOW_BOTTOM_NAVIGATION} from "../../store/mutations/ui.mutations";

    export default {
        name: "ActiveChatPage",
        components: {
            ChatInput
        },
        mounted() {
            this.$store.commit(`ui/${M_HIDE_BOTTOM_NAVIGATION}`);
        },
        beforeDestroy() {
            this.$store.commit(`ui/${M_SHOW_BOTTOM_NAVIGATION}`);
        },
    }
</script>

<style scoped>

</style>