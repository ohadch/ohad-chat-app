import {M_ADD_MESSAGE} from "../mutations/conversation.mutations";
import {A_MESSAGE_FROM_SERVER} from "@/store/actions/message.actions";

export default {
    state: {
        messages: []
    },
    actions: {
        [A_MESSAGE_FROM_SERVER]({commit}, message) {
            commit(`conversation/${M_ADD_MESSAGE}`, message)
        }
    }
}