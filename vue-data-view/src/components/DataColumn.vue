<template>
    <td :class="dataClass">
        <component :is="columnTypeComponentName" 
                   :column="column"
                   :row="row"
                   />
    </td>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ColumnType, AlignType, ColumnDataTypeEnum } from './types';
    import { ConvertAlignTypeToString } from './functions';
    import { ColumnNameList, TextColumn, NumberColumn } from './columns';

    @Component({
        components: {
            TextColumn,
            NumberColumn,
        }
    })
    export default class DataColumn extends Vue {
        @Prop({ required: true, type: Object })
        private column!: ColumnType;

        @Prop({ required: true, type: Object })
        private row!: Record<string, any>;

        private get columnTypeComponentName() {
            if (this.column.data && this.column.data.type) {
                return ColumnNameList[this.column.data.type];
            }
            return ColumnNameList[0];
        }

        private get dataClass() {
            if (this.column.data && this.column.data.align) {
                return [ConvertAlignTypeToString(this.column.data.align)];
            }
            else {
                if (this.column.data && this.column.data.type && this.column.data.type == ColumnDataTypeEnum.Number) {
                    return ["right"];
                }
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
