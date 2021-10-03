<template>
    <td :class="dataClass">
        {{ row[column.fieldName] }}
    </td>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, AlignType } from './types';
    import { ConvertAlignTypeToString } from './functions';

    @Component
    export default class DataColumn extends Vue {
        @Prop({ required: true, type: Object })
        private column!: ColumnType;

        @Prop({ required: true, type: Object })
        private row!: Record<string, any>;


        private get dataClass() {
            if (this.column.data) {
                return [ConvertAlignTypeToString(this.column.data.align)];
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
