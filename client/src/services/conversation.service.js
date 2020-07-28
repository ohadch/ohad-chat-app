import apiService from "./api.service"

export default {
    getConversations,
    getOrCreateConversation
}

async function getConversations() {
    const {conversations} = await apiService.request("GET", "/api/conversations")
    return conversations;
}

async function getOrCreateConversation(contact) {
    return apiService.request("POST", "/api/conversations", {
        body: {
            contact
        }
    })
}


//
// const AUTHENTICATED_USER = "me"
//
// function createMessages(userA, userB, numMessages) {
//     return [...Array(numMessages).keys()].map(idx => {
//         const sentBy = Math.random() > 0.3 ? userA : userB;
//
//         return {
//             _id: idx,
//             sentAt: new Date(),
//             sentBy,
//             text: `${sentBy} sent Message ${idx}`
//         }
//     })
// }
//
// const CONVERSATIONS = [
//     {
//         contact: {
//             _id: 0,
//             firstName: 'John',
//             lastName: 'Doe',
//             nickname: 'Johnny Cash',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
//         },
//         messages: createMessages('John Doe', AUTHENTICATED_USER, 10),
//     },
//     {
//         contact: {
//             _id: 1,
//             firstName: 'Lavender',
//             lastName: 'Brown',
//             nickname: 'lovelove',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
//         },
//         messages: createMessages('Lavender Brown', AUTHENTICATED_USER, 10),
//     },
//     {
//         contact: {
//             _id: 2,
//             firstName: 'Ronald',
//             lastName: 'Weasley',
//             nickname: 'griffind0r',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
//         },
//         messages: createMessages('Ronald Weasley', AUTHENTICATED_USER, 10),
//     },
//     {
//         contact: {
//             _id: 3,
//             firstName: 'Miley',
//             lastName: 'Cyrus',
//             nickname: 'mileybu',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
//         },
//         messages: createMessages('Miley', AUTHENTICATED_USER, 10),
//     },
//     {
//         contact: {
//             _id: 4,
//             firstName: 'Alice',
//             lastName: 'Bob',
//             nickname: 'aliexpress',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
//         },
//         messages: createMessages('Ali Express', AUTHENTICATED_USER, 10),
//     },
// ]
