<template>
    <v-layout fill-height>
        <ConversationsList/>
        <ActiveChat/>
    </v-layout>
</template>

<script>
    import ActiveChat from "./active-chat/ActiveChat";
    import ConversationsList from "./conversations/ConversationsList";

    export default {
        name: "ChatPage",
        components: {
            ActiveChat,
            ConversationsList
        }
    }
</script>

<style scoped>

</style>