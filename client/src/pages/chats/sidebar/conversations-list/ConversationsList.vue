<template>
    <v-list three-line style="padding-top: 0">
        <v-subheader>My Conversations</v-subheader>
        <v-list-item
                @click="onConversationSelected(conversation)"
                :key="conversation.contact._id"
                :conversation="conversation"
                v-for="conversation in conversations"
        >
            <v-list-item-avatar>
                <v-img :src="conversation.contact.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="conversation.contact.nickname"></v-list-item-title>
                <v-list-item-subtitle
                        v-html="conversation.messages.length ? conversation.messages[conversation.messages.length - 1].text : ''"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    import {M_SET_SELECTED} from "../../../../store/mutations/conversation.mutations";

    export default {
        name: "ConversationsList",
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
                this.$store.commit(`conversation/${M_SET_SELECTED}`, conversation)
            }
        }
    }
</script>

<style scoped>

</style>