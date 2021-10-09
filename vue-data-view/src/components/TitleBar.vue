<template>
    <div class="title-bar">
        {{title}}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class TitleBar extends Vue {
        @Prop() private title!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .title-bar {
        margin-bottom: 5px;
        padding: 10px 10px;
        background-color: blue;
        color: white;
        text-align:left;
    }
</style>
