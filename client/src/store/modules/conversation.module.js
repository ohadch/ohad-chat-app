import conversationService from "../../services/conversation.service";

import {M_ADD_MESSAGE, M_SET_CONVERSATIONS, M_SET_SELECTED_CONVERSATION} from "../mutations/conversation.mutations";
import {
    A_FETCH_CONVERSATIONS,
    A_GET_OR_CREATE_CONVERSATION,
    A_SEND_MESSAGE
} from "../actions/conversation.actions";

export default {
    namespaced: true,
    state: {
        selected: null,
        conversations: []
    },
    actions: {
        async [A_SEND_MESSAGE](_, {user, contact, text}) {
            this._vm.$socket.client.emit('message', {
                senderId: user._id,
                recipientId: contact._id,
                text
            });
        },
        async [A_FETCH_CONVERSATIONS]({commit}) {
            const conversations = await conversationService.getConversations();
            commit(M_SET_CONVERSATIONS, conversations)
        },
        async [A_GET_OR_CREATE_CONVERSATION]({commit, dispatch}, contact) {
            const conversation = await conversationService.getOrCreateConversation(contact)
            dispatch(A_FETCH_CONVERSATIONS);
            commit(M_SET_SELECTED_CONVERSATION, conversation);
        },
    },
    mutations: {
        [M_SET_CONVERSATIONS](state, conversations) {
            state.conversations = conversations;
        },
        [M_SET_SELECTED_CONVERSATION](state, conversation) {
            state.selected = conversation;
        },
        [M_ADD_MESSAGE](state, message) {
            state.selected.messages.push(message);
        },
    }
}