export default {
    getConversations
}

const AUTHENTICATED_USER = "me"

function createMessages(userA, userB, numMessages) {
    return [...Array(numMessages).keys()].map(idx => {
        const sentBy = Math.random() > 0.3 ? userA : userB;

        return {
            _id: idx,
            sentAt: new Date(),
            sentBy,
            text: `${sentBy} sent Message ${idx}`
        }
    })
}

const CONVERSATIONS = [
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        user: 'John Doe',
        messages: createMessages('John Doe', AUTHENTICATED_USER, 10),
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        user: 'Lavender Brown',
        messages: createMessages('Lavender Brown', AUTHENTICATED_USER, 10),
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        user: 'Ronald Weasley',
        messages: createMessages('Ronald Weasley', AUTHENTICATED_USER, 10),
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        user: 'Miley',
        messages: createMessages('Miley', AUTHENTICATED_USER, 10),
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        user: 'Ali Express',
        messages: createMessages('Ali Express', AUTHENTICATED_USER, 10),
    },
]

async function getConversations() {
    return CONVERSATIONS
}