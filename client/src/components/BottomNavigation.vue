<template>
  <v-bottom-navigation style="padding: 10px; background: #ECDBBD;" grow>
    <v-btn to="/profile">
      <span>Profile</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn to="/">
      <span>Chats</span>
      <v-icon>mdi-chat</v-icon>
    </v-btn>

    <v-btn to="/settings">
      <span>Settings</span>
      <v-icon>mdi-cogs</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNavigation"
    }
</script>

<style>
</style>