<template>
    <select v-model="internalValue">
        <option v-for="item in items" :key="item" :value="item">{{item}}</option>
    </select>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class DropDownList extends Vue {
        @Prop() private value!: string;
        @Prop() private items!: string[];

        private get internalValue() {
            return this.value;
        }

        private set internalValue(v: string) {
            this.$emit('input', v);
        }
    }
</script>

<style lang="scss" scoped>
    select {
        width: 100%;
        font-size: 12pt;
    }
</style>