import {M_ADD_MESSAGE} from "../mutations/conversation.mutations";

export default {
    state: {
        messages: []
    },
    actions: {
        socket_chatMessage({commit}, messageJson) {
            const message = JSON.parse(messageJson)
            commit(`conversation/${M_ADD_MESSAGE}`, message)
        }
    },
    // mutations: {
    //     SOCKET_CHAT_MESSAGE(state, messageJson) {
    //         const message = JSON.parse(messageJson)
    //         state.messages.push(message);
    //     }
    // }
}