<template>
    <v-list three-line style="padding-top: 0">
        <v-subheader>My Conversations</v-subheader>
        <v-list-item
                @click="onConversationSelected(conversation)"
                :key="conversation.contact._id"
                :conversation="conversation"
                v-for="conversation in conversations"
        >
            <ContactAvatar :list-item="true" :contact="conversation.contact" />

            <v-list-item-content>
                <v-list-item-title v-html="conversation.contact.nickname"></v-list-item-title>
                <v-list-item-subtitle
                        v-html="conversation.messages.length ? conversation.messages[conversation.messages.length - 1].text : ''"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    import {A_GET_OR_CREATE_CONVERSATION} from "@/store/actions/conversation.actions";
    import ContactAvatar from "@/components/ContactAvatar";

    export default {
        name: "ConversationsList",
      components: {ContactAvatar},
      props: {
            conversations: {
                type: Array,
                required: true
            },
            search: {
                type: String,
                required: false
            }
        },
        methods: {
            onConversationSelected(conversation) {
                this.$store.dispatch(`conversation/${A_GET_OR_CREATE_CONVERSATION}`, conversation.contact)
            }
        }
    }
</script>

<style scoped>

</style>