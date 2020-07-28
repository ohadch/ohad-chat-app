<template>
    <fragment>
        <v-layout column justify-space-between v-if="conversation">
                <v-toolbar flat style="max-height: 48px;" color="#E6E6E6">
                    <v-toolbar-title style="padding-bottom: 7px;">
                        <v-avatar size="36">
                            <img
                                    :src="contact.avatar"
                                    :alt="contact.nickname"
                            >
                        </v-avatar>
                        {{ contact.nickname }}
                    </v-toolbar-title>
                </v-toolbar>
                <v-flex ref="messagesContainer" style="max-height: 80vh; padding: 10px; overflow-y: scroll; scroll-snap-type: y mandatory; overscroll-behavior-y: contain;">
                    <MessageBubble v-for="message in messages" :key="message.id" :message="message" />
                </v-flex>
                <ChatInput/>
        </v-layout>
        <v-layout v-else style="padding: 10px;">
            No conversation is selected
        </v-layout>
    </fragment>
</template>

<script>
    import {mapState} from "vuex";
    import ChatInput from "./components/ChatInput";
    import MessageBubble from "./components/MessageBubble";

    export default {
        name: "ActiveChat",
        components: {
            MessageBubble,
            ChatInput
        },
        updated() {
            this.scrollToBottom()
        },
        computed: {
            ...mapState("conversation", {
                conversation: "selected"
            }),
            messages() {
                return this.conversation && this.conversation.messages;
            },
            contact() {
                return this.conversation && this.conversation.contact;
            }
        },
        methods: {
            scrollToBottom() {
                const container = this.$refs.messagesContainer;
                if (!container) return;

                container.scrollTop = container.scrollHeight - container.clientHeight;
            },
        },
        watch: {
            messages() {
                this.scrollToBottom()
            }
        }
    }
</script>

<style scoped>

</style>