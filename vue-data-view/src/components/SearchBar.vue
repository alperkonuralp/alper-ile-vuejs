<template>
    <div class="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class SearchBar extends Vue {
        @Prop() private msg!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .search-bar {
        margin-bottom: 5px;
        padding: 10px;
        background-color: #eeeeee;
        color: black;
        text-align: left;

        input[type=text] {
            margin-right: 5px;
        }
    }
</style>
