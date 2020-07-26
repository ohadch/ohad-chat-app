<template>
    <v-card
            max-width="350"
            class="mx-auto"
            height="100%"
    >
        <v-list three-line style="padding-top: 0;">
            <v-subheader
                    style="background: #ECDBBD"
                    v-text="'Conversations'"
            ></v-subheader>

            <template v-for="(item, index) in items">

                <v-list-item
                        :key="item.title"
                        @click="onConversationSelected"
                >
                    <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>


                <v-divider
                        :key="index"
                        :inset="item.inset"
                ></v-divider>

            </template>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "ConversationsList",
        data() {
            return {
                items: [
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                        title: 'John Doe',
                        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                        title: 'Lavender Brown',
                        subtitle: "Have any ideas about what we should get Heidi for her birthday?",
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        title: 'Ronald Weasley <span class="grey--text text--lighten-1">4</span>',
                        subtitle: "Wish I could come, but I'm out of town this weekend.",
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                        title: 'Miley',
                        subtitle: "Do you have Paris recommendations? Have you ever been?",
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                        title: 'Ali Express',
                        subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                    },
                ],
            }
        },
        methods: {
            onConversationSelected() {
                alert("Not implemented")
            }
        }
    }
</script>

<style scoped>

</style>