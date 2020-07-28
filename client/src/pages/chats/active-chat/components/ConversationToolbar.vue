<template>
    <v-toolbar flat color="#E6E6E6" height="64px">
        <v-toolbar-title>
            <v-list-item style="padding-left: 0;">
                <v-list-item-avatar>
                    <v-img :src="contact.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-html="contact.nickname"></v-list-item-title>
                    <v-list-item-subtitle
                            v-html="'Online or Offline'"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
    export default {
        name: "ConversationToolbar",
        props: {
            contact: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>