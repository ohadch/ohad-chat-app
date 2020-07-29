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
            isSentByMe() {
                return this.message.sender._id === this.user._id
            },
            isSentToMe() {
                return !this.isSentByMe
            },
            color() {
                return this.isSentToMe ? "#CBE9F6": "#EFE8D6";
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