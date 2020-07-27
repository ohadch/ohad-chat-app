import conversationService from "../../services/conversation.service";

import {M_ADD_MESSAGE, M_SET_CONVERSATIONS, M_SET_SELECTED} from "../mutations/conversation.mutations";
import {A_FETCH_CONVERSATIONS, A_SEND_MESSAGE} from "../actions/conversation.actions";

export default {
    namespaced: true,
    state: {
        selected: null,
        conversations: []
    },
    actions: {
        async [A_SEND_MESSAGE]({ commit, state }, message) {
            const id = state.selected.messages
                .map(foo => foo._id)
                .reduce((a, b) => a > b ? a : b) +  1

            commit(M_ADD_MESSAGE, {...message, _id: id})
        },
        async [A_FETCH_CONVERSATIONS]({ commit }) {
            const conversations = await conversationService.getConversations();
            commit(M_SET_CONVERSATIONS, conversations)
        }
    },
    mutations: {
        [M_SET_CONVERSATIONS](state, conversations) {
            state.conversations = conversations;
        },
        [M_SET_SELECTED](state, conversation) {
            state.selected = conversation;
        },
        [M_ADD_MESSAGE](state, message) {
            state.selected.messages.push(message);
        }
    }
}