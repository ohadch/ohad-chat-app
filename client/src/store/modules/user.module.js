import userService from "../../services/user.service";

import {A_CHANGE_CONNECTION_STATUS, A_LOGIN, A_LOGOUT, A_SIGN_UP} from "../actions/user.actions";
import {M_LOGOUT, M_SET_ACTIVE_USER} from "../mutations/user.mutations";
import {LOCALSTORAGE_KEY_ACTIVE_USER, LOCALSTORAGE_KEY_AUTH_TOKEN} from "@/consts";
import {SocketInputEvent, UserConnectionStatus} from "../../enums";
import {M_SET_SELECTED_CONVERSATION} from "@/store/mutations/conversation.mutations";


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
        async [A_LOGIN]({commit, dispatch}, {email}) {
            const user = await userService.login({email});
            commit(M_SET_ACTIVE_USER, user)
            dispatch(A_CHANGE_CONNECTION_STATUS, true);
        },
        [A_CHANGE_CONNECTION_STATUS]({ state }, isOnline) {

            this._vm.$socket.client.emit(SocketInputEvent.UserConnectionStatusChanged, {
                userId: state.active._id,
                connectionStatus: isOnline ? UserConnectionStatus.Online : UserConnectionStatus.Offline
            })
        },
        [A_LOGOUT]({commit, dispatch}) {
            dispatch(A_CHANGE_CONNECTION_STATUS, false);
            commit(`conversation/${M_SET_SELECTED_CONVERSATION}`, null, {root: true});
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
