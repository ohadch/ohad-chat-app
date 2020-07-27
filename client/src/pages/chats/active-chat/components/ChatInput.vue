<template>
    <v-form style="display: inline-flex; margin: 0 5px -25px 0;" @submit.prevent="onMessageSent">
        <v-text-field outlined style="padding: 10px;"/>
        <v-btn type="submit" class="primary" style="margin: 9px 5px 0 0; height: 57px;">Send</v-btn>
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