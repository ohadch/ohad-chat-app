import userService from "../../services/user.service";

import {A_LOGIN, A_LOGOUT, A_SIGN_UP} from "../actions/user.actions";
import {M_LOGOUT, M_SET_ACTIVE_USER} from "../mutations/user.mutations";
import {LOCALSTORAGE_KEY_ACTIVE_USER, LOCALSTORAGE_KEY_AUTH_TOKEN} from "../../consts";



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
            sessionStorage.setItem(LOCALSTORAGE_KEY_ACTIVE_USER, JSON.stringify(user));
            sessionStorage.setItem(LOCALSTORAGE_KEY_AUTH_TOKEN, user._id);
            state.active = user;
        },
        [M_LOGOUT](state) {
            sessionStorage.removeItem(LOCALSTORAGE_KEY_ACTIVE_USER)
            sessionStorage.removeItem(LOCALSTORAGE_KEY_AUTH_TOKEN)
            state.active = null;
        }
    }
}

function getCachedUser() {
    try {
        return sessionStorage.getItem(LOCALSTORAGE_KEY_ACTIVE_USER)
            ? JSON.parse(sessionStorage.getItem(LOCALSTORAGE_KEY_ACTIVE_USER))
            : null
    } catch (e) {
        sessionStorage.removeItem(LOCALSTORAGE_KEY_ACTIVE_USER)
    }
}
