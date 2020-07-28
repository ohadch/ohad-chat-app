import apiService from "./api.service";


export default {
    getContacts
}



async function getContacts(filterByText) {
    const options = filterByText ? {
        params: {
            filterByText
        }
    } : {}

    const {users} = await apiService.request("GET", "/api/contacts", options)
    return users;
}


//
// const CONTACTS = [
//     {
//         firstName: "Ronald",
//         lastNAme: "Weasley",
//         nickname: "griffind0r"
//     },
//     {
//         firstName: "Miley",
//         lastNAme: "Cyrus",
//         nickname: "mileybu"
//     }
// ]
//
// const EXTERNAL_CONTACTS = [
//     {
//         firstName: "External",
//         lastNAme: "One",
//         nickname: "external1"
//     },
//     {
//         firstName: "External",
//         lastNAme: "2",
//         nickname: "external2"
//     }
// ]
