<template>
    <v-form style="display: inline-flex; margin: 0 5px -25px 0; width: 100%; padding: 0 19px 0 9px;" @submit.prevent="onMessageSent">
        <v-text-field hide-details v-model="text" outlined style="padding: 10px;"/>
        <v-btn type="submit" class="primary" style="margin: 9px 5px 0 0; height: 57px;">Send</v-btn>
    </v-form>
</template>

<script>
    import { mapState } from "vuex";

    import {A_SEND_MESSAGE} from "../../../../store/actions/conversation.actions";

    export default {
        name: "ChatInput",
        data() {
            return {
                text: ""
            }
        },
        computed: {
            ...mapState("conversation", {
                conversation: "selected"
            }),
            ...mapState("user", {
                user: "active"
            })
        },
        methods: {
            onMessageSent() {
                if (!this.text) return;

                this.$store.dispatch(`conversation/${A_SEND_MESSAGE}`, {
                    user: this.user,
                    contact: this.conversation.contact,
                    text: this.text
                })

                this.text = "";
            }
        }
    }
</script>

<style scoped>

</style>