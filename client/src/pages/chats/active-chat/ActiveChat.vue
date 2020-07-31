<template>
    <v-layout column justify-space-between>
        <v-flex v-if="conversation">
            <ConversationToolbar :contact="contact" />
            <v-flex ref="messagesContainer"
                    style="padding: 0 11px 0 20px; margin: 2px 0 0 0; height: 76vh; overflow-y: scroll; scroll-snap-type: y mandatory; overscroll-behavior-y: contain;">
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
    import ConversationToolbar from "./components/ConversationToolbar";

    export default {
        name: "ActiveChat",
        components: {
            ConversationToolbar,
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
            ...mapState("contacts", ["contacts"]),
            messages() {
                return this.conversation && this.conversation.messages;
            },
            contact() {
                return this.contacts.find(contact => contact._id === this.conversation.contact._id)
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