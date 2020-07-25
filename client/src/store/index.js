import Vue from 'vue'
import Vuex from 'vuex'

import ui from "./modules/ui.module";
import user from "./modules/user.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    user
  }
})
