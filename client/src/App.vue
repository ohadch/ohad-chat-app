<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <BottomNavigation v-if="user"/>
  </v-app>
</template>

<script>
import {mapState} from "vuex";

import BottomNavigation from "./components/BottomNavigation";
import {A_CHANGE_CONNECTION_STATUS} from "@/store/actions/user.actions";
import {SocketOutputEvent} from "@/enums";
import {A_FETCH_CONTACTS} from "@/store/actions/contacts.actions";

export default {
  name: 'App',
  components: {
    BottomNavigation,
  },
  mounted() {
    if (!this.user) {
      return this.$router.push("/login").then();
    } else {
      this.$store.dispatch(`user/${A_CHANGE_CONNECTION_STATUS}`, true)
    }

    this.$socket.$subscribe(SocketOutputEvent.UserConnectionStatusChanged, () => {
      this.$store.dispatch(`contacts/${A_FETCH_CONTACTS}`)
    });
  },
  computed: {
    ...mapState("user", {
      user: "active"
    })
  },
  watch: {
    user(val) {
      val
          ? this.$router.push("/")
          : this.$router.push("/login")

    }
  }
};
</script>
