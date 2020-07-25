import userService from "../../services/user.service";

import {A_LOGIN, A_LOGOUT, A_SIGN_UP} from "../actions/user.actions";
import {M_LOGOUT, M_SET_ACTIVE_USER} from "../mutations/user.mutations";

const KEY_ACTIVE_USER = "user";


export default {
    namespaced: true,
    state: {
        active: getCachedUser()
    },
    actions: {
        async [A_SIGN_UP]({commit}, {firstName, lastName, email, nickname}) {
            const user = await userService.signUp({firstName, lastName, email, nickname});
            commit(M_SET_ACTIVE_USER, user)
        },
        async [A_LOGIN]({commit}, {email}) {
            const user = await userService.login({email});
            commit(M_SET_ACTIVE_USER, user)
        },
        [A_LOGOUT]({commit}) {
            commit(M_LOGOUT)
        }
    },
    mutations: {
        [M_SET_ACTIVE_USER](state, user) {
            localStorage.setItem(KEY_ACTIVE_USER, JSON.stringify(user));
            state.active = user;
        },
        [M_LOGOUT](state) {
            localStorage.removeItem(KEY_ACTIVE_USER)
            state.active = null;
        }
    }
}

function getCachedUser() {
    try {
        return localStorage.getItem(KEY_ACTIVE_USER)
            ? JSON.parse(localStorage.getItem(KEY_ACTIVE_USER))
            : null
    } catch (e) {
        localStorage.removeItem(KEY_ACTIVE_USER)
    }
}
