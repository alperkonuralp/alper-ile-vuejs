<template>
    <button @click="onClick">Deneme - {{row.name}}</button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { AlignType, ColumnDataTypeEnum, ColumnType } from './components/types';

    @Component
    export default class Deneme extends Vue {
        @Prop({ required: true, type: Object })
        private column!: ColumnType;

        @Prop({ required: true, type: Object })
        private row!: Record<string, any>;

        private onClick() {
            alert('tiklandi');
        }
    }
</script>

<style lang="scss">
</style>
