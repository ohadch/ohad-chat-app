import Vue from 'vue'
import Vuex from 'vuex'

import user from "./modules/user.module";
import conversation from "./modules/conversation.module";
import contacts from "./modules/contacts.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    conversation,
    contacts,
  }
})
