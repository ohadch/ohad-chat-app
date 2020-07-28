<template>
    <v-layout fill-height>
        <SideBar/>
        <ActiveChat/>
    </v-layout>
</template>

<script>
    import ActiveChat from "./active-chat/ActiveChat";
    import SideBar from "./sidebar/SideBar";

    export default {
        name: "ChatPage",
        components: {
            SideBar,
            ActiveChat
        }
    }
</script>

<style scoped>

</style>