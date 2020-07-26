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

            <template v-for="(conversation, index) in conversations">

                <v-list-item
                        :key="conversation.user"
                        @click="onConversationSelected(conversation)"
                >
                    <v-list-item-avatar>
                        <v-img :src="conversation.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="conversation.user"></v-list-item-title>
                        <v-list-item-subtitle v-html="conversation.messages[conversation.messages.length - 1]"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>


                <v-divider
                        :key="index"
                        :inset="conversations.inset"
                ></v-divider>

            </template>
        </v-list>
    </v-card>
</template>
0
<script>
    import { mapState } from "vuex";

    import {M_SET_SELECTED} from "../../../store/mutations/conversation.mutations";
    import {A_FETCH_CONVERSATIONS} from "../../../store/actions/conversation.actions";

    export default {
        name: "ConversationsList",
        async mounted() {
            await this.$store.dispatch(`conversation/${A_FETCH_CONVERSATIONS}`);
        },
        computed: {
            ...mapState("conversation", ["conversations"])
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