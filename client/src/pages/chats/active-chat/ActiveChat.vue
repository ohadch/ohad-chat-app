<template>
    <v-layout column justify-space-between>
        <v-layout column>
            Conversation history
        </v-layout>
        <ChatInput/>
    </v-layout>
</template>

<script>
    import ChatInput from "./components/ChatInput";

    export default {
        name: "ActiveChatPage",
        components: {
            ChatInput
        }
    }
</script>

<style scoped>

</style>