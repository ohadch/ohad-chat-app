import {M_HIDE_BOTTOM_NAVIGATION, M_SHOW_BOTTOM_NAVIGATION} from "../mutations/ui.mutations";

export default {
    namespaced: true,
    state: {
        bottomNavigation: false
    },
    mutations: {
        [M_SHOW_BOTTOM_NAVIGATION](state) {
            state.bottomNavigation = true;
        },
        [M_HIDE_BOTTOM_NAVIGATION](state) {
            state.bottomNavigation = false;
        }
    }
}