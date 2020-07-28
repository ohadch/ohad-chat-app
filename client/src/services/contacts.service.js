export default {
    getContacts,
    searchExternalContacts
}

const CONTACTS = [
    {
        firstName: "Ronald",
        lastNAme: "Weasley",
        nickname: "griffind0r"
    },
    {
        firstName: "Miley",
        lastNAme: "Cyrus",
        nickname: "mileybu"
    }
]

const EXTERNAL_CONTACTS = [
    {
        firstName: "External",
        lastNAme: "One",
        nickname: "external1"
    },
    {
        firstName: "External",
        lastNAme: "2",
        nickname: "external2"
    }
]

async function getContacts() {
    return CONTACTS
}

async function searchExternalContacts(filterByText) {
    return EXTERNAL_CONTACTS.filter(contact => contact.nickname.toLowerCase().includes(filterByText.toLowerCase()))
}