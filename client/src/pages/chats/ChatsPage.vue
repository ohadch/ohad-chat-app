<template>
    <v-layout>
        <v-flex>Conversations</v-flex>
        <v-flex>
            <ActiveChat />
        </v-flex>
    </v-layout>
</template>

<script>
    import ActiveChat from "./active-chat/ActiveChat";


    export default {
        name: "ChatPage",
        components: {
            ActiveChat
        }
    }
</script>

<style scoped>

</style>