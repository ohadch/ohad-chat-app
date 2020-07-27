<template>
    <fragment>
        <v-list-item
                :key="conversation.user"
                @click="onConversationSelected(conversation)"
        >
            <v-list-item-avatar>
                <v-img :src="conversation.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="conversation.user"></v-list-item-title>
                <v-list-item-subtitle
                        v-html="conversation.messages[conversation.messages.length - 1]"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider
                :key="index"
                :inset="conversation.inset"
        ></v-divider>
    </fragment>
</template>

<script>
    import {M_SET_SELECTED} from "../../../store/mutations/conversation.mutations";

    export default {
        name: "ConversationListItem",
        props: {
            conversation: {
                type: Object,
                required: true
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