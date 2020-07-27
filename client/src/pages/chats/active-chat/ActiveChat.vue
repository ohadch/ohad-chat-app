<template>
    <fragment>
        <v-layout column justify-space-between v-if="conversation">
                <v-toolbar flat style="max-height: 48px;" color="#E6E6E6">
                    <v-toolbar-title style="padding-bottom: 7px;">
                        <v-avatar size="36">
                            <img
                                    :src="conversation.avatar"
                                    :alt="conversation.user"
                            >
                        </v-avatar>
                        {{ conversation.user }}
                    </v-toolbar-title>
                </v-toolbar>
                <v-flex style="padding: 10px;">
                    henlo
                </v-flex>
                <ChatInput/>
        </v-layout>
        <v-layout v-else style="padding: 10px;">
            No conversation is selected
        </v-layout>
    </fragment>
</template>

<script>
    import {mapState} from "vuex";
    import ChatInput from "./components/ChatInput";

    export default {
        name: "ActiveChatPage",
        components: {
            ChatInput
        },
        computed: {
            ...mapState("conversation", {
                conversation: "selected"
            })
        }
    }
</script>

<style scoped>

</style>