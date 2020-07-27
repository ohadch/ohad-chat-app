<template>
    <v-form style="display: inline-flex; padding: 0 10px 0 0; margin-bottom: -25px;" @submit.prevent="onMessageSent">
        <v-text-field outlined style="padding: 10px;"/>
        <v-btn class="primary" style="margin: 9px 5px 0 0; height: 57px;">Send</v-btn>
    </v-form>
</template>

<script>
    export default {
        name: "ChatInput",
        methods: {
            onMessageSent() {
                alert("Not implemented")
            }
        }
    }
</script>

<style scoped>

</style>