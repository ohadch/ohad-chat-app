<template>
    <v-layout style="margin: 10px 0 10px 0;">
        <v-spacer v-if="isRight"></v-spacer>
        <v-card :color="color" width="300px">
            <v-card-text>
                {{ message.text }}
            </v-card-text>
        </v-card>
        <v-spacer v-if="isLeft"></v-spacer>
    </v-layout>
</template>

<script>
    import { mapState } from "vuex";
    import {COLORS} from "../../../../../../server/src/theme";

    export default {
        name: "MessageBubble",
        props: {
            message: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapState("user", {
                user: "active"
            }),
            ...mapState("contacts", ["contacts"]),
            sender() {
              return this.contacts.find(contact => contact._id === this.message.sender)
            },
            recipient() {
              return this.contacts.find(contact => contact._id === this.message.recipient)
            },
            isSentByMe() {
                return this.sender._id === this.user._id
            },
            isSentToMe() {
                return !this.isSentByMe
            },
            color() {
                return this.isSentToMe ? COLORS.receivedMessage: COLORS.sentMessage;
            },
            isLeft() {
                return this.isSentToMe
            },
            isRight() {
                return this.isSentByMe
            }
        }
    }
</script>

<style scoped>

</style>