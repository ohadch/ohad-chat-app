<template>
    <v-card
            max-width="350"
            class="mx-auto"
            height="100%"
            elevation="6"
    >
        <v-card-title
                style="background: #ECDBBD"
                v-text="toolbarTitle"
        ></v-card-title>
        <v-card-text style="padding: 0;">
            <ConversationSearch @value="onSearch"/>
            <ConversationsList :conversations="filteredConversations"/>
            <ContactsList v-if="search" :contacts="contactsWithoutActiveConversations"/>
        </v-card-text>

    </v-card>
</template>
0
<script>
    import {mapState} from "vuex";

    import ConversationSearch from "./ConversationSearch";
    import ContactsList from "./contacts-list/ContactsList";
    import ConversationsList from "./conversations-list/ConversationsList";
    import {A_FETCH_CONVERSATIONS} from "../../../store/actions/conversation.actions";
    import {A_FETCH_CONTACTS} from "../../../store/actions/contacts.actions";

    export default {
        name: "SideBar",
        components: {ConversationsList, ConversationSearch, ContactsList},
        data() {
            return {
                search: ""
            }
        },
        async mounted() {
            await Promise.all([
                this.$store.dispatch(`conversation/${A_FETCH_CONVERSATIONS}`),
                this.$store.dispatch(`contacts/${A_FETCH_CONTACTS}`)

            ]);
        },
        computed: {
            ...mapState("user", {
                activeUser: "active"
            }),
            ...mapState("conversation", ["conversations"]),
            ...mapState("contacts", ["contacts"]),
            filteredConversations() {
                return this.search ? this.conversations
                    .filter(conversation =>
                        conversation.contact.nickname.toLowerCase().includes(this.search.toLowerCase())
                    ) : this.conversations;
            },
            contactsWithActiveConversations() {
                return this.filteredConversations.map(conversation => conversation.contact);
            },
            contactsWithoutActiveConversations() {
                const contactsWithActiveConversationsIds = this.contactsWithActiveConversations.map(contact => contact._id)
                return this.contacts.filter(contact =>
                    !contactsWithActiveConversationsIds.includes(contact._id)
                    && contact.nickname.toLowerCase().includes(this.search.toLowerCase())
                )
            },
            toolbarTitle() {
                return `Hello, ${this.activeUser.nickname}`
            }
        },
        methods: {
            async onSearch(value) {
                this.search = value;
            }
        }
    }
</script>

<style scoped>

</style>