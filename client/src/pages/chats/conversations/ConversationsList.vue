<template>
    <v-card
            max-width="350"
            class="mx-auto"
            height="100%"
    >
        <v-list three-line style="padding-top: 0;">
            <v-subheader
                    style="background: #ECDBBD"
                    v-text="'Conversations'"
            ></v-subheader>
            <ConversationSearch />

            <ConversationListItem :key="conversation.user" :conversation="conversation"
                                  v-for="conversation in conversations">
            </ConversationListItem>
        </v-list>
    </v-card>
</template>
0
<script>
    import {mapState} from "vuex";

    import {A_FETCH_CONVERSATIONS} from "../../../store/actions/conversation.actions";
    import ConversationListItem from "./ConversationListItem";
    import ConversationSearch from "./ConversationSearch";

    export default {
        name: "ConversationsList",
        components: {ConversationSearch, ConversationListItem},
        async mounted() {
            await this.$store.dispatch(`conversation/${A_FETCH_CONVERSATIONS}`);
        },
        computed: {
            ...mapState("conversation", ["conversations"])
        }
    }
</script>

<style scoped>

</style>