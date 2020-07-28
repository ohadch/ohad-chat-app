<template>
    <v-text-field hide-details @input="onSearch" placeholder="Search..." style="padding: 10px;"></v-text-field>
</template>

<script>
    import { debounce } from "lodash"

    export default {
        name: "ConversationSearch",
        methods: {
            onSearch: debounce(function (value) {
                this.$emit("value", value)
            }, 500)
        }
    }
</script>

<style scoped>

</style>