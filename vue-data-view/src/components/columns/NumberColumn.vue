<template>
    <td :class="[...dataClass, 'number-column']">
        {{ row[column.fieldName] }}
    </td>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, AlignType, ColumnDataTypeEnum } from '../types';
    import { ConvertAlignTypeToString } from '../functions';

    @Component
    export default class NumberColumn extends Vue {
        @Prop({ required: true, type: Object })
        private column!: ColumnType;

        @Prop({ required: true, type: Object })
        private row!: Record<string, any>;


        private get dataClass() {
            if (this.column.data && this.column.data.align) {
                return [ConvertAlignTypeToString(this.column.data.align)];
            }
            else {
                if (this.column.data && this.column.data.type && this.column.data.type == ColumnDataTypeEnum.Number) {
                    return ["text-right"];
                }
            }
            return ["text-left"];
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
