<template>
    <label>{{ text }}</label>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class Label extends Vue {
        @Prop() private text!: string;
    }
</script>

<style lang="scss" scoped>
    label {
        width: 100%;
        font-size: 12pt;
    }
</style>