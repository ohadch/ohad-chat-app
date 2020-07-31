<template>
  <v-toolbar elevation="3" color="#E6E6E6" height="64px">
    <v-toolbar-title>
      <v-list-item style="padding-left: 0;">
        <ContactAvatar :contact="contact"/>

        <v-list-item-content style="margin-left: 10px;">
          <v-list-item-title v-html="contact.nickname"></v-list-item-title>
          <v-list-item-subtitle
              v-html="connectivityStatus"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
import ContactAvatar from "@/components/ContactAvatar";

export default {
  name: "ConversationToolbar",
  components: {ContactAvatar},
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  computed: {
    connectivityStatus() {
      return this.contact.isOnline
          ? "Online"
          : this.contact.lastSeen
              ? `Last seen on ${new Date(this.contact.lastSeen).toUTCString()}`
              : ""
    }
  }
}
</script>

<style scoped>

</style>