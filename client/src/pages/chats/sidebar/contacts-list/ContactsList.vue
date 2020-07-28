<template>
    <v-list three-line style="padding-top: 0;">
        <v-subheader>External Contacts</v-subheader>
        <v-list-item
                v-for="contact in contacts"
                :key="contact._id"
                @click="onContactSelected(contact)"
        >
            <v-list-item-avatar>
                <v-img :src="contact.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="contact.nickname"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>

    import {A_GET_OR_CREATE_CONVERSATION} from "../../../../store/actions/conversation.actions";

    export default {
        name: "ContactsList",
        props: {
            contacts: {
                type: Array,
                required: true
            }
        },
        methods: {
            onContactSelected(contact) {
                this.$store.dispatch(`conversation/${A_GET_OR_CREATE_CONVERSATION}`, contact)
            }
        }
    }
</script>

<style scoped>

</style>