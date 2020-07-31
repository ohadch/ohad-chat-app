<template>
  <fragment>
    <v-list-item-avatar :color="color" v-if="listItem">
      <v-img v-if="contact.avatar" :src="contact.avatar"></v-img>
      <span v-else class="white--text" style="padding-left: 12px;">{{ contactInitials }}</span>
    </v-list-item-avatar>
    <v-avatar :color="color" v-else>
      <v-img v-if="contact.avatar" :src="contact.avatar"></v-img>
      <span v-else class="white--text headline">{{ contactInitials }}</span>
    </v-avatar>
  </fragment>

</template>

<script>
import * as d3 from "d3";

export default {
  name: "ContactAvatar",
  props: {
    listItem: {
      type: Boolean,
      required: false
    },
    contact: {
      type: Object,
      required: true
    }
  },
  computed: {
    color() {
      return d3.scaleOrdinal(d3.schemeCategory10)(this.contact.nickname + "Asdgsgf")
    },
    contactInitials() {
      return this.contact.nickname.slice(0, 2).toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>