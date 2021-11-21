<template>
    <th :class="headClass">
        {{column.title}}
    </th>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, AlignType } from './types';
    import { ConvertAlignTypeToString } from './functions';

    @Component
    export default class HeaderColumn extends Vue {
        @Prop({ required: true, type: Object })
        private column!: ColumnType;

        private get headClass() {
            if (this.column.header) {
                return [ConvertAlignTypeToString(this.column.header.align)];
            }
            return ["left"];
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .left {
        text-align: left
    }
    .right {
        text-align: right
    }
    .center {
        text-align: center
    }
</style>
