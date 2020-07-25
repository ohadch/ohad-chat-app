import {A_LOGOUT} from "../actions/user.actions";
import {M_LOGOUT} from "../mutations/user.mutations";

export default {
    namespaced: true,
    state: {
        active: null
    },
    actions: {
        [A_LOGOUT]({ commit }) {
            commit(M_LOGOUT)
        }
    },
    mutations: {
        [M_LOGOUT](state) {
            state.active = null;
        }
    }
}