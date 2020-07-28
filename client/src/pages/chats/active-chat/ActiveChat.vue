<template>
    <v-layout column justify-space-between>
        <v-flex v-if="conversation">
            <v-toolbar flat color="#E6E6E6" height="64px">
                <v-toolbar-title>
                    <v-list-item style="padding-left: 0;">
                        <v-list-item-avatar>
                            <v-img :src="contact.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="contact.nickname"></v-list-item-title>
                            <v-list-item-subtitle
                                    v-html="'Online or Offline'"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-toolbar-title>
            </v-toolbar>
            <v-flex ref="messagesContainer"
                    style="max-height: 80vh; padding: 10px; overflow-y: scroll; scroll-snap-type: y mandatory; overscroll-behavior-y: contain;">
                <MessageBubble v-for="message in messages" :key="message.id" :message="message"/>
            </v-flex>
            <ChatInput/>
        </v-flex>
        <v-flex v-else style="padding: 10px;">
            No conversation is selected.
        </v-flex>
    </v-layout>
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