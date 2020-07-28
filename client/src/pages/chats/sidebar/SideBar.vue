<template>
    <v-card
            max-width="350"
            class="mx-auto"
            height="100%"
    >
        <v-subheader
                style="background: #ECDBBD"
                v-text="'Conversations'"
        ></v-subheader>
        <ConversationSearch @value="onSearch"/>

        <ConversationsList :conversations="filteredConversations"/>
        <ContactsList v-if="search" :contacts="externalContacts"/>

    </v-card>
</template>
0
<script>
    import ConversationSearch from "./ConversationSearch";
    import ContactsList from "./contacts-list/ContactsList";
    import contactsService from "../../../services/contacts.service";
    import {mapState} from "vuex";
    import ConversationsList from "./conversations-list/ConversationsList";
    import {A_FETCH_CONVERSATIONS} from "../../../store/actions/conversation.actions";

    export default {
        name: "SideBar",
        components: {ConversationsList, ConversationSearch, ContactsList},
        data() {
            return {
                search: "",
                externalContacts: []
            }
        },
        async mounted() {
            await this.$store.dispatch(`conversation/${A_FETCH_CONVERSATIONS}`);
        },
        computed: {
            ...mapState("conversation", ["conversations"]),
            filteredConversations() {
                return this.search ? this.conversations
                    .filter(conversation =>
                        conversation.contact.nickname.toLowerCase().includes(this.search.toLowerCase())
                    ) : this.conversations;
            }
        },
        methods: {
            async onSearch(value) {
                this.search = value;
                this.externalContacts = await contactsService.searchExternalContacts(this.search);
            }
        }
    }
</script>

<style scoped>

</style>