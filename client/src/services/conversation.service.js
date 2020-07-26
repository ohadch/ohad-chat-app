export default {
    getConversations
}

async function getConversations() {
    return [
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            user: 'John Doe',
            messages: ["I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"],
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            user: 'Lavender Brown',
            messages: ["Have any ideas about what we should get Heidi for her birthday?"],
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            user: 'Ronald Weasley',
            messages: ["Wish I could come, but I'm out of town this weekend."],
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            user: 'Miley',
            messages: ["Do you have Paris recommendations? Have you ever been?"],
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            user: 'Ali Express',
            messages: ["We should eat this: Grate, Squash, Corn, and tomatillo Tacos."],
        },
    ]
}