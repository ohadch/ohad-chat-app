import {A_FETCH_CONTACTS} from "../actions/contacts.actions";

import contactsService from "../../services/contacts.service";
import {M_SET_CONTACTS} from "../mutations/contacts.mutations";

export default {
    namespaced: true,
    state: {
        contacts: [],
    },
    actions: {
        async [A_FETCH_CONTACTS]({ commit }) {
            const contacts = await contactsService.getContacts()
            commit(M_SET_CONTACTS, contacts);
        }
    },
    mutations: {
        [M_SET_CONTACTS](state, contacts) {
            state.contacts = contacts;
        }
    }
}