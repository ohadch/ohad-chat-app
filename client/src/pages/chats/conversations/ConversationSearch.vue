<template>
    <v-text-field @input="onSearch" placeholder="Search Contact..." style="padding: 10px;"></v-text-field>
</template>

<script>
    import { debounce } from "lodash"

    export default {
        name: "ConversationSearch",
        data() {
            return {
                search: ""
            }
        },
        methods: {
            onSearch: debounce(function (value) {
                this.$emit("value", value)
            }, 500)
        }
    }
</script>

<style scoped>

</style>