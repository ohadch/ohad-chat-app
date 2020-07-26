import conversationService from "../../services/conversation.service";

import {M_SET_CONVERSATIONS, M_SET_SELECTED} from "../mutations/conversation.mutations";
import {A_FETCH_CONVERSATIONS} from "../actions/conversation.actions";

export default {
    namespaced: true,
    state: {
        selected: null,
        conversations: []
    },
    actions: {
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
        }
    }
}