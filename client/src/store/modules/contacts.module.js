import {A_FETCH_CONTACTS, A_SEARCH_CONTACTS} from "../actions/contacts.actions";

import contactsService from "../../services/contacts.service";
import {M_SET_CONTACTS, M_SET_SEARCH_RESULT_CONTACTS} from "../mutations/contacts.mutations";

export default {
    namespaced: true,
    state: {
        contacts: [],
        searchResultContacts: []
    },
    actions: {
        async [A_FETCH_CONTACTS]({ commit }, filterByText) {
            const contacts = await contactsService.getContacts(filterByText)
            commit(M_SET_CONTACTS, contacts);
        },
        async [A_SEARCH_CONTACTS]({ commit }, filterByText) {
            const contacts = await contactsService.getContacts(filterByText)
            commit(M_SET_SEARCH_RESULT_CONTACTS, contacts);
        }
    },
    mutations: {
        [M_SET_CONTACTS](state, contacts) {
            state.contacts = contacts;
        },
        [M_SET_SEARCH_RESULT_CONTACTS](state, contacts) {
            state.searchResultContacts = contacts;
        }
    }
}